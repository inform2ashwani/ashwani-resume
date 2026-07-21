import { Inject, Injectable } from "@angular/core";
import { DOCUMENT } from "@angular/common";
import { HttpClient } from "@angular/common/http";

import { Observable } from "rxjs";
import { catchError } from "rxjs/operators";

import { IExperience } from "../experience/experience-interfaces";
import { IAbout } from "../about/about-interfaces";
import { IPost } from "../posts/posts-interfaces";

@Injectable()
export class DataService {

    private readonly baseUrl: string;
    
    constructor(
        private http: HttpClient,
        @Inject(DOCUMENT) private document: Document
    ) {
        this.baseUrl = new URL("assets/data/", this.document.baseURI).toString();
    }

    getExperiences() : Observable<IExperience[]> {
        return this.http.get<IExperience[]>(this.getDataUrl("experiences.json"))
            .pipe(
                catchError(this.handleError)
            );
    }
    
    getAbout() : Observable<IAbout> {
      return this.http.get<IAbout>(this.getDataUrl("about.json"))
          .pipe(
              catchError(this.handleError)
          );
    }

    getPosts() : Observable<IPost[]> {
        return this.http.get<IPost[]>(this.getDataUrl("posts.json"))
            .pipe(
                catchError(this.handleError)
            );
    }

    private getDataUrl(fileName: string): string {
        return new URL(`assets/data/${fileName}`, this.document.baseURI).toString();
    }

    private handleError(error: any) {
      console.error("server error:", error);
      if (error.error instanceof Error) {
          const errMessage = error.error.message;
          return Observable.throw(errMessage);
          // Use the following instead if using lite-server
          // return Observable.throw(err.text() || "backend server error");
      }
      return Observable.throw(error || "Node.js server error");
    }
}
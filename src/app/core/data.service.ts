import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";

import { IExperience } from "../experience/experience-interfaces";
import { IAbout } from "../about/about-interfaces";
import { IPost } from "../posts/posts-interfaces";

import experiences from "../../assets/data/experiences.json";
import about from "../../assets/data/about.json";
import posts from "../../assets/data/posts.json";

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() {}

  getExperiences(): Observable<IExperience[]> {
    return of(experiences as IExperience[]);
  }

  getAbout(): Observable<IAbout> {
    return of(about as IAbout);
  }

  getPosts(): Observable<IPost[]> {
    return of(posts as IPost[]);
  }
}

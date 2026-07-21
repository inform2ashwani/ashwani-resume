import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ResumeComponent } from "./resume/resume.component";

const routes: Routes = [
  { path: "", component: ResumeComponent },   // root shows English resume
  { path: "en", component: ResumeComponent }, // optional explicit /en route
  { path: "about", redirectTo: "/#about" },
  { path: "experience", redirectTo: "/#experience" },
  { path: "experiences", redirectTo: "/#experience" },
  { path: "posts", redirectTo: "/#posts" },
  { path: "contact", redirectTo: "/#contact" },
  { path: "**", redirectTo: "/page-not-found" }
];


@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      anchorScrolling: "enabled",
      onSameUrlNavigation: "reload"
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}

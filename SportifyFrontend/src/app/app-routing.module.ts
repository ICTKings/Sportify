import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutusComponent } from './aboutus/aboutus.component';
import { EventsComponent } from './events/events.component';
import { HcLandingComponent } from './hc-landing/hc-landing.component';
import { HomeComponent } from './home/home.component';
import { HouseCaptainsComponent } from './house-captains/house-captains.component';
import { OrgLandingComponent } from './org-landing/org-landing.component';
import { OrganisersComponent } from './organisers/organisers.component';
import { ParticipantsComponent } from './participants/participants.component';
import { ResultsComponent } from './results/results.component';
import { StudentLandingComponent } from './student-landing/student-landing.component';
import { StudentSignupComponent } from './student-signup/student-signup.component';

const routes: Routes = [{path:"",component:HomeComponent},{path:"participant",component:ParticipantsComponent},{path:"organiser",component:OrganisersComponent},{path:"houseCaps",component:HouseCaptainsComponent}
,{path:"stuLand",component:StudentLandingComponent},
{path:"stuSignin",component:StudentSignupComponent},{path:"orgLand",component:OrgLandingComponent},{path:"events",component:EventsComponent}
,{path:"houseCaptainLand",component:HcLandingComponent}
,
{path:"results",component:ResultsComponent},
{
  path:"about-us",component:AboutusComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
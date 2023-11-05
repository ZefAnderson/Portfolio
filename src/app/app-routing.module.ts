import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AboutMeComponent } from "./components/pages/about-me/about-me.component";
import { AppViewerComponent } from "./components/pages/portfolio/app-viewer/app-viewer.component";
import { PortfolioComponent } from "./components/pages/portfolio/portfolio.component";
import { AngularComponent } from "./components/pages/portfolio/sidenav/angular/angular.component";
import { FirebaseComponent } from "./components/pages/portfolio/sidenav/firebase/firebase.component";
import { ReactJsComponent } from "./components/pages/portfolio/sidenav/react-js/react-js.component";
import { SourcesComponent } from "./components/pages/sources/sources.component";

const routes: Routes = [
  {path: '', redirectTo: '/about', pathMatch: 'full'},
  {path: 'about', component: AboutMeComponent, data: { animation: 'About' }},
  {
    path: 'portfolio', 
  component: PortfolioComponent, 
  data: { animation: 'Portfolio' },
    children: [
      {
        path: '',
        redirectTo: 'viewer',
        pathMatch: 'full'
      },
      {
        path: 'react',
        component: ReactJsComponent
      },
      {
        path: 'angular',
        component: AngularComponent
      },
      {
        path: 'firebase',
        component: FirebaseComponent
      }
    ],
  },
  {path: 'sources', component: SourcesComponent, data: { animation: 'Sources' } },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

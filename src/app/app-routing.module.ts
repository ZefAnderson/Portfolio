import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AboutMeComponent } from "./components/pages/about-me/about-me.component";
import { PortfolioComponent } from "./components/pages/portfolio/portfolio.component";
import { AngularComponent } from "./components/pages/portfolio/sidenav/angular/angular.component";
import { FirebaseComponent } from "./components/pages/portfolio/sidenav/firebase/firebase.component";
import { ReactJsComponent } from "./components/pages/portfolio/sidenav/react-js/react-js.component";
import { SourcesComponent } from "./components/pages/sources/sources.component";
import { LocationStrategy, HashLocationStrategy } from "@angular/common";
import { NodeComponent } from "./components/pages/portfolio/sidenav/node/node.component";

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
      },
      {
        path: 'node',
        component: NodeComponent
      }
    ],
  },
  {path: 'sources', component: SourcesComponent, data: { animation: 'Sources' } },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [
    { provide: LocationStrategy, useClass: HashLocationStrategy }
  ],
})
export class AppRoutingModule { }

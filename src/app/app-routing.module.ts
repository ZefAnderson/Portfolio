import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutMeComponent } from './components/about-me/about-me.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { SourcesComponent } from './components/sources/sources.component';
import { AppViewerComponent } from './components/portfolio/app-viewer/app-viewer.component';
import { ReactJsComponent } from './components/sidenav/react-js/react-js.component';
import { AngularComponent } from './components/sidenav/angular/angular.component';
import { FirebaseComponent } from './components/sidenav/firebase/firebase.component';

const routes: Routes = [
  { path: '', redirectTo: '/about', pathMatch: 'full' },
  {path: "about", component: AboutMeComponent, data: { animation: 'About' }},
  {
    path: "portfolio", 
    component: PortfolioComponent,
    children: [
      {
        path: '',
        redirectTo: 'viewer',
        pathMatch: 'full'
      },
      {
        path: 'viewer',
        component: AppViewerComponent
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
    data: { animation: 'Portfolio' } 
  },
  {path: "sources", component: SourcesComponent, data: { animation: 'Sources' } },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

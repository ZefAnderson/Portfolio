import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutMeComponent } from './components/about-me/about-me.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { SearchComponent } from './components/search/search.component';
import { AppViewerComponent } from './components/portfolio/app-viewer/app-viewer.component';
import { ReactJsComponent } from './components/sidenav/react-js/react-js.component';

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
        component: AppViewerComponent,
      },
      {
        path: 'react',
        component: ReactJsComponent
      }
    ],
    data: { animation: 'Portfolio' } 
  },
  {path: "search", component: SearchComponent, data: { animation: 'Search' } },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

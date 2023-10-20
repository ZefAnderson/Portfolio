import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutMeComponent } from './components/about-me/about-me.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { SearchComponent } from './components/search/search.component';

const routes: Routes = [
  { path: '', redirectTo: '/about', pathMatch: 'full' },
  {path: "about", component: AboutMeComponent, data: { animation: 'About' } },
  {path: "portfolio", component: PortfolioComponent, data: { animation: 'Portfolio' } },
  {path: "search", component: SearchComponent, data: { animation: 'Search' } },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

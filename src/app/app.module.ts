import { NgModule } from '@angular/core';
import { BrowserModule, DomSanitizer } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutMeComponent } from './components/pages/about-me/about-me.component';
import { SourcesComponent } from './components/pages/sources/sources.component';
import { PortfolioComponent } from './components/pages/portfolio/portfolio.component';
import { SidenavComponent } from './components/pages/portfolio/sidenav/sidenav.component';
import { AppViewerComponent } from './components/pages/portfolio/app-viewer/app-viewer.component';
import { TopNavComponent } from './components/top-nav/top-nav.component';
import { LinkNavComponent } from './components/link-nav/link-nav.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule, MatIconRegistry } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatDividerModule } from '@angular/material/divider';
import { MatTabsModule } from '@angular/material/tabs';
import { MatCardModule } from '@angular/material/card';
import { ReactJsComponent } from './components/pages/portfolio/sidenav/react-js/react-js.component';
import { AngularComponent } from './components/pages/portfolio/sidenav/angular/angular.component';
import { FirebaseComponent } from './components/pages/portfolio/sidenav/firebase/firebase.component';
import { PagesComponent } from './components/pages/pages.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutMeComponent,
    SourcesComponent,
    PortfolioComponent,
    SidenavComponent,
    AppViewerComponent,
    TopNavComponent,
    LinkNavComponent,
    ReactJsComponent,
    AngularComponent,
    FirebaseComponent,
    PagesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatSidenavModule,
    MatListModule,
    MatDividerModule,
    HttpClientModule,
    MatTabsModule,
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(
    private matIconRegistry: MatIconRegistry, 
    private domSanitizer: DomSanitizer
    ) {
      this.registerSvgIcons([
        'github',
        'linkedin',
        'mail',
      ]);
    }

    private registerSvgIcons(iconNames: string[]): void {
      iconNames.forEach((iconName) => {
        this.matIconRegistry.addSvgIcon(
          iconName, 
          this.domSanitizer.bypassSecurityTrustResourceUrl(`assets/icons/${iconName}.svg`)
        )
      })
    }
}

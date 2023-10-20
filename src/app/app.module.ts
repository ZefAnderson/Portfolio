import { NgModule } from '@angular/core';
import { BrowserModule, DomSanitizer } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AboutMeComponent } from './components/about-me/about-me.component';
import { SearchComponent } from './components/search/search.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { SidenavComponent } from './components/portfolio/sidenav/sidenav.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule, MatIconRegistry } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatDividerModule } from '@angular/material/divider';
import { MatTabsModule } from '@angular/material/tabs';
import { MatCardModule } from '@angular/material/card';
import { AppViewerComponent } from './components/portfolio/app-viewer/app-viewer.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutMeComponent,
    SearchComponent,
    PortfolioComponent,
    SidenavComponent,
    AppViewerComponent,
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

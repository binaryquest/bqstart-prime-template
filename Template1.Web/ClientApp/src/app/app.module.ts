import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { registerLocaleData } from '@angular/common';

import { CheckboxModule } from 'primeng/checkbox';
import { RadioButtonModule } from 'primeng/radiobutton';
import { NgSelectModule } from '@ng-select/ng-select';
import { NgOptionHighlightModule } from '@ng-select/ng-option-highlight';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { CounterComponent } from './counter/counter.component';

import { BQStartPrimeModule, AuthorizeGuard, AuthorizeInterceptor, LocaleProvider } from 'bq-start-prime';
import { APP_CONFIG } from './app.config';
import localeAU from '@angular/common/locales/en-AU';

//register all locale data here
registerLocaleData(localeAU);

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CounterComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    CheckboxModule,
    RadioButtonModule,
    NgSelectModule,
    NgOptionHighlightModule,
    //bootstrap BQ-Start module here
    BQStartPrimeModule.forRoot(APP_CONFIG),
    //general components roures
    RouterModule.forRoot([
      { path: '', component: HomeComponent, pathMatch: 'full', canActivate: [AuthorizeGuard] },
      { path: 'counter', component: CounterComponent },
    ]
    )
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthorizeInterceptor, multi: true },
    LocaleProvider
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

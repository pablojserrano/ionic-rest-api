//
//
import { NgModule } from '@angular/core';
import { HttpClientModule } from "@angular/common/http"
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { PaisService } from './services/pais.service';

//
//
@NgModule({     
                declarations:       [   AppComponent
                                    ],
                entryComponents:    [
                                    ],
                imports:            [   BrowserModule, IonicModule.forRoot(), AppRoutingModule, HttpClientModule
                                    ],
                providers:          [   PaisService,
                                        {   provide: RouteReuseStrategy, 
                                            useClass: IonicRouteStrategy },
                                    ],
                bootstrap:          [   AppComponent
                                    ],
            })

//
//
export class AppModule {}

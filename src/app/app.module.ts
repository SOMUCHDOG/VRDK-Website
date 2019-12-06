import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule, AngularFireObject, AngularFireDatabase } from 'angularfire2/database';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';

//my shit
import { DragDirective } from './upload/dragDrop.directive';
import { HelloComponent } from './upload/hello.component';
import { FileDropDirective } from './file-drop.directive';
import { masterFirebaseConfig } from './api-keys';


@NgModule({
  declarations: [AppComponent, DragDirective, HelloComponent, FileDropDirective],
  entryComponents: [],
  imports: [
    AngularFireModule.initializeApp(masterFirebaseConfig),
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    FormsModule,
    AngularFireDatabaseModule
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PrimaryComponent } from './components/primary/primary.component';
import { SmallNamesPipe } from './pipes/small-names-pipe/small-names-pipe.pipe';
import { DataService } from './services/data/data.service';

@NgModule({
  declarations: [
    AppComponent,
    PrimaryComponent,
    SmallNamesPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }

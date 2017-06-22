import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap'

import { AppComponent } from './app.component';
import {StoreModule} from '@ngrx/store';
import {metaReducer} from 'app/common/index';
import { TemplateModalComponent } from './template-modal/template-modal.component';

@NgModule({
  declarations: [
    AppComponent,
    TemplateModalComponent
  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot(),
    StoreModule.provideStore(metaReducer),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

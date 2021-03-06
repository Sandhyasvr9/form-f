import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http'

import {BrowserAnimationsModule} from '@angular/platform-browser/animations'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatInputModule} from '@angular/material/input'
import {MatRadioModule} from '@angular/material/radio';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { SectionCFormFComponent } from './section-cform-f/section-cform-f.component'
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material/core';
import { SectionDformFComponent } from './section-dform-f/section-dform-f.component';
import {MatSelectModule} from '@angular/material/select';
import { SignaturePadModule } from 'angular2-signaturepad';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { SectionAComponent } from './section-a/section-a.component';
import { SectionBComponent } from './section-b/section-b.component';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import { SuccessMsgComponent } from './success-msg/success-msg.component';
import { FailureMsgComponent } from './failure-msg/failure-msg.component';
import {MatDialogModule} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideDatabase,getDatabase } from '@angular/fire/database';
import {AngularFireModule} from '@angular/fire/compat';
import {AngularFireDatabaseModule} from '@angular/fire/compat/database';
import { FormService } from './shared/form.service';
import { UpdateMsgComponent } from './update-msg/update-msg.component';
import { SubmitMsgComponent } from './submit-msg/submit-msg.component';
import { DeleteMsgComponent } from './delete-msg/delete-msg.component';



@NgModule({
  declarations: [
    AppComponent,
    SectionCFormFComponent,
    SectionDformFComponent,
    HomeComponent,
    NotFoundComponent,
    SectionAComponent,
    SectionBComponent,
    SuccessMsgComponent,
    FailureMsgComponent,
    UpdateMsgComponent,
    SubmitMsgComponent,
    DeleteMsgComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MatCheckboxModule,
    MatInputModule,
    MatRadioModule,
    MatDatepickerModule,
    MatNativeDateModule,
    HttpClientModule,
    MatSelectModule,
    SignaturePadModule,
    MatButtonToggleModule,
    MatDialogModule,
    MatButtonModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideDatabase(() => getDatabase())
  ],
  providers: [FormService],
  bootstrap: [AppComponent],
})
export class AppModule { }

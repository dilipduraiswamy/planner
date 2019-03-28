import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TextfieldComponent } from './textfield/textfield.component';
import { SelectComponent } from './select/select.component';
import { CheckboxComponent } from './checkbox/checkbox.component';
import { LabelComponent } from './label/label.component';
import { ButtonComponent } from './button/button.component';
import { RadioComponent } from './radio/radio.component';
import { DatepickerComponent } from './datepicker/datepicker.component';

import {MatToolbarModule} from '@angular/material/toolbar';
import {MatGridListModule} from '@angular/material/grid-list';

  import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; 
  import { FormsModule, ReactiveFormsModule } from "@angular/forms";
  import { MatMomentDateModule } from "@angular/material-moment-adapter";
  import { CommonModule } from "@angular/common";
  import {
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatListModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSelectModule,
    MatOptionModule,
    MatCheckboxModule,
    MatRadioModule
    } from "@angular/material";
import { DynamicFieldDirective } from './dynamic-field/dynamic-field.directive';
import { DynamicFormComponent } from './dynamic-form/dynamic-form.component';
import {DragDropModule} from '@angular/cdk/drag-drop';

@NgModule({
  declarations: [
    AppComponent,
    TextfieldComponent,
    SelectComponent,
    CheckboxComponent,
    LabelComponent,
    ButtonComponent,
    RadioComponent,
    DatepickerComponent,
    DynamicFieldDirective,
    DynamicFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatInputModule,
    MatCheckboxModule,
    MatDatepickerModule,
    MatRadioModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MatMomentDateModule,
    CommonModule,
    MatButtonModule,
MatIconModule,
MatCardModule,
MatFormFieldModule,
MatInputModule,
MatListModule,
MatDatepickerModule,
MatNativeDateModule,
MatMomentDateModule,
MatSelectModule,
MatOptionModule,
MatCheckboxModule,
MatRadioModule,
MatToolbarModule,
MatGridListModule,
DragDropModule
  ],
  exports: [
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatListModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatMomentDateModule,
    MatSelectModule,
    MatOptionModule,
    MatCheckboxModule,
    MatRadioModule
    ],
    entryComponents: [
      TextfieldComponent,
      ButtonComponent,
      SelectComponent,
      CheckboxComponent
      ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

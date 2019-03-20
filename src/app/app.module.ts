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

  import {MatCheckboxModule} from '@angular/material/checkbox';
  import {MatDatepickerModule} from '@angular/material/datepicker';
  import {MatInputModule} from '@angular/material/input';
  import { MatSelectModule } from '@angular/material/select';
  import {MatRadioModule} from '@angular/material/radio';
  import { MatFormFieldModule } from '@angular/material';
  import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; 
@NgModule({
  declarations: [
    AppComponent,
    TextfieldComponent,
    SelectComponent,
    CheckboxComponent,
    LabelComponent,
    ButtonComponent,
    RadioComponent,
    DatepickerComponent
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
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

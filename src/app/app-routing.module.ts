import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {TextfieldComponent} from './textfield/textfield.component';
import {SelectComponent} from './select/select.component';
import {RadioComponent} from './radio/radio.component';
import {LabelComponent} from './label/label.component';
import {DatepickerComponent} from './datepicker/datepicker.component';
import {CheckboxComponent} from './checkbox/checkbox.component';
import {ButtonComponent} from './button/button.component';
const routes: Routes = [];



const appRoutes: Routes = [
  { path: 'textfield', component: TextfieldComponent },
  { path: 'dropdown', component: SelectComponent },
  { path: 'radio', component: RadioComponent },
  { path: 'label', component: LabelComponent },
  { path: 'datepicker', component: DatepickerComponent },
  { path: 'checkbox', component: CheckboxComponent },
  {path: 'button', component:ButtonComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: false } // <-- debugging purposes only
    )
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }

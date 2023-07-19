import { NgModule } from '@angular/core';
//material modules:
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatCardModule} from "@angular/material/card";
import {MatInputModule} from "@angular/material/input";

const angularMaterial = [
  MatToolbarModule,
  MatCardModule,
  MatInputModule,
  MatFormFieldModule
]
@NgModule({
  imports: [
    angularMaterial
  ],
  exports: [
    angularMaterial
  ]
})
export class MaterialModule { }

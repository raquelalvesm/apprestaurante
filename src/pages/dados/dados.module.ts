import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Dados } from './dados';

@NgModule({
  declarations: [
    Dados,
  ],
  imports: [
    IonicPageModule.forChild(Dados),
  ],
  exports: [
    Dados
  ]
})
export class DadosModule {}

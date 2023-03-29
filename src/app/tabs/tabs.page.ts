import { Component } from '@angular/core';
const INICIO ="INICIO";
const OPCION1="OPCION1";
const OPCION2="OPCION2";
@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage {
  SELECCION=INICIO





  constructor() {

  }

  selccionarInicio(){
    this.SELECCION=INICIO;
  }

  selccionarOpcion1(){
    this.SELECCION=OPCION1;
  }
  selccionarOpcion2(){
    this.SELECCION=OPCION2;
  }
  INICIO():String{
    return INICIO
  }
  OPCION1():String{
    return OPCION1
  }
  OPCION2():String{
    return OPCION2
  }

}

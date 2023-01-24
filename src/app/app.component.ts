import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  nombre:string = 'Stewie Griffin';

  nombre2:string = 'mEg gRiFfin';

  arreglo = [1,2,3,4,5,6,7,8,9];

  PI: number = Math.PI;

  porcentaje: number = 0.235;

  salario: number = 1800000.3;

  fecha:Date = new Date();


  personaje = {
    nombre: 'Meg',
    apellido: 'Griffin',
    edad: 18,
    dir:{calle: 'Spooner'},

  }

valorPromesa = new Promise<string>((resolve)=>{
   setTimeout(() => {
    resolve('data recibida');
    
   }, 4500);

});






}

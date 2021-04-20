import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
})
export class ListadoComponent {
  heroes: string[] = ['Spideman', 'Iroman', 'Hulk', 'Thor', 'Capitan America'];
  heroeBorrado: string = ''; //| undefined = ''; // any

  borrarHeroe() {
    console.log('borrando...');
    this.heroeBorrado = this.heroes.shift() || '';
  }
}

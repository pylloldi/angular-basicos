import { Component } from "@angular/core";

@Component({
    selector: 'app-contador',
    template: `
        <h1>{{titulo}}</h1>
        <h3>La base es de: <strong>{{base}}</strong></h3>

        <!-- eventos se definen con parentesis -->
        <button (click)="acumular(base)">+{{base}}</button>

        <span>{{numero}}</span>

        <button (click)="acumular(-base)">-{{base}}</button>
    `
})
export class ContatorComponent {
    public titulo: string = 'Contador App';
    public numero: number = 10;
    public base: number = 5;

    sumar() {
        this.numero +=1;
    }
    restar() {
        this.numero -=1;
    }
    
    acumular(valor: number) {
        this.numero += valor;
    }
}
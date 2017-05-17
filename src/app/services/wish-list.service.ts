import { Lista } from '../classes/listas';
import { Injectable } from '@angular/core';

@Injectable()
export class WishListService {

    listas: Lista[] = [];

    constructor() {

        let lista1 = new Lista('Compras de supermercado');
        let lista2 = new Lista('Juegos que deseo');
        let lista3 = new Lista('Cosas de la universidad');

        this.listas.push(lista1);
        this.listas.push(lista2);
        this.listas.push(lista3);

        console.log('Servicio inicializado');
    }
}
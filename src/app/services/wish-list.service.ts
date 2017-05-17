import { Lista } from '../classes/listas';
import { Injectable } from '@angular/core';

@Injectable()
export class WishListService {

    listas: Lista[] = [];

    constructor() {
        this.loadData();
        console.log('Servicio inicializado');
    }

    updateData() {
        localStorage.setItem('data', JSON.stringify(this.listas));
    }

    loadData() {
        if (localStorage.getItem('data')) {
            this.listas = JSON.parse(localStorage.getItem('data'));
        }
    }

    agregarLista(lista: Lista) {
        this.listas.push(lista);
        this.updateData();
    }

    eliminarLista(id: number) {
        this.listas.splice(id);
        this.updateData();
    }
}
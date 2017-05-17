import { Component, OnInit } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';
import { Lista, ListaItem } from '../../app/classes/index';
import { WishListService } from '../../app/services/wish-list.service';

@Component({
    selector: 'app-agregar',
    templateUrl: './agregar.component.html'
})
export class AgregarComponent implements OnInit {

    nombreLista: string = '';
    nombreItem: string = '';

    items: ListaItem[] = [];


    constructor(
        public alertCtrl: AlertController,
        public navCtrl: NavController,
        public wishList: WishListService
    ) { }

    ngOnInit() { }

    agregar() {
        if (this.nombreItem.length == 0) {
            return;
        }

        let item: ListaItem = new ListaItem();

        item.nombre = this.nombreItem;

        this.items.push(item);

        this.nombreItem = '';
    }

    borrar(id: number) {
        this.items.splice(id, 1);
    }

    guardarLista() {
        if (this.nombreLista.length == 0) {
            let alert = this.alertCtrl.create({
                title: 'Nombre de la lista',
                subTitle: 'El nombre de la lista es obligatorio!',
                buttons: ['OK']
            });
            alert.present();
            return;
        }


        let lista: Lista = new Lista(this.nombreLista);
        lista.items = this.items;

        this.wishList.agregarLista(lista);

        this.navCtrl.pop();

    }
}
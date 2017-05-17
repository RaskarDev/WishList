import { AlertController, NavController, NavParams } from 'ionic-angular';
import { Component, OnInit } from '@angular/core';
import { Lista } from '../../app/classes/listas';
import { ListaItem } from '../../app/classes/lista-item';
import { WishListService } from '../../app/services/wish-list.service';

@Component({
    selector: 'app-detalle',
    templateUrl: './detalle.component.html'
})
export class DetalleComponent implements OnInit {

    id: number;
    lista: Lista;

    constructor(public navCtrl: NavController, public navParams: NavParams, public wishList: WishListService, private alertCtrl: AlertController) {
        this.id = this.navParams.get('id');
        this.lista = this.navParams.get('lista');
    }

    ngOnInit() { }

    actualizar(item: ListaItem) {
        item.completado = !item.completado;

        let todosMarcados = true;

        for (let item of this.lista.items) {
            if (!item.completado) {
                todosMarcados = false;
                break;
            }
        }

        this.lista.terminada = todosMarcados;

        this.wishList.updateData();
    }

    borrarLista() {
        let confirm = this.alertCtrl.create({
            title: 'Borrar esta lista',
            message: '¿Estás seguro de querer borrar la lista?',
            buttons: [
                {
                    text: 'Cancelar',
                    handler: () => {
                        console.log('Cancelar clicado');
                    }
                },
                {
                    text: 'Borrar',
                    handler: () => {
                        this.wishList.eliminarLista(this.id);
                        this.navCtrl.pop();
                    }
                }
            ]
        });
        confirm.present();
    }
}
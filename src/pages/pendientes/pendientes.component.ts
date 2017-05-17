import { Component, OnInit } from '@angular/core';
import { WishListService } from '../../app/services/wish-list.service';
import { NavController } from 'ionic-angular';
import { AgregarComponent } from '../agregar/agregar.component';
import { DetalleComponent } from '../detalle/detalle.component';
import { Lista } from '../../app/classes/listas';

@Component({
    selector: 'app-pendientes',
    templateUrl: './pendientes.component.html'
})
export class PendientesComponent implements OnInit {
    constructor(private _wishList: WishListService, private _navController: NavController) { }

    ngOnInit() { }

    irAgregar() {
        this._navController.push(AgregarComponent);
    }

    verDetalle(lista: Lista, id: number) {
        this._navController.push(DetalleComponent, { lista, id });
    }
}
import { Component, OnInit } from '@angular/core';
import { WishListService } from "../../app/services/wish-list.service";
import { Lista } from "../../app/classes/index";
import { DetalleComponent } from '../detalle/detalle.component';
import { NavController } from 'ionic-angular';

@Component({
    selector: 'app-terminados',
    templateUrl: './terminados.component.html'
})
export class TerminadosComponent implements OnInit {
    constructor(private _wishList: WishListService, private _navController: NavController) { }

    ngOnInit() { }

    verDetalle(lista: Lista, id: number) {
        this._navController.push(DetalleComponent, { lista, id });
    }
}

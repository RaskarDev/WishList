import { Component, OnInit } from '@angular/core';
import { WishListService } from '../../app/services/wish-list.service';
import { NavController } from 'ionic-angular';
import { AgregarComponent } from '../agregar/agregar.component';

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
}
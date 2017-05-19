import { Pipe, PipeTransform } from '@angular/core';
import { Lista } from '../classes';

@Pipe({
    name: 'pendientes',
    pure: false
})
export class PendientesPipe implements PipeTransform {
    transform(listas: Lista[], completa: boolean = false): any {
        let nuevaLista: Lista[] = [];

        for (let lista of listas) {
            if (lista.terminada == completa) {
                nuevaLista.push(lista);
            }
        }

        return nuevaLista;
    }
}
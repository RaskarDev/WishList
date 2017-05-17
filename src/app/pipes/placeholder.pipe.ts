import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'placeholder' })
export class PlaceholderPipe implements PipeTransform {
    transform(value: string, texto: string): any {
        return (value) ? value : texto;
    }
}
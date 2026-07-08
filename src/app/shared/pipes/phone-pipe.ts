import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'phone',
  standalone: true,
})
export class PhonePipe implements PipeTransform {
  transform(value: string | number): string {
    if (!value) return '';

    let string = value.toString().replace(/\D/g, '');

    if (string.length === 11)
      return `${string.slice(0, 4)}-${string.slice(4, 7)}-${string.slice(7)}`;

    return string;
  }
}

import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Column } from '@app/core/interfaces/primeng.interface';
import { BasicTable } from '@app/shared/ui/basic-table/basic-table';
import { NaturalAndPerson } from '../interfaces/naturalPerson';

@Component({
  selector: 'app-natural-person',
  imports: [BasicTable],
  templateUrl: './natural-person.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NaturalPerson implements OnInit {
  rows!: NaturalAndPerson[];
  cols!: Column[];

  ngOnInit(): void {
    this.setCols();
  }

  setCols() {
    this.cols = [
      { field: 'dni', header: 'CI' },
      { field: 'name', header: 'Nombre' },
      { field: 'phone', header: 'Teléfono' },
      { field: 'email', header: 'Correo' },
    ];
  }
}

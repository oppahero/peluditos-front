import { ChangeDetectionStrategy, Component, inject, OnInit } from '@angular/core';
import { Column } from '@app/core/interfaces/primeng.interface';
import { BasicTable } from '@app/shared/ui/basic-table/basic-table';
import { NaturalPersonFacade } from '../services/natural-person-facade';
import { PhonePipe } from '@app/shared/pipes/phone-pipe';

@Component({
  selector: 'app-natural-person',
  imports: [BasicTable, PhonePipe],
  templateUrl: './natural-person.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [NaturalPersonFacade],
})
export class NaturalPerson implements OnInit {
  private naturalPersonFacade = inject(NaturalPersonFacade);
  rows = this.naturalPersonFacade.natural;

  cols: Column[] = [
    { header: 'CI' },
    { header: 'Nombre' },
    { header: 'Teléfono' },
    { header: 'Correo' },
  ];

  selected: any;

  constructor() {}

  ngOnInit(): void {
    this.naturalPersonFacade.loadPersons({ page: 1, limit: 10 });
  }
}

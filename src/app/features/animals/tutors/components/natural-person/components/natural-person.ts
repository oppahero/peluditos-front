import { ChangeDetectionStrategy, Component, inject, OnInit } from '@angular/core';
import { Column } from '@app/core/interfaces/primeng.interface';
import { BasicTable } from '@app/shared/ui/basic-table/basic-table';
import { NaturalAndPerson } from '../interfaces/naturalPerson';
import { NaturalPersonFacade } from '../services/natural-person-facade';

@Component({
  selector: 'app-natural-person',
  imports: [BasicTable],
  templateUrl: './natural-person.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NaturalPerson implements OnInit {
  cols!: Column[];

  private naturalPersonFacade = inject(NaturalPersonFacade);
  rows = this.naturalPersonFacade.natural;

  ngOnInit(): void {
    this.setCols();
    this.naturalPersonFacade.loadPersons({ page: 1, limit: 10 });
  }

  setCols() {
    this.cols = [
      { header: 'CI' },
      { header: 'Nombre' },
      { header: 'Teléfono' },
      { header: 'Correo' },
    ];
  }
}

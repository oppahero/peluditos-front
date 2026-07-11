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
  pageInfo = this.naturalPersonFacade.pageInfo;

  cols: Column[] = [
    { header: 'CI' },
    { header: 'Nombre' },
    { header: 'Teléfono' },
    { header: 'Correo' },
  ];

  selected: any;

  private readonly DEFAULT_PAGE_INFO = { page: 1, limit: 10 };

  constructor() {}

  ngOnInit(): void {
    this.resetPage();
  }

  private loadPage(page: number, limit: number): void {
    this.naturalPersonFacade.loadPersons({ page, limit });
  }

  prevPage() {
    const { page, limit } = this.pageInfo() ?? this.DEFAULT_PAGE_INFO;

    if (page > 1) this.loadPage(page - 1, limit);
  }

  nextPage() {
    const { page, limit } = this.pageInfo() ?? this.DEFAULT_PAGE_INFO;

    this.loadPage(page + 1, limit);
  }

  resetPage() {
    const { page, limit } = this.DEFAULT_PAGE_INFO;
    this.loadPage(page, limit);
  }
}

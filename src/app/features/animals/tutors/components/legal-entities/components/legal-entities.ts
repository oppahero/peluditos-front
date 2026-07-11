import { ChangeDetectionStrategy, Component, inject, OnInit } from '@angular/core';
import { Column } from '@app/core/interfaces/primeng.interface';
import { LegalEntityFacade } from '../services/legal-entity-facade';
import { BasicTable } from '@app/shared/ui/basic-table/basic-table';
import { PhonePipe } from '@app/shared/pipes/phone-pipe';

@Component({
  selector: 'app-legal-entities',
  imports: [BasicTable, PhonePipe],
  templateUrl: './legal-entities.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [LegalEntityFacade],
})
export class LegalEntities implements OnInit {
  private legalEntityFacade = inject(LegalEntityFacade);
  rows = this.legalEntityFacade.legal;
  pageInfo = this.legalEntityFacade.pageInfo;

  cols: Column[] = [
    { header: 'Rif' },
    { header: 'Nombre' },
    { header: 'Teléfono' },
    { header: 'Correo' },
  ];

  selected: any;

  private readonly DEFAULT_PAGE_INFO = { page: 1, limit: 10 };

  ngOnInit(): void {
    this.resetPage();
  }

  private loadPage(page: number, limit: number): void {
    this.legalEntityFacade.loadEntities({ page, limit });
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

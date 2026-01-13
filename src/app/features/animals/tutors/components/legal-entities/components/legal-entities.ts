import { ChangeDetectionStrategy, Component, inject, OnInit } from '@angular/core';
import { Column } from '@app/core/interfaces/primeng.interface';
import { LegalEntityFacade } from '../services/legal-entity-facade';
import { BasicTable } from '@app/shared/ui/basic-table/basic-table';

@Component({
  selector: 'app-legal-entities',
  imports: [BasicTable],
  templateUrl: './legal-entities.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [LegalEntityFacade],
})
export class LegalEntities implements OnInit {
  cols!: Column[];

  private legalEntityFacade = inject(LegalEntityFacade);
  rows = this.legalEntityFacade.legal;

  ngOnInit(): void {
    this.setCols();
    this.legalEntityFacade.loadEntities({ page: 1, limit: 10 });
  }

  setCols() {
    this.cols = [
      { header: 'Rif' },
      { header: 'Nombre' },
      { header: 'Teléfono' },
      { header: 'Correo' },
    ];
  }
}

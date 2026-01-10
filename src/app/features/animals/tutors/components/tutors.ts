import { ChangeDetectionStrategy, Component, inject, OnInit } from '@angular/core';
import { CardModule } from 'primeng/card';
import { MenuModule } from 'primeng/menu';
import { MenuItem } from 'primeng/api';
import { NaturalPerson } from './natural-person/components/natural-person';
import { NaturalPersonFacade } from './natural-person/services/natural-person-facade';

@Component({
  selector: 'app-tutors',
  imports: [MenuModule, CardModule, NaturalPerson],
  templateUrl: './tutors.html',
  styleUrl: './tutors.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [NaturalPersonFacade],
})
export class Tutors implements OnInit {
  items: MenuItem[] | undefined;

  private naturalPersonFacade = inject(NaturalPersonFacade);
  natural = this.naturalPersonFacade.natural;

  ngOnInit() {
    this.items = [
      {
        label: 'Opciones',
        items: [
          {
            label: 'Persona Natural',
            icon: 'pi pi-plus',
          },
          {
            label: 'Persona Jurídica',
            icon: 'pi pi-search',
          },
        ],
      },
    ];

    this.naturalPersonFacade.loadPersons({ page: 1, limit: 10 });
  }
}

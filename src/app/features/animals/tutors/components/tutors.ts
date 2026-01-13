import { NaturalPerson } from './natural-person/components/natural-person';
import { LegalEntities } from './legal-entities/components/legal-entities';
import { ChangeDetectionStrategy, Component, OnInit, signal } from '@angular/core';
import { SelectButtonModule } from 'primeng/selectbutton';
import { CardModule } from 'primeng/card';
import { MenuModule } from 'primeng/menu';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-tutors',
  imports: [MenuModule, CardModule, SelectButtonModule, NaturalPerson, LegalEntities],
  templateUrl: './tutors.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [],
})
export class Tutors implements OnInit {
  items: MenuItem[] | undefined;

  stateOptions: any[] = [
    { label: 'Persona Natural', value: true },
    { label: 'Persona Jurídica', value: false },
  ];

  active = signal(true);

  ngOnInit() {
    this.items = [
      {
        label: 'Opciones',
        items: [
          {
            label: 'Persona Natural',
            icon: 'fa fa-solid fa-person',
            command: () => this.changeActive(true),
          },
          {
            label: 'Persona Jurídica',
            icon: 'fa fa-regular fa-building',
            command: () => this.changeActive(false),
          },
        ],
      },
    ];
  }

  changeActive(value: boolean) {
    this.active.set(value);
  }
}

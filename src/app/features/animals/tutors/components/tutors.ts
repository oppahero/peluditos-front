import { NaturalPerson } from './natural-person/components/natural-person';
import { LegalEntities } from './legal-entities/components/legal-entities';
import { ChangeDetectionStrategy, Component, OnInit, signal } from '@angular/core';
import { SelectButtonModule } from 'primeng/selectbutton';
import { CardModule } from 'primeng/card';
import { MenuModule } from 'primeng/menu';
import { MenuItem } from 'primeng/api';
import { ButtonModule } from 'primeng/button';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-tutors',
  imports: [
    RouterOutlet,
    MenuModule,
    CardModule,
    SelectButtonModule,
    NaturalPerson,
    LegalEntities,
    ButtonModule,
  ],
  templateUrl: './tutors.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [],
})
export class Tutors implements OnInit {
  items: MenuItem[] | undefined;

  ngOnInit() {
    this.items = [
      {
        label: 'Opciones',
        items: [
          {
            label: 'Persona Natural',
            icon: 'pi pi-id-card',
            // command: () => this.changeActive(true),
            routerLink: 'natural',
          },
          {
            label: 'Persona Jurídica',
            icon: 'fa fa-regular fa-building',
            routerLink: 'entitie',
          },
        ],
      },
    ];
  }
}

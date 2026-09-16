import { ChangeDetectionStrategy, Component, model, OnInit } from '@angular/core';
import { SelectButtonModule } from 'primeng/selectbutton';
import { RouterOutlet } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { MenuModule } from 'primeng/menu';
import { MenuItem } from 'primeng/api';
import { TutorForm } from './tutor-form/components/tutor-form';

@Component({
  selector: 'app-tutors',
  imports: [RouterOutlet, MenuModule, CardModule, SelectButtonModule, ButtonModule, TutorForm],
  templateUrl: './tutors.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [],
})
export class Tutors implements OnInit {
  items: MenuItem[] | undefined;
  showForm = model<boolean>(false);
  title: string = 'Nuevo Tutor';

  ngOnInit() {
    this.items = [
      {
        label: 'Consultas',
        items: [
          {
            label: 'Persona Natural',
            icon: 'pi pi-id-card',
            routerLink: 'natural',
          },
          {
            label: 'Persona Jurídica',
            icon: 'fa fa-regular fa-building',
            routerLink: 'entitie',
          },
        ],
      },
      {
        label: 'Opciones',
        items: [
          {
            label: 'Nuevo tutor',
            icon: 'pi pi-plus',
            command: () => {
              this.displayForm(true);
            },
          },
          {
            label: 'Buscar',
            icon: 'pi pi-search',
          },
        ],
      },
    ];
  }

  displayForm(value: boolean) {
    this.showForm.set(value);
  }
}

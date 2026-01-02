import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Menu } from 'primeng/menu';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-sidebar',
  imports: [Menu],
  templateUrl: './sidebar.html',
  styles: `
    :host ::ng-deep .p-menu {
      border: none !important;
      box-shadow: none !important;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Sidebar implements OnInit {
  items: MenuItem[] | undefined;

  ngOnInit() {
    this.items = [
      {
        label: 'Home',
        items: [
          {
            label: 'Dashboard',
            icon: 'pi pi-house',
            routerLink: '/dashboard',
          },
          // {
          //   label: 'Programmatic',
          //   icon: 'pi pi-link',
          //   command: () => {
          //     this.router.navigate(['/installation']);
          //   },
          // },
        ],
      },
      {
        label: 'Admistración',
        items: [
          {
            label: 'Usuarios',
            icon: 'pi pi-house',
            routerLink: '',
          },
          {
            label: 'Empleador',
            icon: 'pi pi-person',
            routerLink: '',
          },
        ],
      },
      {
        label: 'Pacientes',
        items: [
          {
            label: 'Tutores',
            icon: 'pi pi-house',
            routerLink: '',
          },
          {
            label: 'Historial mascota',
            icon: 'pi pi-house',
            routerLink: '',
          },
        ],
      },
    ];
  }
}

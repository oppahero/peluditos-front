import { SidebarService } from '@app/layout/services/sidebar-service';
import { RouterLink, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MenuItem } from 'primeng/api';
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  inject,
  OnInit,
} from '@angular/core';

@Component({
  selector: 'app-sidebar',
  imports: [CommonModule, RouterLink, RouterModule],
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
  isSidebarVisible: boolean = true;
  private sidebarService = inject(SidebarService);
  private cdr = inject(ChangeDetectorRef);

  ngOnInit() {
    this.items = [
      {
        label: 'Home',
        items: [
          {
            label: 'Dashboard',
            icon: 'pi pi-fw pi-home',
            routerLink: 'home',
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
            icon: 'pi pi-user',
            routerLink: '',
          },
          {
            label: 'Empleados',
            icon: 'pi pi-id-card',
            routerLink: '',
          },
          {
            label: 'Reportes',
            icon: 'pi pi-bookmark',
            routerLink: '',
          },
        ],
      },
      {
        label: 'Mascotas',
        items: [
          {
            label: 'Tutores',
            icon: 'pi pi-address-book',
            routerLink: 'tutors',
          },
          {
            label: 'Mascotas',
            icon: 'fa fa-solid fa-dog',
            routerLink: 'pets',
          },
          {
            label: 'Cliente Jurídico',
            icon: 'fa fa-regular fa-id-badge',
            routerLink: '',
          },
        ],
      },
      {
        label: 'Servicios',
        items: [
          {
            label: 'Servicios prestados',
            icon: 'pi pi-address-book',
            routerLink: '',
          },
          {
            label: 'Historial',
            icon: 'pi pi-folder',
            routerLink: '',
          },
        ],
      },
    ];

    this.sidebarService.visible$.subscribe((value) => {
      this.isSidebarVisible = value;
      this.cdr.detectChanges();
    });
  }

  closeSidebar() {
    this.sidebarService.setVisible(false);
  }
}

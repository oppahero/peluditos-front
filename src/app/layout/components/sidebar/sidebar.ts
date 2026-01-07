import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  inject,
  OnInit,
} from '@angular/core';
import { Menu } from 'primeng/menu';
import { MenuItem } from 'primeng/api';
import { CommonModule } from '@angular/common';
import { SidebarService } from '@app/layout/services/sidebar-service';

@Component({
  selector: 'app-sidebar',
  imports: [Menu, CommonModule],
  templateUrl: './sidebar.html',
  styles: `
    :host ::ng-deep .p-menu {
      border: none !important;
      box-shadow: none !important;
    }

    .layout-mobile-active {

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

    this.sidebarService.visible$.subscribe((value) => {
      this.isSidebarVisible = value;
      this.cdr.detectChanges();
    });
  }

  closeSidebar() {
    this.sidebarService.setVisible(false);
  }
}

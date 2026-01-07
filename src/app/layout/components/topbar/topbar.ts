import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { SidebarService } from '@app/layout/services/sidebar-service';

@Component({
  selector: 'app-topbar',
  imports: [],
  templateUrl: './topbar.html',
  styleUrl: './topbar.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Topbar {
  sidebarService = inject(SidebarService);

  toggleSidebar() {
    this.sidebarService.toggle();
  }
}

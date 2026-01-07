import { ChangeDetectionStrategy, Component, inject, OnInit } from '@angular/core';
import { Topbar } from './components/topbar/topbar';
import { Sidebar } from './components/sidebar/sidebar';
import { RouterOutlet } from '@angular/router';
import { SidebarService } from './services/sidebar-service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-layout',
  imports: [Topbar, Sidebar, RouterOutlet, CommonModule],
  templateUrl: './layout.html',
  styleUrl: './layout.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Layout implements OnInit {
  isSidebarVisible!: boolean;

  private sidebarService = inject(SidebarService);

  ngOnInit(): void {
    this.sidebarService.visible$.subscribe((value) => {
      this.isSidebarVisible = value;
    });
  }
}

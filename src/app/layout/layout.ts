import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Topbar } from './components/topbar/topbar';

@Component({
  selector: 'app-layout',
  imports: [Topbar],
  templateUrl: './layout.html',
  styleUrl: './layout.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Layout {}

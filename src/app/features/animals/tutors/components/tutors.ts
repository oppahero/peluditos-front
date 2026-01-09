import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { TabsModule } from 'primeng/tabs';
import { CardModule } from 'primeng/card';

@Component({
  selector: 'app-tutors',
  imports: [TabsModule, CardModule],
  templateUrl: './tutors.html',
  styleUrl: './tutors.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Tutors implements OnInit {
  ngOnInit() {}
}

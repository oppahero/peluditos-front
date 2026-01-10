import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { Column } from '@app/core/interfaces/primeng.interface';
import { CommonModule } from '@angular/common';
import { TableModule } from 'primeng/table';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';

@Component({
  selector: 'app-basic-table',
  imports: [TableModule, CommonModule, IconFieldModule, InputIconModule],
  templateUrl: './basic-table.html',
  styleUrl: './basic-table.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BasicTable {
  rows = input<any[]>();
  cols = input<Column[]>();
  paginator = input<boolean>(false);
  title = input<string>();
}

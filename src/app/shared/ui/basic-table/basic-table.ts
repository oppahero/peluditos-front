import {
  ChangeDetectionStrategy,
  Component,
  ContentChild,
  input,
  TemplateRef,
} from '@angular/core';
import { Column } from '@app/core/interfaces/primeng.interface';
import { CommonModule } from '@angular/common';
import { TableModule } from 'primeng/table';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { InputText } from 'primeng/inputtext';

@Component({
  selector: 'app-basic-table',
  imports: [TableModule, CommonModule, IconFieldModule, InputIconModule, InputText],
  templateUrl: './basic-table.html',
  styleUrl: './basic-table.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BasicTable {
  rows = input<any[]>();
  cols = input<Column[]>();
  paginator = input<boolean>(false);
  title = input<string>();

  @ContentChild('body', { static: false }) customBodyTemplate!: TemplateRef<any>;
}

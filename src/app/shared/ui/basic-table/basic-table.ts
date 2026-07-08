import { Column } from '@app/core/interfaces/primeng.interface';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { CommonModule } from '@angular/common';
import { InputText } from 'primeng/inputtext';
import { TableModule } from 'primeng/table';
import {
  input,
  Component,
  ContentChild,
  TemplateRef,
  ChangeDetectionStrategy,
  model,
} from '@angular/core';

@Component({
  selector: 'app-basic-table',
  imports: [TableModule, CommonModule, IconFieldModule, InputIconModule, InputText],
  templateUrl: './basic-table.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BasicTable {
  rows = input<any[]>();
  cols = input<Column[]>();
  selection = model<any>();
  paginator = input<boolean>(false);
  scrollable = input<boolean>(true);
  scrollHeight = input<string>('350px');
  numOfRows = input<number>(10);
  title = input<string>();
  selectionMode = input<'single' | 'multiple' | undefined>('single');
  globalFilterFields = input<string[] | undefined>(undefined);
  @ContentChild('body', { static: false }) customBodyTemplate!: TemplateRef<any>;
}

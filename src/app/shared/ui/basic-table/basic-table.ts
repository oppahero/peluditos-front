import { Column } from '@app/core/interfaces/primeng.interface';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { InputText } from 'primeng/inputtext';
import { TableModule } from 'primeng/table';
import {
  input,
  model,
  Component,
  ContentChild,
  TemplateRef,
  ChangeDetectionStrategy,
  output,
} from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-basic-table',
  imports: [
    TableModule,
    CommonModule,
    IconFieldModule,
    InputIconModule,
    InputText,
    ButtonModule,
    FormsModule,
  ],
  templateUrl: './basic-table.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BasicTable {
  rows = input<any[]>();
  cols = input<Column[]>();
  selection = model<any>();
  pageInfo = model<any>();
  paginator = input<boolean>(false);
  scrollable = input<boolean>(true);
  scrollHeight = input<string>('370px');
  numOfRows = input<number>(10);
  title = input<string>();
  selectionMode = input<'single' | 'multiple' | undefined>('single');
  globalFilterFields = input<string[] | undefined>(undefined);

  @ContentChild('body', { static: false }) customBodyTemplate!: TemplateRef<any>;

  nextPage = output();
  prevPage = output();
  resetPage = output();

  isFirstPage() {
    return this.pageInfo()?.page === 1;
  }

  reset() {
    this.resetPage.emit();
  }

  prev() {
    this.prevPage.emit();
  }

  next() {
    this.nextPage.emit();
  }

  isLastPage() {
    return this.pageInfo()?.page === this.pageInfo()?.lastPage;
  }
}

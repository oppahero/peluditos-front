import { ChangeDetectionStrategy, Component, input, model } from '@angular/core';
import { PositionType } from '@app/core/interfaces/primeng.interface';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';

@Component({
  selector: 'app-dialog',
  imports: [DialogModule, ButtonModule],
  templateUrl: './dialog.html',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Dialog {
  visible = model<boolean>(false);
  modal = input<boolean>(true);
  title = input<string>('');
  style = input<any>({ width: '25rem' });
  position = input<PositionType>('center');

  cancel() {}
  save() {}
}

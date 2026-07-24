import { ChangeDetectionStrategy, Component, input, model } from '@angular/core';
import { PositionType } from '@app/core/interfaces/primeng.interface';
import { DialogModule } from 'primeng/dialog';

@Component({
  selector: 'app-dialog',
  imports: [DialogModule],
  templateUrl: './dialog.html',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Dialog {
  visible = model<boolean>(false);
  modal = input<boolean>(true);
  title = input<string>('');
  style = input<any>({ width: '50vw' });
  breakpoints = input<any>({ '960px': '75vw', '640px': '90vw', '480px': '100vw' });
  position = input<PositionType>('center');
}

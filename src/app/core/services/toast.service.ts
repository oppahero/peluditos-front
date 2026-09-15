import { inject, Injectable } from '@angular/core';
import { MessageService } from 'primeng/api';

@Injectable({
  providedIn: 'root',
})
export class ToastService {
  private messageService = inject(MessageService);

  // Mensaje de éxito
  showSuccess(detail: string, summary: string = 'Éxito') {
    this.messageService.add({
      severity: 'success',
      summary: summary,
      detail: detail,
      life: 3000,
    });
  }

  showInfo(detail: string, summary: string = 'Información') {
    this.messageService.add({
      severity: 'info',
      summary: summary,
      detail: detail,
      life: 3000,
    });
  }

  showWarn(detail: string, summary: string = 'Atención') {
    this.messageService.add({
      severity: 'warn',
      summary: summary,
      detail: detail,
      life: 3500,
    });
  }

  showError(detail: string, summary: string = 'Error') {
    this.messageService.add({
      severity: 'error',
      summary: summary,
      detail: detail,
      life: 4000,
    });
  }

  showCustom(severity: string, summary: string, detail: string) {
    this.messageService.add({ severity, summary, detail });
  }

  clear() {
    this.messageService.clear();
  }
}

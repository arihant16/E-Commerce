import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';
import { Component, signal } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MessageService } from 'primeng/api';
import { ToastModule } from 'primeng/toast';

@Component({
  selector: 'app-top-bar',
  imports: [RouterModule, ToastModule, DialogModule, ButtonModule],
  providers: [MessageService],
  templateUrl: './top-bar.component.html',
  styleUrl: './top-bar.component.scss'
})
export class TopBarComponent {

  public dialog = signal(false);

  constructor(private messageService: MessageService) { }

  toggleMenu() {
    this.dialog.update(value => !value);
  }

  toast() {
    this.messageService.add({ severity: 'warn', summary: 'Feature Comming Soon', detail: 'Work in progress', life: 3000 })
  }
}

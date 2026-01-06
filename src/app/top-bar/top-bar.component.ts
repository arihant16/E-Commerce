import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';
import { Component } from '@angular/core';
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

  dialog: boolean = false;

  constructor(private messageService: MessageService) { }

  toast() {
    this.messageService.add({ severity: 'warn', summary: 'Feature Comming Soon', detail: 'Work in progress', life: 3000 })
  }
}

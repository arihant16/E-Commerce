import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MessageService } from 'primeng/api';
import { ToastModule } from 'primeng/toast';

@Component({
  selector: 'app-top-bar',
  imports: [RouterModule, ToastModule, CommonModule],
  providers: [MessageService],
  templateUrl: './top-bar.component.html',
  styleUrl: './top-bar.component.scss'
})
export class TopBarComponent {

  constructor(private messageService: MessageService) { }

  toast() {
    this.messageService.add({ severity: 'warn', summary: 'Feature Comming Soon', detail: 'Work in progress', life: 3000 })
  }
}

import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { RatingComponent } from '../rating/rating.component';

@Component({
  selector: 'app-featured-items',
  imports: [ButtonModule, CommonModule, RatingComponent],
  templateUrl: './featured-items.component.html',
  styleUrl: './featured-items.component.scss'
})
export class FeaturedItemsComponent {
  @Input() data: any;

}

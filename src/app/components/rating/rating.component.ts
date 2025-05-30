import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-rating',
  imports: [CommonModule],
  templateUrl: './rating.component.html',
  styleUrl: './rating.component.scss'
})
export class RatingComponent {
  @Input() rating: number = 0;
  @Input() maxStars: number = 5;
  starSize: number = 24;

  get stars() {
    const stars = [];
    for (let i = 1; i <= this.maxStars; i++) {
      stars.push({
        filled: i <= Math.floor(this.rating),
        percentFilled: this.getStarFillPercent(i)
      });
    }
    return stars;
  }

  private getStarFillPercent(starPosition: number): number {
    if (this.rating >= starPosition) return 100;
    if (starPosition - this.rating < 1) return Math.floor((this.rating % 1) * 100);
    return 0;
  }
}

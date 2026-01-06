import { CommonModule } from '@angular/common';
import { Component, Input, signal, computed, effect } from '@angular/core';

@Component({
  selector: 'app-rating',
  imports: [CommonModule],
  templateUrl: './rating.component.html',
  styleUrl: './rating.component.scss',
  standalone: true  // Add this if using standalone components
})
export class RatingComponent {
  @Input() rating: number = 0;
  @Input() maxStars: number = 5;
  starSize: number = 24;

  // Use signals for stable, deterministic computed values
  private readonly rawRating = signal(this.rating);
  private readonly rawMaxStars = signal(this.maxStars);

  // Stable stars array for hydration
  stars = computed(() => {
    const rating = this.rawRating();
    const maxStars = this.rawMaxStars();
    const stars = [];

    for (let i = 1; i <= maxStars; i++) {
      stars.push({
        filled: i <= Math.floor(rating),
        percentFilled: this.getStarFillPercent(i, rating)
      });
    }
    return stars;
  });

  // Stable track function
  trackStar = (index: number, star: any) => index;

  private getStarFillPercent(starPosition: number, rating: number): number {
    if (rating >= starPosition) return 100;
    if (starPosition - rating < 1) return Math.floor((rating % 1) * 100);
    return 0;
  }

  // Sync inputs to signals
  constructor() {
    effect(() => {
      this.rawRating.set(this.rating);
      this.rawMaxStars.set(this.maxStars);
    });
  }
}

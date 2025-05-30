import { Component } from '@angular/core';
import { ServiceService } from '../../service/service.service';
import { FeaturedItemsComponent } from '../../components/featured-items/featured-items.component';
import { Carousel, CarouselModule } from 'primeng/carousel';

@Component({
  selector: 'app-feature',
  imports: [FeaturedItemsComponent, CarouselModule],
  templateUrl: './feature.component.html',
  styleUrl: './feature.component.scss'
})
export class FeatureComponent {

  feature_producets: Array<any> = [];

  constructor(private service: ServiceService) {
  }

  ngOnInit() {
    this.service.getTopProducts().subscribe((res: any) => {
      this.feature_producets = res.products.slice(0, 10);
    })
  }

  restartAutoplay(carousel: Carousel) {
    // Stop and restart autoplay to prevent interruption
    setTimeout(() => {
      if (!carousel.allowAutoplay)
        carousel.startAutoplay();
    }, 0)
  }
}

import { Component } from '@angular/core';
import { FeatureComponent } from '../components/feature/feature.component';
import { CaragoryGridComponent } from '../components/caragory-grid/caragory-grid.component';
import { ServiceService } from '../service/service.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  imports: [FeatureComponent, CommonModule, CaragoryGridComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  category_list: Array<any> = []

  constructor(private service: ServiceService) { }

  ngOnInit() {
    this.service.getCategories().subscribe((res: any) => {
      this.category_list = res.slice(0, 4);
    })
  }

}

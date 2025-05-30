import { Component, Input } from '@angular/core';
import { ServiceService } from '../../service/service.service';

@Component({
  selector: 'app-caragory-grid',
  imports: [],
  templateUrl: './caragory-grid.component.html',
  styleUrl: './caragory-grid.component.scss'
})
export class CaragoryGridComponent {
  @Input() category: any;
  data: Array<any> = [];

  constructor(private service: ServiceService) { }

  ngOnInit() {
    this.service.getProductsByCategories(this.category.slug).subscribe((res: any) => {
      this.data = res.products.slice(0, 4);
    })
  }

}

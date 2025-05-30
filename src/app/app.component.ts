import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from './footer/footer.component';
import { TopBarComponent } from './top-bar/top-bar.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FooterComponent, TopBarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'E-Commerce';
}

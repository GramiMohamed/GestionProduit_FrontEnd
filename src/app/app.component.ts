import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';  // Make sure RouterOutlet is imported

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],  // Import RouterOutlet to enable routing
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'gestion-produits-frontend';
  
}

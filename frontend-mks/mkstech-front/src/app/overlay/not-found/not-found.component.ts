import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-not-found',
  standalone: true,
  imports: [
    MatIconModule,
    MatButtonModule
  ],
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.scss']
})

export class NotFoundComponent {
  constructor(private router: Router) {} // Injete Router

  onCancel() {
    this.router.navigate(['/overlay-list']); // Redireciona para a página de lista de overlays
  }
}

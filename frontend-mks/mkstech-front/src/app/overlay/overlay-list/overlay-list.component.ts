import { Component, OnInit } from '@angular/core';
import { OverlayService } from '../service/overlay.service';
import { Overlay } from '../model/overlay.model';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { RouterOutlet } from '@angular/router';


@Component({
  selector: 'app-overlay-list',
  standalone: true,
  templateUrl: './overlay-list.component.html',
  styleUrls: ['./overlay-list.component.scss'],
  imports: [
    CommonModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatTableModule,
    MatButtonModule,
    MatDatepickerModule,
    RouterOutlet
  ]
})
export class OverlayListComponent implements OnInit {
  overlays: Overlay[] = [];
  searchTerm: string = '';

  constructor(private overlayService: OverlayService, private router: Router) { }

  ngOnInit(): void {
    this.loadOverlays();
  }

  loadOverlays(): void {
    this.overlayService.getOverlays().subscribe(data => {
      this.overlays = data;
    });
  }

  filterOverlays(): void {
    if (this.searchTerm) {
      this.overlayService.getOverlays().subscribe(data => {
        this.overlays = data.filter(overlay => 
          overlay.idProduto.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
          overlay.paredeFornalha.toLowerCase().includes(this.searchTerm.toLowerCase())
        );
      });
    } else {
      this.loadOverlays();
    }
  }

  onEdit(id: number): void {
    this.router.navigate(['/overlay-form', id]);
  }

  onDelete(id: number): void {
    this.overlayService.deleteOverlay(id).subscribe(() => {
      this.loadOverlays();
    });
  }

  onAdd(): void {
    this.router.navigate(['/overlay-form']);
  }
}

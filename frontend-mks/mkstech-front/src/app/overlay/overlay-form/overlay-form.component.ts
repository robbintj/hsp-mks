import { Component, OnInit } from '@angular/core';
import { OverlayService } from '../service/overlay.service';
import { Overlay } from '../model/overlay.model';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-overlay-form',
  standalone: true,
  templateUrl: './overlay-form.component.html',
  styleUrls: ['./overlay-form.component.scss'],
  imports: [
    CommonModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatButtonModule
  ]
})
export class OverlayFormComponent implements OnInit {
  overlay: Overlay = {} as Overlay;
  isEditMode: boolean = false;

  constructor(
    private overlayService: OverlayService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.params['id'];
    if (id) {
      this.isEditMode = true;
      this.overlayService.getOverlay(id).subscribe(data => {
        this.overlay = data;
      });
    }
  }

  onSave(): void {
    if (this.isEditMode) {
      this.overlayService.updateOverlay(this.overlay.id!, this.overlay).subscribe(() => {
        this.router.navigate(['/overlay-list']);
      });
    } else {
      this.overlayService.createOverlay(this.overlay).subscribe(() => {
        this.router.navigate(['/overlay-list']);
      });
    }
  }
}

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
import { RouterOutlet } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';

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
    RouterOutlet,
    MatToolbarModule
  ]
})
export class OverlayListComponent implements OnInit {
  overlays: Overlay[] = [];
  searchTerm: string = '';
  successMessage: string | null = null;
  errorMessage: string | null = null;

  // Adicionando a propriedade displayedColumns
  displayedColumns: string[] = ['id', 'idProduto', 'paredeFornalha', 'local', 'executadoSoldaMKS', 'validacaoCQMKS', 'status', 'actions'];

  constructor(private overlayService: OverlayService, private router: Router) { }

  ngOnInit(): void {
    this.loadOverlays();
  }

  loadOverlays(): void {
    this.overlayService.getOverlays().subscribe(data => {
      this.overlays = data;
      this.successMessage = null;  // Limpar mensagens após carregar os dados
    }, error => {
      this.errorMessage = 'Erro ao carregar os registros.';
      this.successMessage = null;
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
    this.router.navigate(['/overlay-form', id]).then(success => {
      if (success) {
        this.successMessage = 'Registro editado com sucesso!';
      } else {
        this.errorMessage = 'Erro ao redirecionar para a página de edição.';
      }
    });
  }

  onDelete(id: number): void {
    this.overlayService.deleteOverlay(id).subscribe({
      next: () => {
        this.successMessage = 'Registro excluído com sucesso!';
        this.errorMessage = null;
        this.loadOverlays();
      },
      error: () => {
        this.errorMessage = 'Erro ao excluir o registro.';
        this.successMessage = null;
      }
    });
  }

  onAdd(): void {
    const newOverlay: Overlay = {
      id: undefined, // Será gerado automaticamente pelo backend
      idProduto: '', // Será gerado pelo backend
      paredeFornalha: '',
      local: '',
      numeroTubo: 0,
      numeroTuboAdjacente: '',
      elevacaoInferior: 0,
      elevacaoSuperior: 0,
      dimensao: 0,
      escopo: '',
      lado: '',
      tipoEscopo: '',
      liberadoGeral: '',
      pendenteGeralParceiro: '',
      pendenteGeralMKS: '',
      executadoSoldaMKS: 0,
      terminoMKS: new Date(),
      validacaoCQMKS: 0,
      validacaoMKS: new Date(),
      validadoParceiro: 0,
      vsParceiro: 0,
      lpParceiro: 0,
      liberadoParceiro: '',
      dataLiberadoParceiro: new Date(),
      status: '',
      observacaoAlumar: '',
      observacaoMKS: '',
      observacaoParceiro: ''
    };

    this.overlayService.createOverlay(newOverlay).subscribe({
      next: (createdOverlay: Overlay) => {
        this.successMessage = 'Novo registro adicionado com sucesso!';
        this.errorMessage = null;

        // Redireciona para o formulário de edição com o ID do novo Overlay
        this.router.navigate(['/overlay-form', createdOverlay.id]).then(success => {
          if (!success) {
            this.errorMessage = 'Erro ao redirecionar para a página de adição.';
          }
        });
      },
      error: () => {
        this.errorMessage = 'Erro ao adicionar o novo registro.';
        this.successMessage = null;
      }
    });
  }
  
  private generateIdOverlay(overlay: Partial<Overlay>): string {
    const localPrefix = overlay.local ? overlay.local.substring(0, 2) : '';
    const paredeFornalhaPrefix = overlay.paredeFornalha ? overlay.paredeFornalha.substring(0, 2) : '';

    return `${localPrefix}${overlay.numeroTubo}${paredeFornalhaPrefix}${Math.floor(Math.random() * 10000)}`; // Gera um ID aleatório para exemplo
  }
}




// import { Component, OnInit } from '@angular/core';
// import { OverlayService } from '../service/overlay.service';
// import { Overlay } from '../model/overlay.model';
// import { Router } from '@angular/router';
// import { CommonModule } from '@angular/common';
// import { FormsModule } from '@angular/forms';
// import { MatFormFieldModule } from '@angular/material/form-field';
// import { MatInputModule } from '@angular/material/input';
// import { MatTableModule } from '@angular/material/table';
// import { MatButtonModule } from '@angular/material/button';
// import { MatDatepickerModule } from '@angular/material/datepicker';
// import { RouterOutlet } from '@angular/router';


// @Component({
//   selector: 'app-overlay-list',
//   standalone: true,
//   templateUrl: './overlay-list.component.html',
//   styleUrls: ['./overlay-list.component.scss'],
//   imports: [
//     CommonModule,
//     FormsModule,
//     MatFormFieldModule,
//     MatInputModule,
//     MatTableModule,
//     MatButtonModule,
//     MatDatepickerModule,
//     RouterOutlet
//   ]
// })
// export class OverlayListComponent implements OnInit {
//   overlays: Overlay[] = [];
//   searchTerm: string = '';

//   constructor(private overlayService: OverlayService, private router: Router) { }

//   ngOnInit(): void {
//     this.loadOverlays();
//   }

//   loadOverlays(): void {
//     this.overlayService.getOverlays().subscribe(data => {
//       this.overlays = data;
//     });
//   }

//   filterOverlays(): void {
//     if (this.searchTerm) {
//       this.overlayService.getOverlays().subscribe(data => {
//         this.overlays = data.filter(overlay => 
//           overlay.idProduto.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
//           overlay.paredeFornalha.toLowerCase().includes(this.searchTerm.toLowerCase())
//         );
//       });
//     } else {
//       this.loadOverlays();
//     }
//   }

//   onEdit(id: number): void {
//     this.router.navigate(['/overlay-form', id]);
//   }

//   onDelete(id: number): void {
//     this.overlayService.deleteOverlay(id).subscribe(() => {
//       this.loadOverlays();
//     });
//   }

//   onAdd(): void {
//     this.router.navigate(['/overlay-form']);
//   }
// }

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { OverlayService } from '../service/overlay.service';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { ReactiveFormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { MatOptionModule } from '@angular/material/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatDatepickerModule } from '@angular/material/datepicker';

@Component({
  selector: 'app-overlay-form',
  templateUrl: './overlay-form.component.html',
  styleUrls: ['./overlay-form.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    ReactiveFormsModule,
    MatSelectModule,
    MatOptionModule,
    MatDatepickerModule,
    MatToolbarModule
  ]
})
export class OverlayFormComponent implements OnInit {

  overlayForm: FormGroup;
  id: number;
  isEdit: boolean = false;
  // currentOverlayId: number | null = null; // Adiciona esta propriedade
  

  constructor(
    private fb: FormBuilder,
    private overlayService: OverlayService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.overlayForm = this.fb.group({
      idProduto: [{ value: '', disabled: true }, Validators.required], // Desabilitado para não permitir inserção
      idOverlay: [{ value: '', disabled: true }], // Adiciona idOverlay como somente leitura
      paredeFornalha: ['', Validators.required],
      local: ['', Validators.required],
      numeroTubo: ['', Validators.required],
      numeroTuboAdjacente: [{ value: '', disabled: true }],
      elevacaoInferior: ['', Validators.required],
      elevacaoSuperior: ['', Validators.required],
      dimensao: ['', Validators.required],
      escopo: ['', Validators.required],
      lado: ['', Validators.required],
      tipoEscopo: ['', Validators.required],
      liberadoGeral: ['', Validators.required],
      pendenteGeralParceiro: ['', Validators.required],
      pendenteGeralMKS: ['', Validators.required],
      executadoSoldaMKS: ['', Validators.required],
      terminoMKS: ['', Validators.required],
      validacaoCQMKS: ['', Validators.required],
      validacaoMKS: ['', Validators.required],
      validadoParceiro: ['', Validators.required],
      vsParceiro: ['', Validators.required],
      lpParceiro: ['', Validators.required],
      liberadoParceiro: ['', Validators.required],
      dataLiberadoParceiro: ['', Validators.required],
      status: ['', Validators.required],
      observacaoAlumar: ['', Validators.required],
      observacaoMKS: ['', Validators.required],
      observacaoParceiro: ['', Validators.required]
    });

    this.id = +this.route.snapshot.params['id']; // Converte para número
    this.isEdit = !!this.id;
  }

  ngOnInit(): void {
    if (this.isEdit) {
      this.overlayService.getOverlay(this.id).subscribe(data => {
        this.overlayForm.patchValue(data);
        this.generateIdProduto(); // Gera o idProduto ao carregar os dados
      });
    }

    // Observe mudanças nos campos e gere o idProduto automaticamente
    this.overlayForm.get('local')?.valueChanges.subscribe(() => this.generateIdProduto());
    this.overlayForm.get('paredeFornalha')?.valueChanges.subscribe(() => this.generateIdProduto());
    this.overlayForm.get('numeroTubo')?.valueChanges.subscribe(() => this.generateIdProduto());
  }

  generateIdProduto(): void {
    const local = this.overlayForm.get('local')?.value || '';
    const paredeFornalha = this.overlayForm.get('paredeFornalha')?.value || '';
    const numeroTubo = this.overlayForm.get('numeroTubo')?.value || '';
    // const idOverlay = this.isEdit ? this.id.toString() : '';
    const idOverlay = this.isEdit ? (this.id || '').toString() : ''; // Certifique-se de que idOverlay é uma string

    // Calcular numeroTuboAdjacente
  let numeroTuboAdjacente = '';
  if (local === 'TUBO' && numeroTubo) {
    numeroTuboAdjacente = (parseInt(numeroTubo, 10) + 1).toString();
  }

  this.overlayForm.get('numeroTuboAdjacente')?.setValue(numeroTuboAdjacente);
  
    if (local && paredeFornalha && numeroTubo) {
      const idProduto = local.substring(0, 2) + numeroTubo + paredeFornalha.substring(0, 2) + idOverlay;
      this.overlayForm.get('idProduto')?.setValue(idProduto);

    }
  }

  elevacaoOptions: number[] = [
    0, 305, 610, 914, 1219, 1524, 1829, 2134, 2438, 2743, 3048, 3353, 3658, 3962,
    4267, 4572, 4877, 5182, 5486, 5791, 6096, 6401, 6706, 7010, 7315, 7620, 7925,
    8230, 8534, 8839, 9144, 9449, 9754, 10058, 10363, 10668, 10973, 11278, 11582,
    11887, 12192, 12497, 12802, 13106, 13411, 13716, 14021, 14326, 14630, 14935,
    15240, 15545, 15850, 16154, 16459, 16764, 17069, 17374, 17678, 17983, 18288,
    18593, 18898, 19202, 19507, 19812, 20117, 20422, 20726, 21031, 21336, 21641,
    21946, 22250, 22555, 22860, 23165, 23470, 23774, 24079, 24384
  ];

  onSubmit(): void {
    if (this.overlayForm.valid) {
      const formValue = this.overlayForm.getRawValue();
      if (this.isEdit) {
        this.overlayService.updateOverlay(this.id, formValue).subscribe(() => {
          this.router.navigate(['/overlay-list']);
        });
      } else {
        this.overlayService.createOverlay(formValue).subscribe(() => {
          this.router.navigate(['/overlay-list']);
        });
      }
    }
  }

  onCancel(): void {
    if (this.isEdit && this.id) {
      // Se for edição e um ID estiver presente, exclua o overlay
      this.overlayService.deleteOverlay(this.id).subscribe(() => {
        this.router.navigate(['/overlay-list']);
      });
    } else {
      // Caso contrário, apenas redirecione para a lista
      this.router.navigate(['/overlay-list']);
    }
  }

  // onCancel(): void {
  //   this.router.navigate(['/overlay-list']);
  // }

  getFieldError(field: string): boolean {
    const control = this.overlayForm.get(field);
    return control ? control.hasError('required') : false;
  }
}


// import { Component, OnInit } from '@angular/core';
// import { FormBuilder, FormGroup, Validators } from '@angular/forms';
// import { OverlayService } from '../service/overlay.service';
// import { ActivatedRoute, Router } from '@angular/router';
// import { Overlay } from '../../overlay/model/overlay.model';
// import { CommonModule } from '@angular/common';
// import { MatInputModule } from '@angular/material/input';
// import { MatFormFieldModule } from '@angular/material/form-field';
// import { MatButtonModule } from '@angular/material/button';
// import { ReactiveFormsModule } from '@angular/forms';
// import { MatSelectModule } from '@angular/material/select';
// import { MatOptionModule } from '@angular/material/core';
// import { MatToolbarModule } from '@angular/material/toolbar';
// import { MatDatepickerModule } from '@angular/material/datepicker';

// @Component({
//   selector: 'app-overlay-form',
//   templateUrl: './overlay-form.component.html',
//   styleUrls: ['./overlay-form.component.scss'],
//   standalone: true,
//   imports: [
//     CommonModule,
//     MatInputModule,
//     MatFormFieldModule,
//     MatButtonModule,
//     ReactiveFormsModule,
//     MatSelectModule,
//     MatOptionModule,
//     MatDatepickerModule,
//     MatToolbarModule
//   ]
// })
// export class OverlayFormComponent implements OnInit {
  
//   overlayForm: FormGroup;
//   id: number;
//   isEdit: boolean = false;

//   constructor(
//     private fb: FormBuilder,
//     private overlayService: OverlayService,
//     private route: ActivatedRoute,
//     private router: Router
//   ) {
//     this.overlayForm = this.fb.group({
//       idProduto: [{ value: '', disabled: true }, Validators.required], // Desabilitado para não permitir inserção
//       paredeFornalha: ['', Validators.required],
//       local: ['', Validators.required],
//       numeroTubo: ['', Validators.required],
//       numeroTuboAdjacente: ['', Validators.required],
//       elevacaoInferior: ['', Validators.required],
//       elevacaoSuperior: ['', Validators.required],
//       dimensao: ['', Validators.required],
//       escopo: ['', Validators.required],
//       lado: ['', Validators.required],
//       tipoEscopo: ['', Validators.required],
//       liberadoGeral: ['', Validators.required],
//       pendenteGeralParceiro: ['', Validators.required],
//       pendenteGeralMKS: ['', Validators.required],
//       executadoSoldaMKS: ['', Validators.required],
//       terminoMKS: ['', Validators.required],
//       validacaoCQMKS: ['', Validators.required],
//       validacaoMKS: ['', Validators.required],
//       validadoParceiro: ['', Validators.required],
//       vsParceiro: ['', Validators.required],
//       lpParceiro: ['', Validators.required],
//       liberadoParceiro: ['', Validators.required],
//       dataLiberadoParceiro: ['', Validators.required],
//       status: ['', Validators.required],
//       observacaoAlumar: ['', Validators.required],
//       observacaoMKS: ['', Validators.required],
//       observacaoParceiro: ['', Validators.required]
//     });

//     this.id = this.route.snapshot.params['id'];
//     this.isEdit = !!this.id;
//   }

//   ngOnInit(): void {
//     if (this.isEdit) {
//       this.overlayService.getOverlay(this.id).subscribe(data => {
//         this.overlayForm.patchValue(data);
//         this.generateIdProduto(); // Gera o idProduto ao carregar os dados
//       });
//     }

//     // Observe mudanças nos campos e gere o idProduto automaticamente
//     this.overlayForm.get('local')?.valueChanges.subscribe(() => this.generateIdProduto());
//     this.overlayForm.get('paredeFornalha')?.valueChanges.subscribe(() => this.generateIdProduto());
//     this.overlayForm.get('numeroTubo')?.valueChanges.subscribe(() => this.generateIdProduto());
    
//   }

//   generateIdProduto(): void {
//     const local = this.overlayForm.get('local')?.value || '';
//     const paredeFornalha = this.overlayForm.get('paredeFornalha')?.value || '';
//     const numeroTubo = this.overlayForm.get('numeroTubo')?.value || '';
//     const idOverlay = this.isEdit ? this.id.toString() : '';
  
//     if (local && paredeFornalha && numeroTubo) {
//       const idProduto = local.substring(0, 2) + numeroTubo + paredeFornalha.substring(0, 2) + idOverlay;
//       this.overlayForm.get('idProduto')?.setValue(idProduto);
//     }
//   }
  
//   elevacaoOptions: number[] = [
//     0, 305, 610, 914, 1219, 1524, 1829, 2134, 2438, 2743, 3048, 3353, 3658, 3962,
//     4267, 4572, 4877, 5182, 5486, 5791, 6096, 6401, 6706, 7010, 7315, 7620, 7925,
//     8230, 8534, 8839, 9144, 9449, 9754, 10058, 10363, 10668, 10973, 11278, 11582,
//     11887, 12192, 12497, 12802, 13106, 13411, 13716, 14021, 14326, 14630, 14935,
//     15240, 15545, 15850, 16154, 16459, 16764, 17069, 17374, 17678, 17983, 18288,
//     18593, 18898, 19202, 19507, 19812, 20117, 20422, 20726, 21031, 21336, 21641,
//     21946, 22250, 22555, 22860, 23165, 23470, 23774, 24079, 24384
//   ];
  

//   onSubmit() {
//     if (this.overlayForm.valid) {
//       if (this.isEdit) {
//         this.overlayService.updateOverlay(this.id, this.overlayForm.getRawValue()).subscribe(() => {
//           this.router.navigate(['/overlay-list']);
//         });
//       } else {
//         this.overlayService.createOverlay(this.overlayForm.getRawValue()).subscribe(() => {
//           this.router.navigate(['/overlay-list']);
//         });
//       }
//     }
//   }

//   onCancel(): void {
//     this.router.navigate(['/overlay-list']);
//   }

//   getFieldError(field: string): boolean {
//     const control = this.overlayForm.get(field);
//     return control ? control.hasError('required') : false;
//   }
// }


// import { Component, OnInit } from '@angular/core';
// import { FormBuilder, FormGroup, Validators } from '@angular/forms';
// import { OverlayService } from '../service/overlay.service';
// import { ActivatedRoute, Router } from '@angular/router';
// import { Overlay } from '../../overlay/model/overlay.model';
// import { CommonModule } from '@angular/common';
// import { MatInputModule } from '@angular/material/input';
// import { MatFormFieldModule } from '@angular/material/form-field';
// import { MatButtonModule } from '@angular/material/button';
// import { ReactiveFormsModule } from '@angular/forms';
// import { MatSelectModule } from '@angular/material/select';
// import { MatOptionModule } from '@angular/material/core';
// import {MatToolbarModule} from '@angular/material/toolbar';
// import { MatDatepickerModule } from '@angular/material/datepicker';

// @Component({
//   selector: 'app-overlay-form',
//   templateUrl: './overlay-form.component.html',
//   styleUrls: ['./overlay-form.component.scss'],
//   standalone: true,
//   imports: [
//     CommonModule,
//     MatInputModule,
//     MatFormFieldModule,
//     MatButtonModule,
//     ReactiveFormsModule,
//     MatSelectModule,
//     MatOptionModule,
//     MatDatepickerModule,
//     MatToolbarModule
//   ]
// })
// export class OverlayFormComponent implements OnInit {
  
//   overlayForm: FormGroup;
//   id: number;
//   isEdit: boolean = false;

//   constructor(
//     private fb: FormBuilder,
//     private overlayService: OverlayService,
//     private route: ActivatedRoute,
//     private router: Router
//   ) {
//     this.overlayForm = this.fb.group({
//       idProduto: ['', Validators.required],
//       paredeFornalha: ['', Validators.required],
//       local: ['', Validators.required],
//       numeroTubo: ['', Validators.required],
//       numeroTuboAdjacente: ['', Validators.required],
//       elevacaoInferior: ['', Validators.required],
//       elevacaoSuperior: ['', Validators.required],
//       dimensao: ['', Validators.required],
//       escopo: ['', Validators.required],
//       lado: ['', Validators.required],
//       tipoEscopo: ['', Validators.required],
//       liberadoGeral: ['', Validators.required],
//       pendenteGeralParceiro: ['', Validators.required],
//       pendenteGeralMKS: ['', Validators.required],
//       executadoSoldaMKS: ['', Validators.required],
//       terminoMKS: ['', Validators.required],
//       validacaoCQMKS: ['', Validators.required],
//       validacaoMKS: ['', Validators.required],
//       validadoParceiro: ['', Validators.required],
//       vsParceiro: ['', Validators.required],
//       lpParceiro: ['', Validators.required],
//       liberadoParceiro: ['', Validators.required],
//       dataLiberadoParceiro: ['', Validators.required],
//       status: ['', Validators.required],
//       observacaoAlumar: ['', Validators.required],
//       observacaoMKS: ['', Validators.required],
//       observacaoParceiro: ['', Validators.required]
//     });

//     this.id = this.route.snapshot.params['id'];
//     this.isEdit = !!this.id;
//   }

//   ngOnInit(): void {
//     if (this.isEdit) {
//       this.overlayService.getOverlay(this.id).subscribe(data => {
//         this.overlayForm.patchValue(data);
//       });
//     }
//   }

//   onSubmit() {
//     if (this.overlayForm.valid) {
//       if (this.isEdit) {
//         this.overlayService.updateOverlay(this.id, this.overlayForm.value).subscribe(() => {
//           this.router.navigate(['/overlay-list']);
//         });
//       } else {
//         this.overlayService.createOverlay(this.overlayForm.value).subscribe(() => {
//           this.router.navigate(['/overlay-list']);
//         });
//       }
//     }
//   }
//   onCancel(): void {
//     this.router.navigate(['/overlay-list']);
//   }

//   getFieldError(field: string): boolean {
//     const control = this.overlayForm.get(field);
//     return control ? control.hasError('required') : false;
//   }
// }

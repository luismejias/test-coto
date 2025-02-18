import { Component, inject, OnInit, signal } from '@angular/core';
import {
  FormControl,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

import { CocktailService } from '../../core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit {
  private cocktailService = inject(CocktailService);
  readonly searchQuery = new FormControl('', [Validators.required]);

  ngOnInit() {
    this.onSearch();
  }

  onSearch(): void {
    this.searchQuery.valueChanges.subscribe((value) => {
      console.log({ value });
    });
  }

  viewDetails(id: string): void {
    console.log('Ver detalles de cóctel con ID:', id);
    // Implementar navegación a detalle del cóctel
  }
}

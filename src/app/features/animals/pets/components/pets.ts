import { ChangeDetectionStrategy, ChangeDetectorRef, Component, inject } from '@angular/core';
import { PetsFacade } from '../services/pets-facade';
import { TableModule } from 'primeng/table';

@Component({
  selector: 'app-pets',
  imports: [TableModule],
  templateUrl: './pets.html',
  styleUrl: './pets.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [PetsFacade],
})
export class Pets {
  private petsFacade = inject(PetsFacade);
  private cdr = inject(ChangeDetectorRef);
  pets = this.petsFacade.pets;

  constructor() {
    this.petsFacade.loadPets({ page: 1, limit: 10 });
  }
}

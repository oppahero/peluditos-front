import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LegalEntities } from './legal-entities';

describe('LegalEntities', () => {
  let component: LegalEntities;
  let fixture: ComponentFixture<LegalEntities>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LegalEntities],
    }).compileComponents();

    fixture = TestBed.createComponent(LegalEntities);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

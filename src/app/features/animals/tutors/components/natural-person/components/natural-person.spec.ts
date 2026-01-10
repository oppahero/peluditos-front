import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NaturalPerson } from './natural-person';

describe('NaturalPerson', () => {
  let component: NaturalPerson;
  let fixture: ComponentFixture<NaturalPerson>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NaturalPerson],
    }).compileComponents();

    fixture = TestBed.createComponent(NaturalPerson);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PotajesComponent } from './potajes.component';

describe('PotajesComponent', () => {
  let component: PotajesComponent;
  let fixture: ComponentFixture<PotajesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PotajesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PotajesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

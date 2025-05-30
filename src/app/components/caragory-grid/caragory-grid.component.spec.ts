import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CaragoryGridComponent } from './caragory-grid.component';

describe('CaragoryGridComponent', () => {
  let component: CaragoryGridComponent;
  let fixture: ComponentFixture<CaragoryGridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CaragoryGridComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CaragoryGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

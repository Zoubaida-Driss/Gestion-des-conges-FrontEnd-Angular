import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TraicongComponent } from './traicong.component';

describe('TraicongComponent', () => {
  let component: TraicongComponent;
  let fixture: ComponentFixture<TraicongComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TraicongComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TraicongComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

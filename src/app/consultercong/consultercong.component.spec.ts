import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultercongComponent } from './consultercong.component';

describe('ConsultercongComponent', () => {
  let component: ConsultercongComponent;
  let fixture: ComponentFixture<ConsultercongComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsultercongComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConsultercongComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

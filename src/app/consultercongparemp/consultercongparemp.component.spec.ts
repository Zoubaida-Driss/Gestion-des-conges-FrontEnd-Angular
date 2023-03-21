import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultercongparempComponent } from './consultercongparemp.component';

describe('ConsultercongparempComponent', () => {
  let component: ConsultercongparempComponent;
  let fixture: ComponentFixture<ConsultercongparempComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsultercongparempComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConsultercongparempComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

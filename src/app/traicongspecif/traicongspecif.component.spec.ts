import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TraicongspecifComponent } from './traicongspecif.component';

describe('TraicongspecifComponent', () => {
  let component: TraicongspecifComponent;
  let fixture: ComponentFixture<TraicongspecifComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TraicongspecifComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TraicongspecifComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

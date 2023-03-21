import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjoutercongComponent } from './ajoutercong.component';

describe('AjoutercongComponent', () => {
  let component: AjoutercongComponent;
  let fixture: ComponentFixture<AjoutercongComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AjoutercongComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AjoutercongComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeletecongComponent } from './deletecong.component';

describe('DeletecongComponent', () => {
  let component: DeletecongComponent;
  let fixture: ComponentFixture<DeletecongComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeletecongComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeletecongComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

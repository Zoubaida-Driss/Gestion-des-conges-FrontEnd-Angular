import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListecongComponent } from './listecong.component';

describe('ListecongComponent', () => {
  let component: ListecongComponent;
  let fixture: ComponentFixture<ListecongComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListecongComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListecongComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainLayComponent } from './main-lay.component';

describe('MainLayComponent', () => {
  let component: MainLayComponent;
  let fixture: ComponentFixture<MainLayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainLayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MainLayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

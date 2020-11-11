import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileButttonComponent } from './profile-buttton.component';

describe('ProfileButttonComponent', () => {
  let component: ProfileButttonComponent;
  let fixture: ComponentFixture<ProfileButttonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfileButttonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileButttonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

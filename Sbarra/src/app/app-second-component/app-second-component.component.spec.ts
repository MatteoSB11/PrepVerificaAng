import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppSecondComponentComponent } from './app-second-component.component';

describe('AppSecondComponentComponent', () => {
  let component: AppSecondComponentComponent;
  let fixture: ComponentFixture<AppSecondComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppSecondComponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppSecondComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

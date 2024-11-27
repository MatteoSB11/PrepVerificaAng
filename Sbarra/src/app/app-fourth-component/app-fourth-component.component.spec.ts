import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppFourthComponentComponent } from './app-fourth-component.component';

describe('AppFourthComponentComponent', () => {
  let component: AppFourthComponentComponent;
  let fixture: ComponentFixture<AppFourthComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppFourthComponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppFourthComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

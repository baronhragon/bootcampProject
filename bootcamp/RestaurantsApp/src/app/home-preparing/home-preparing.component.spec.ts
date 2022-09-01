import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomePreparingComponent } from './home-preparing.component';

describe('HomePreparingComponent', () => {
  let component: HomePreparingComponent;
  let fixture: ComponentFixture<HomePreparingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomePreparingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomePreparingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

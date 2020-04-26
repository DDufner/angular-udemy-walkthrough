import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Ass2usernameComponent } from './ass2username.component';

describe('Ass2usernameComponent', () => {
  let component: Ass2usernameComponent;
  let fixture: ComponentFixture<Ass2usernameComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Ass2usernameComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Ass2usernameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListDepsComponent } from './list-deps.component';

describe('ListDepsComponent', () => {
  let component: ListDepsComponent;
  let fixture: ComponentFixture<ListDepsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListDepsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListDepsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

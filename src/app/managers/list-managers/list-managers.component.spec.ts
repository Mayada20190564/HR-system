import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListManagersComponent } from './list-managers.component';

describe('ListManagersComponent', () => {
  let component: ListManagersComponent;
  let fixture: ComponentFixture<ListManagersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListManagersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListManagersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

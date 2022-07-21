import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DepartmentaddComponent } from './departmentadd.component';

describe('DepartmentaddComponent', () => {
  let component: DepartmentaddComponent;
  let fixture: ComponentFixture<DepartmentaddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DepartmentaddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DepartmentaddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

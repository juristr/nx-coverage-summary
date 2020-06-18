import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Testlib2modComponent } from './testlib2mod.component';

describe('Testlib2modComponent', () => {
  let component: Testlib2modComponent;
  let fixture: ComponentFixture<Testlib2modComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Testlib2modComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Testlib2modComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

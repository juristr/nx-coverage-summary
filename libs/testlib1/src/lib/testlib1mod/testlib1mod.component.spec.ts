import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Testlib1modComponent } from './testlib1mod.component';

describe('Testlib1modComponent', () => {
  let component: Testlib1modComponent;
  let fixture: ComponentFixture<Testlib1modComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Testlib1modComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Testlib1modComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

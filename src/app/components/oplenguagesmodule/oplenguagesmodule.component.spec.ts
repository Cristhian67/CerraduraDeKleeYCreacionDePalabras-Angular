import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OplenguagesmoduleComponent } from './oplenguagesmodule.component';

describe('OplenguagesmoduleComponent', () => {
  let component: OplenguagesmoduleComponent;
  let fixture: ComponentFixture<OplenguagesmoduleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OplenguagesmoduleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OplenguagesmoduleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

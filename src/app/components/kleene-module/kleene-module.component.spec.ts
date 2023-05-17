import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KleeneModuleComponent } from './kleene-module.component';

describe('KleeneModuleComponent', () => {
  let component: KleeneModuleComponent;
  let fixture: ComponentFixture<KleeneModuleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KleeneModuleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KleeneModuleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

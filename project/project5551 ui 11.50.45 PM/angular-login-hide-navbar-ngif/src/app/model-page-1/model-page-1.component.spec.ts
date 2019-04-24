import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModelPage1Component } from './model-page-1.component';

describe('ModelPage3Component', () => {
  let component: ModelPage1Component;
  let fixture: ComponentFixture<ModelPage1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModelPage1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModelPage1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModelPage2Component } from './model-page-2.component';

describe('ModelPage3Component', () => {
  let component: ModelPage2Component;
  let fixture: ComponentFixture<ModelPage2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModelPage2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModelPage2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

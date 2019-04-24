import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModelPage3Component } from './model-page-3.component';

describe('ModelPage3Component', () => {
  let component: ModelPage3Component;
  let fixture: ComponentFixture<ModelPage3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModelPage3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModelPage3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

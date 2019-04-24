import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModelPageComponent } from './model-page.component';

describe('ModelPage3Component', () => {
  let component: ModelPageComponent;
  let fixture: ComponentFixture<ModelPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModelPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModelPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

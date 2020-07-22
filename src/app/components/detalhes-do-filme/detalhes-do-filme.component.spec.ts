import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalhesDoFilmeComponent } from './detalhes-do-filme.component';

describe('DetalhesDoFilmeComponent', () => {
  let component: DetalhesDoFilmeComponent;
  let fixture: ComponentFixture<DetalhesDoFilmeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetalhesDoFilmeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetalhesDoFilmeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

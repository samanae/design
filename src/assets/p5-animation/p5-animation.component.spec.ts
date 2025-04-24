import { ComponentFixture, TestBed } from '@angular/core/testing';

import { P5AnimationComponent } from './p5-animation.component';

describe('P5AnimationComponent', () => {
  let component: P5AnimationComponent;
  let fixture: ComponentFixture<P5AnimationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [P5AnimationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(P5AnimationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

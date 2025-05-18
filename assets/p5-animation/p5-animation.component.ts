import { Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import p5 from 'p5';

@Component({
  selector: 'app-p5-animation',
  standalone: true,
  imports: [],
  templateUrl: './p5-animation.component.html',
  styleUrl: './p5-animation.component.scss'
})
export class P5AnimationComponent implements OnInit, OnDestroy {

  @ViewChild('animationContainer', { static: true }) animationContainer!: ElementRef;
  private p5Instance!: p5;

  ngOnInit(): void {
    this.createCanvas();
  }

  private createCanvas(): void {
    this.p5Instance = new p5((sketch: any) => {
      let x: number;
      let y: number;
      let shapeSize = 350;
      let color1: any, color2: any;

      sketch.setup = () => {
        const canvas = sketch.createCanvas(sketch.windowWidth, sketch.windowHeight);
        canvas.parent(this.animationContainer.nativeElement);
        x = sketch.width / 2;
        y = sketch.height / 2;

        color1 = sketch.color(11, 19, 50);
        color2 = sketch.color(10, 64, 243, 99.6);
      };

      sketch.draw = () => {
        sketch.background(15, 15, 36);
        sketch.noStroke();

        let dx = sketch.mouseX - x;
        let dy = sketch.mouseY - y;
        let distance = sketch.dist(x, y, sketch.mouseX, sketch.mouseY);
        let lerpAmount = sketch.constrain(distance / 200, 0, 1);
        let lerpedColor = sketch.lerpColor(color1, color2, lerpAmount);

        let easing = 0.05;
        x += dx * easing;
        y += dy * easing;

        sketch.fill(lerpedColor);
        sketch.drawingContext.filter = 'blur(40px)';
        sketch.translate(p5.Vector.fromAngle(sketch.millis() / 1000, 40));
        sketch.ellipse(x * 0.4, y * 2.3, shapeSize * 2, shapeSize * 2);

        sketch.fill(lerpedColor);
        sketch.drawingContext.filter = 'none';
        sketch.translate(p5.Vector.fromAngle(sketch.millis() / 1000, 20));
        sketch.ellipse(x + 300, y - 200, 50, 50);

        sketch.fill(lerpedColor);
        sketch.ellipse(x - 300, y + 100, 20, 20);

        sketch.fill(255);
        sketch.translate(p5.Vector.fromAngle(sketch.millis() / 1000, 20));
        sketch.ellipse(x - 160, y - 240, 7, 7);
        sketch.ellipse(x - 460, y + 240, 4, 4);
        sketch.ellipse(x - 660, y + 80, 4, 4);
        sketch.ellipse(x + 460, y + 140, 5, 5);
        sketch.ellipse(sketch.windowWidth - 50, sketch.windowHeight - 50, 5, 5);
        sketch.translate(p5.Vector.fromAngle(sketch.millis() / -2000, 0.4));
        sketch.ellipse(sketch.windowWidth / 2, sketch.windowHeight * 0.2, 5, 5);
        sketch.ellipse(sketch.windowWidth * 0.2, sketch.windowHeight * 0.6, 5, 5);
        sketch.drawingContext.filter = 'blur(3px)';
        sketch.ellipse(sketch.windowWidth - 450, sketch.windowHeight + 50, 10, 10);
        sketch.fill(11, 31, 111);
        sketch.ellipse(sketch.windowWidth - 1700, sketch.windowHeight - 600, 60, 60);

        sketch.fill(lerpedColor);
        sketch.drawingContext.filter = 'blur(1px)';
        sketch.ellipse(x - 600, y - 270, 20, 20);

        sketch.fill(lerpedColor);
        sketch.drawingContext.filter = 'blur(25px)';
        sketch.ellipse(x, y, shapeSize, shapeSize);
      };

      sketch.windowResized = () => {
        sketch.resizeCanvas(sketch.windowWidth, sketch.windowHeight);
        x = sketch.width / 2;
        y = sketch.height / 2;
      };
    });
  }

  ngOnDestroy(): void {
    this.p5Instance.remove();
  }
}

import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { P5AnimationComponent } from '../assets/p5-animation/p5-animation.component';
import { HomepageComponent } from './sites/homepage/homepage.component';
import { NavigationComponent } from './components/navigation/navigation.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, P5AnimationComponent, NavigationComponent, HomepageComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'portfolio';
}

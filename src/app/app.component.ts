import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { P5AnimationComponent } from '../assets/p5-animation/p5-animation.component';
import { NavigationComponent } from '../components/navigation/navigation.component';
import { HomepageComponent } from '../sites/homepage/homepage.component';
import { ProjectsComponent } from '../sites/projects/projects.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink, P5AnimationComponent, NavigationComponent, HomepageComponent, ProjectsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'portfolio';
}

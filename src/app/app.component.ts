import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { P5AnimationComponent } from '../assets/p5-animation/p5-animation.component';
import { NavigationComponent } from '../components/navigation/navigation.component';
import { HomepageComponent } from '../sites/homepage/homepage.component';
import { ProjectsComponent } from '../sites/projects/projects.component';
import { CommonModule } from '@angular/common';
import { ProjectCardComponent } from '../components/project-card/project-card.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, 
    RouterLink, 
    P5AnimationComponent, 
    NavigationComponent, 
    HomepageComponent, 
    ProjectsComponent, 
    CommonModule,
    ProjectCardComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'portfolio';
}

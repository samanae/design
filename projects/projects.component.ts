import { Component, OnInit } from '@angular/core';
import { PROJECTS, ProjectsType } from '../../assets/data/projects';
import { CommonModule } from '@angular/common';
import { ProjectCardComponent } from '../../components/project-card/project-card.component';

@Component({
  selector: 'app-projects',
  imports: [CommonModule, ProjectCardComponent],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent implements OnInit {
 projectCollection: ProjectsType[] = [];
 currentIndex = 0;

 ngOnInit(): void {
  this.projectCollection = PROJECTS;
 }

 showNext(): void {
  if (this.currentIndex < this.projectCollection.length - 1) {
    this.currentIndex++;
  }
}

showPrevious(): void {
  if (this.currentIndex > 0) {
    this.currentIndex--;
  }
}

goToProject(index: number): void {
  this.currentIndex = index;
}

}

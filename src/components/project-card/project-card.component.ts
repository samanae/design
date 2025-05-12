import { Component, Input, OnInit } from '@angular/core';
import { PROJECTS, ProjectsType } from '../../assets/data/projects';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-project-card',
  imports: [CommonModule],
  templateUrl: './project-card.component.html',
  styleUrl: './project-card.component.scss'
})
export class ProjectCardComponent implements OnInit{
 projectCollection: ProjectsType[] = [];
 @Input() currentIndex = 0;

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

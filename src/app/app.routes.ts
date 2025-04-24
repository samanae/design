import { Routes } from '@angular/router';
import { HomepageComponent } from '../sites/homepage/homepage.component';
import { ProjectsComponent } from '../sites/projects/projects.component';

export const routes: Routes = [
    {path: 'homepage', component: HomepageComponent },
    {path: 'projects', component: ProjectsComponent},
    /* {path: 'about', component: AboutComponent} */
];

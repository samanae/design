import { Routes } from '@angular/router';
import { HomepageComponent } from '../sites/homepage/homepage.component';
import { ProjectsComponent } from '../sites/projects/projects.component';
import { ErrorPageComponent } from '../sites/error-page/error-page.component';

export const routes: Routes = [
    {path: 'homepage', component: HomepageComponent },
    {path: 'projects', component: ProjectsComponent},
    {path: 'error', component: ErrorPageComponent},
    /* {path: 'about', component: AboutComponent} */
];

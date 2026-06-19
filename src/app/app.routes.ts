import { Routes } from '@angular/router';
import { HomepageComponent } from '../../homepage/homepage.component';
import { ProjectsComponent } from '../../projects/projects.component';
import { ErrorPageComponent } from '../../error-page/error-page.component';

export const routes: Routes = [
    {path: 'homepage', component: HomepageComponent },
    {path: 'projects', component: ProjectsComponent},
    {path: 'error', component: ErrorPageComponent},
    /* {path: 'about', component: AboutComponent} */
];

import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactsComponent } from './contacts/contacts.component';
import { SkillsetComponent } from './skillset/skillset.component';
import { ProjectsComponent } from './projects/projects.component';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    AboutComponent,
    //ContactsComponent,
    //SkillsetComponent,
    //ProjectsComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'Portfolio';
}

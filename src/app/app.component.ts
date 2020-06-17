import { Component } from '@angular/core';
import { faHorse } from '@fortawesome/free-solid-svg-icons';
import { faRecycle } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'ScrumTaskBoard';
  faHorse = faHorse
  faRecycle = faRecycle
}

import { Component } from '@angular/core';
import { ApiService } from './api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'Client App';
  currentTime = Date.now();
  name = '';
  constructor(private api: ApiService) {}
  ngOnInit() {
    this.api.getName().subscribe(
      (result) => {
        this.name = result;
      },
      (error) => {
        console.error('Error: ' + JSON.stringify(error));
        this.name = 'Failed to retrieve data from the backend server';
      }
    );
  }
}

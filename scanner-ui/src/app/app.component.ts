import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface Data {
  user: string;
  item: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  value = '';

  constructor(httpClient: HttpClient) {
    httpClient.get<Data[]>('http://localhost:3000/get')
      .subscribe((data) => {
        this.value = data.map(d => d.item).join('; ');
      });
  }

}

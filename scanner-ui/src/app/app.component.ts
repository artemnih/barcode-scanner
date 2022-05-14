import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {

  constructor(httpClient: HttpClient) {
    // httpClient.get<Data[]>('http://localhost:3000/get')
    //   .subscribe((data) => {
    //     this.value = data.map(d => d.item).join('; ');
    //   });
  }

}

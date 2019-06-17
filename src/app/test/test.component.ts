import { Component, OnInit, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})

@Injectable()
export class TestComponent implements OnInit {
  beers = [];
  onFetch() {
    this.getBrewdogBeers();
  }

  constructor(private httpClient: HttpClient) { }
  getBrewdogBeers() {
    this.httpClient
      .get<any[]>('https://api.punkapi.com/v2/beers')
      .subscribe(
        (response) => {
          console.log(response);
          this.beers = response;
        },
        (error) => {
          console.log('Erreur ! : ' + error);
        }
      );
  }

  ngOnInit() {
  }

}

import { Component, OnInit, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss'],
})

@Injectable()
export class TestComponent implements OnInit {
  beers = [];
  onFetch() {
    this.getBrewdogBeers();
  }

  onDelete(i) {
    this.beers.splice(i, 1);
  }

  constructor(private httpClient: HttpClient) { }
  getBrewdogBeers() {
    this.httpClient
      .get<any[]>('https://api.punkapi.com/v2/beers')
      .subscribe(
        (response) => {
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

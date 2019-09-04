import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent implements OnInit {

  // countries: any[] = [];

  // constructor(private http: HttpClient) {

  //   console.log('home constructor');
  // this.http.get('https://restcountries.eu/rest/v2/lang/es')
  //   .subscribe( (resp: any) => {
  //     this.countries = resp;
  //     console.log(resp)
  //   })
  //  };

  newReleases : any[] = [];

  constructor( private spotify: SpotifyService ){

    this.spotify.getNewReleases()
      .subscribe( (data: any) => {
        this.newReleases = data;
      });
  }
  ngOnInit() {
  }

};

import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http: HttpClient) {
    console.log('object')
   }

  getQuery(query: string) {
    const url = `https://api.spotify.com/v1/${query}`;

    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQDwi5CBfihLrfVK3jiGK3y16GRyQJgf7Nl1Qm5h_tqGTq9VFVS-zKai96tiLFcQVYxahNAeM7E2k4HQCVM'
    })

    return this.http.get(url, { headers });
  }

  getNewReleases() { 
      
    // const headers = new HttpHeaders({
    //   'Authorization': 'Bearer BQAmYGrPj7enzQsWzgG-hIayrTZrrjz8_XK1r1cN81gqgLKz9TmJWguL35B2T_1NZrc_Lx28RvJXZr30KeEO_BtWfzZ9hXgbhvsvUsSHqzcJa_2jxaQzLR3LgZTBN-B3RJRupkB54Pn4'
    // })

  //   return this.http.get('https://api.spotify.com/v1/browse/new-releases', { headers })
  //     .pipe( map( data => data['albums'].items ));
   
  return this.getQuery('browse/new-releases?limit=20')
  .pipe( map( data => data['albums'].items ));
  }

  getArtists(term: string) { 
      
    return this.getQuery(`search?q=${ term }&type=artist&limit=15`)
    .pipe( map( data => data['artists'].items ));
   }

  getArtist(id: string) {    
    return this.getQuery(`artists/${id}`)
    // .pipe( map( data => data['artists'].items ));
  }
  
  getTopTracks(id: string){
    return this.getQuery(`artists/${id}/top-tracks?country=us`)
    .pipe( map( data => data['tracks'] ));

   }


   
}

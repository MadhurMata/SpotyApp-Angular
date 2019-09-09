import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';


@Pipe({
  name: 'safedom'
})
export class SafedomPipe implements PipeTransform {
  
  constructor( private domSanitazer:DomSanitizer){}
  transform(value: string): any {

  const url = 'https://open.spotify.com/embed?uri='

    return this.domSanitazer.bypassSecurityTrustResourceUrl( url + value );
  }

}

import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Pipe({
  name: 'domseguro'
})
export class DomseguroPipe implements PipeTransform {

  constructor( private sanitizer: DomSanitizer ) {}

  transform(userPicture: string ): SafeResourceUrl{
    return this.sanitizer.bypassSecurityTrustResourceUrl(userPicture);
  }

}

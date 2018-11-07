import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/internal/operators';

@Injectable()

export class PalgnService {
  constructor(private http: HttpClient){}

  getXMLDOC():Observable<any>{
    return this.http.get('assets/plug_n_play.xml', {responseType: 'text'}).pipe(
      map((res)=>{
        return res;
      })
    );
  }

  // getXMLD():Observable<any>{
  //   return this.http.get('assets/plug_n_play.xml', {responseType: 'text'}).pipe(
  //     map((res)=>{
  //       const tx = new DOMParser();
  //       let docXML = tx.parseFromString(res, 'text/html');
  //       let regV = /\n/;
  //       let textXMLSentence = docXML.getElementsByTagName('sentence')[0].textContent.split(regV);
  //       let textXMLAnswer = docXML.querySelectorAll('answers> answer');
  //     })
  //   );
  // }
}

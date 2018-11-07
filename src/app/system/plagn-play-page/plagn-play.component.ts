import {
  AfterViewInit,
  Component,
  ElementRef,
  OnDestroy,
  OnInit,
  QueryList,
  ViewChild,
  ViewChildren
} from '@angular/core';

import {interval,  Subscription} from 'rxjs';
import {PalgnService} from '../../model/palgn-service';


@Component({
  selector: 'app-plagn-play',
  templateUrl: './plagn-play.component.html',
  styleUrls: ['./plagn-play.component.css']
})
export class PlagnPlayComponent implements OnInit, OnDestroy, AfterViewInit {
  textSentence = [];
  textAnswer = [];
  textArrSplit = [];
  docXML: HTMLDocument;
  private elem: HTMLElement;
  @ViewChild('divRight') divRight: ElementRef<HTMLDivElement>;
  @ViewChildren('dragover') dragover: QueryList<HTMLDivElement>;
  sub: Subscription;

  disableButton: boolean = true;
  editing: boolean = true;

  constructor(private service: PalgnService) {
  }

  ngOnInit() {
    this.splitText();
  }

  ngAfterViewInit(): void {
  }

  ngOnDestroy() {
    if (this.sub) this.sub.unsubscribe();
  }

  splitText() {
    this.sub = this.service.getXMLDOC().subscribe((data) => {
      const tx = new DOMParser();
      this.docXML = tx.parseFromString(data, 'text/html');
      let regV = /\n/;
      let textXMLSentence = this.docXML.getElementsByTagName('sentence')[0].textContent.split(regV);
      let textXMLAnswer = this.docXML.querySelectorAll('answers> answer');
      for (let i = 0; i < textXMLAnswer.length; i++) {
        this.textAnswer.push(textXMLAnswer[i].textContent);
      }
      textXMLSentence.forEach((el) => {
        this.textSentence.push(el);
      });
      for (let i = 0; i < this.textSentence.length; i++) {
        for (let j = 0; j < this.textAnswer.length; j++) {
          if (this.textSentence[i].search(this.textAnswer[j]) !== -1) {
            this.textArrSplit.push(this.textSentence[i].slice(this.textAnswer[j].length));
          } else {
            // console.log(false);
          }
        }
      }
    });
  }

  allowDrop(ev) {
    ev.preventDefault();
  }

  drop(ev) {
    if (ev.target.innerHTML === '') {
      this.disableButton = false;
      ev.target.appendChild(this.elem);
      ev.target.style.width = 'auto';
      this.elem.style.top = '-5px';
      this.elem.addEventListener('dblclick', this.dblClick.bind(this));
      this.elem = null;
    }
  }

  drag(ev) {
    this.elem = ev.currentTarget;
  }

  check() {
    let div = document.getElementsByClassName('dragover') as HTMLCollectionOf<HTMLDivElement>;
    let j = 0;
    for (let i = 0; i < div.length; i++) {
      if (div[i].textContent === this.textAnswer[j]) {
        div[i].style.border = '1px solid green';
        this.editing = false;
      } else {
        div[i].style.border = '1px solid red';
        this.editing = true;
      }
      j++;
    }

  }

  remove()  {
    let div = document.getElementsByClassName('dragover') as HTMLCollectionOf<HTMLDivElement>;
    let p = document.querySelectorAll('.dragover> p') as HTMLCollectionOf<HTMLParagraphElement>;
    for (let i = 0; i < div.length; i++) {
      div[i].innerHTML = null;
      div[i].style.width = '120px';
      div[i].style.border = '2px solid lightblue';
    }
    for (let i = 0; i < p.length; i++) {
      p[i].style.border = '1px solid rgba(0,0,0,.125)';
      this.divRight.nativeElement.appendChild(p[i]);
    }
    this.disableButton = true;
    this.editing = true;
  }

  dblClick() {
    let p = document.getElementsByClassName('drag')[0] as HTMLElement;
    this.divRight.nativeElement.appendChild(p);
  }

}

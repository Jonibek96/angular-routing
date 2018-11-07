import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {DragulaService} from 'ng2-dragula';

interface ArrNumber {
  [ind: string]: string
}
@Component({
  selector: 'app-dragula',
  templateUrl: './dragula.component.html',
  styleUrls: ['./dragula.component.css']
})
export class DragulaComponent implements OnInit {
  msg = '';

  numberTextEn = [
    'one',
    'two',
    'three',
    'four',
    'fife',
    'six'
  ];
  numberTextRus = [
    'один',
    'два',
    'три',
    'четыре',
    'пят',
    'шесть'
  ];


  constructor(private dragula: DragulaService) {
    // this.dragula.createGroup('bag-items', {
    //   revertOnSpill: true,
    // });
  }

  ngOnInit() {
    this.dragula
      .drag()
      .subscribe((value: any) => {
        value.el.style.border = '2px solid blue';
        this.msg = `Dragging the ${ value.el.innerText }!`;
      });

    this.dragula.dragend().subscribe((val: any) => {
        val.el.style.border = 'none';
    });
    this.dragula.drop().subscribe((value) => {
      this.msg = `Dropped the ${ value.el.textContent }!`;
      setTimeout(() => {
        this.msg = '';
      }, 2000);
    });
  }

  dicshinary(): object {
    let num: ArrNumber = {};
    let j = 0;
    for(let i=0; i < this.numberTextRus.length; i++){
      num[this.numberTextRus[i]] = this.numberTextEn[j];
      j++;
    }
    return num;
 }

}

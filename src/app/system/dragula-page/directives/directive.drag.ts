import {Directive, ElementRef, HostListener, Input, Renderer2} from '@angular/core';

@Directive({
  selector: '[app-Drag]'
})
export class DirectiveDrag {
  constructor(private render: Renderer2,
              private elem: ElementRef) {
  }
  @Input('app-Drag') couter: any;
  @HostListener('click') onClick() {
    let li = this.render.createElement('li') as HTMLElement;
    let text = this.render.createText('00');
    this.render.appendChild(li, text);
    this.render.addClass(li, 'bg-light');
    this.render.addClass(li, 'm-1');
    this.render.addClass(li, 'p-1');
    this.render.appendChild(this.elem.nativeElement, li);
  }

}

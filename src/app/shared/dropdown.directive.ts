import { Directive, HostBinding, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appDropdown]',
  exportAs: 'appDropDown',
})
export class DropdownDirective {
  private wasInside = false;

  @HostBinding('class.show') isShow: boolean = false;
  constructor() {}
  @HostListener('click') toggleShow() {
    this.isShow = !this.isShow;
    this.wasInside = true;
  }

  @HostListener('document:click') clickout() {
    if (!this.wasInside) {
      this.isShow = false;
    }
    this.wasInside = false;
  }
}

import { Directive, HostBinding, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appDropdown]',
  exportAs: 'appDropDown',
})
export class DropdownDirective {
  @HostBinding('class.show') isShow: boolean = false;
  constructor() {}
  @HostListener('click') toggleShow() {
    this.isShow = !this.isShow;
  }
}

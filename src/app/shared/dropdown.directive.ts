import { Directive, HostBinding, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appDropdown]',
  exportAs: "appDropDown"
})
export class DropdownDirective {
  @HostBinding('class.show') isOpen: boolean = false;
  constructor() {}
  @HostListener('click') toggleOpen() {
    this.isOpen = !this.isOpen;
  }
}

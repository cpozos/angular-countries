import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'shared-search-box',
  templateUrl: './search-box.component.html',
})
export class SearchBoxComponent {
  @Output()
  public onValue: EventEmitter<string> = new EventEmitter<string>();

  @Input()
  public placeholder: string = ''

  public value2: string = ''

  emitValue(value:string): void{
    this.onValue.emit(value);
  }
}

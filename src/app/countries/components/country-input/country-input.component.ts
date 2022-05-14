import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { debounceTime, Subject } from 'rxjs';

@Component({
  selector: 'app-country-input',
  templateUrl: './country-input.component.html',
  styles: []
})
export class CountryInputComponent implements OnInit {

  @Input() placeholder: string = '';

  @Output() onEnter: EventEmitter<string> = new EventEmitter();
  @Output() onDebounce: EventEmitter<string> = new EventEmitter();

  debouncer: Subject<string> = new Subject();
  queryTerm: string = '';

  ngOnInit(): void {
    this.debouncer
      .pipe(debounceTime(300))
      .subscribe(val => {
        this.onDebounce.emit(val);
      });
  }

  keyPressed(): void {
    this.debouncer.next(this.queryTerm);
  }

  search(): void {
    this.onEnter.emit(this.queryTerm);
  }

}

import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-date-picker',
  templateUrl: './date-picker.component.html',
  styleUrls: ['./date-picker.component.scss']
})
export class DatePickerComponent implements OnInit {

  @Input() selectedDate: string;
  @Output() dateChange: EventEmitter<string> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  onDateSelect(newDate) {
    this.dateChange.emit(newDate.value);
  }

}

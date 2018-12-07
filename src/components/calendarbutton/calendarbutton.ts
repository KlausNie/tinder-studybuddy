import { Component } from '@angular/core';

@Component({
  selector: 'calendarbutton',
  templateUrl: 'calendarbutton.html'
})
export class CalendarButtonComponent {

  private buttonColor: string = "danger";

  constructor() {

  }

  onClickCalendarButton() {
    if(this.buttonColor == "danger") {
      this.buttonColor = "secondary"; 
    }
    else {
      this.buttonColor = "danger";
    }
  }  
}

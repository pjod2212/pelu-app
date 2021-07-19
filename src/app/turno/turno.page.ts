import { Component, OnInit } from '@angular/core';
import { CalendarMode, Step } from 'ionic2-calendar/calendar';
import { ViewChild, Inject, LOCALE_ID } from '@angular/core';
import { AlertController, ModalController } from '@ionic/angular';
@Component({
  selector: 'app-turno',
  templateUrl: './turno.page.html',
  styleUrls: ['./turno.page.scss'],
})
export class TurnoPage implements OnInit {

  eventSource = [];
  viewTitle: string;
  isToday:boolean;
  calendar = {
    mode: 'month',
    step: 30 as Step,
    currentDate: new Date(),
  };

  constructor(
    private alertCtrl: AlertController,
    @Inject(LOCALE_ID) private locale: string) {}

  ngOnInit() {
  }

  onViewTitleChanged(title) {
    this.viewTitle = title;
  }

  onCurrentDateChanged(event:Date) {
    var today = new Date();
    today.setHours(0, 0, 0, 0);
    event.setHours(0, 0, 0, 0);
    this.isToday = today.getTime() === event.getTime();
}

  today() {
    this.calendar.currentDate = new Date();
  }

  onEventSelected(event) {
    console.log('Event selected:' + event.startTime + '-' + event.endTime + ',' + event.title);
  }

  onTimeSelected(ev) {
    console.log('Selected time: ' + ev.selectedTime + ', hasEvents: ' +
        (ev.events !== undefined && ev.events.length !== 0) + ', disabled: ' + ev.disabled);
  }

}

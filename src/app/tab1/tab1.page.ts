import { Component } from '@angular/core';
//import { CalendarComponent } from 'ionic2-calendar/calendar';
import { formatDate } from '@angular/common';
import { ViewChild, OnInit, Inject, LOCALE_ID } from '@angular/core';
import { AlertController, ModalController } from '@ionic/angular';
import { CalendarMode, Step } from 'ionic2-calendar/calendar';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  eventSource = [];
  viewTitle: string;
 
  calendar = {
    mode: 'month',
    step: 30 as Step,
    currentDate: new Date(),
  };
 
  selectedDate: Date;
 
  //@ViewChild(CalendarComponent) myCal: CalendarComponent;
  constructor(
    private alertCtrl: AlertController,
    @Inject(LOCALE_ID) private locale: string) {}

  
  // Change current month/week/day
  next() {
   // this.myCal.slideNext();
  }
 
  back() {
  //  this.myCal.slidePrev();
  }
 
  // Selected date reange and hence title changed
  onViewTitleChanged(title) {
    this.viewTitle = title;
  }

  // Calendar event was clicked
 /*  async onEventSelected(event) {
    // Use Angular date pipe for conversion
    let start = formatDate(event.startTime, 'medium', this.locale);
    let end = formatDate(event.endTime, 'medium', this.locale);
 
    const alert = await this.alertCtrl.create({
      header: event.title,
      subHeader: event.desc,
      message: 'From: ' + start + '<br><br>To: ' + end,
      buttons: ['OK'],
    });
    alert.present();
  }*/

  onEventSelected(event) {
    console.log('Event selected:' + event.startTime + '-' + event.endTime + ',' + event.title);
  }

  onTimeSelected(ev) {
    console.log('Selected time: ' + ev.selectedTime + ', hasEvents: ' +
        (ev.events !== undefined && ev.events.length !== 0) + ', disabled: ' + ev.disabled);
}

}

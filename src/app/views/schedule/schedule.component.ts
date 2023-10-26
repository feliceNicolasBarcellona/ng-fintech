import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChange, SimpleChanges } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSelectionListChange } from '@angular/material/list';
import { DayWithSlot, DayWithSlots } from 'src/app/models/location';
import { ScheduleConfirmComponent } from '../schedule-confirm/schedule-confirm.component';
import { MatDatepickerInputEvent } from '@angular/material/datepicker';

function dateToString(d: Date) {
  let month = '' + (d.getMonth() + 1);
  let day = '' + d.getDate();
  let year = d.getFullYear();

  if (month.length < 2) {
    month = '0' + month;
  }
  if (day.length < 2) {
    day = '0' + day;
  }
  return [month, day, year].join('/');
}

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.scss']
})
export class ScheduleComponent implements OnChanges {

  @Input() dayWithSlots: DayWithSlots[] = [];
  @Input() selectedLocationId: string | null = null;
  @Output() schedule = new EventEmitter<DayWithSlot>();

  selectedDay: string | null = null;
  filteredSlots: number[] = [];

  constructor(public dialog: MatDialog){}

  ngOnChanges(changes: SimpleChanges) {
    if(!changes['currentValue']){
      this.selectedDay = null
    }

  }

  calendarFilter = (d: Date | null): boolean => {
    if (!this.selectedLocationId) {
      return true;
    }

    const matchedSlots = this.dayWithSlots.filter(
      (slot) => slot._id === this.selectedLocationId
    );

    const availableDates = matchedSlots.map((slot) => new Date(slot.day));

    if (d) {
      const selectedDate = dateToString(d);
      return availableDates.some(
        (date) => dateToString(date) === selectedDate
      );
    }

    return false;
  };


  filterSlots() {
    console.log(this.dayWithSlots, 'filterSlots');
    console.log(this.selectedLocationId, 'locationID');
    console.log(this.selectedDay, 'day');


    if (this.selectedLocationId && this.selectedDay) {
      const matchedSlots = this.dayWithSlots.find(
        (slot) =>
          slot._id === this.selectedLocationId && slot.day === this.selectedDay
      );
      console.log(matchedSlots);

      this.filteredSlots = matchedSlots ? matchedSlots.slots : [];
      console.log(this.filteredSlots, 'here');
    } else {
      this.filteredSlots = [];
    }
  }


  onDateChange(event: MatDatepickerInputEvent<any>) {
    this.selectedDay = dateToString(event.value);
    this.filterSlots();
  }

  onSelectionChange(e: MatSelectionListChange): void {
    const confirmDialog = this.dialog.open(ScheduleConfirmComponent, {
      data: {
        day: this.selectedDay,
        time: e.source.selectedOptions.selected[0].value,
      }
    })

    confirmDialog.afterClosed().subscribe((confirm) => {
      if (confirm) {
        const selectedSlot: DayWithSlot = {
          day: this.selectedDay as string,
          slot: e.source.selectedOptions.selected[0].value
        };
        this.schedule.emit(selectedSlot);
      }
    });

  }

}

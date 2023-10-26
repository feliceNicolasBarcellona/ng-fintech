import { Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { DayWithSlot, DayWithSlots, Location } from 'src/app/models/location';
import { MatDrawer } from '@angular/material/sidenav';
import { MatSnackBar } from '@angular/material/snack-bar';



@Component({
  selector: 'app-appointments',
  templateUrl: './appointments.component.html',
  styleUrls: ['./appointments.component.scss'],
})
export class AppointmentsComponent   {

  @ViewChild(MatDrawer, {static: false}) drawer!: MatDrawer;

  selectedLocationId: string | null = '1';

  locations: Location[] = [
    {
      _id: '1',
      name: 'Sede 1',
      address: 'Via dei Tali 1, Roma',
      phone: '',
      email: '',
      coords: [123, 123],
    },
    {
      _id: '2',
      name: 'Sede 2',
      address: 'Via dei Tali 2, Roma',
      phone: '',
      email: '',
      coords: [123, 123],
    },
  ];

  dayWithSlots: DayWithSlots[] = [
    { _id: '1', day: '10/22/2023', slots: [10, 12, 13] },
    { _id: '1', day: '10/23/2023', slots: [13, 14, 15] },
    { _id: '1', day: '10/24/2023', slots: [10, 14, 16] },
    { _id: '1', day: '10/25/2023', slots: [9, 15] },
    { _id: '2', day: '11/22/2023', slots: [10, 11, 12] },
    { _id: '2', day: '11/23/2023', slots: [13, 14, 15] },
    { _id: '2', day: '11/24/2023', slots: [14, 16] },
    { _id: '2', day: '11/25/2023', slots: [9, 15] },
  ];

  constructor(private snackBar: MatSnackBar){}

  getLocationId(event: Location) {
    console.log(event, 'prima');
    this.selectedLocationId = event._id;
    this.drawer.open();
    console.log(this.selectedLocationId, 'dopo');

  }

  onSchedule(s: DayWithSlot){
    console.log(s, 'pippo');
    this.drawer.close()
    this.snackBar.open('appointment confirmed');
  }

}

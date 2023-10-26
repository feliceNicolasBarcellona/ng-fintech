import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Location } from 'src/app/models/location';

@Component({
  selector: 'app-location-list',
  templateUrl: './location-list.component.html',
  styleUrls: ['./location-list.component.scss']
})
export class LocationListComponent {

  @Input() locations: Location[] = []
  @Output() selectedLocation: EventEmitter<Location> = new EventEmitter()

}

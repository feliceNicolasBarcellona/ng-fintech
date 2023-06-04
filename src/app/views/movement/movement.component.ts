import { Component } from '@angular/core';
import { Movement } from 'src/app/models/movement';


@Component({
  selector: 'app-movement',
  templateUrl: './movement.component.html',
  styleUrls: ['./movement.component.scss']
})
export class MovementComponent {
  panelOpenState: boolean = false;

  movements: Movement[] = [

    {
      _id: '1',
      type: 'out' ,
      amount: 35,
      title: 'Lorem Ipsum',
      description: 'Lorem ipsum dolor sit amet',
      cardId: '4cb9292a-5a36-453b-85a3-1750597f7603',
      timestamp: +new Date()
    },
    {
      _id: '2',
      type: 'out' ,
      amount: 80,
      title: 'Lorem Ipsum',
      description: 'Lorem ipsum dolor sit amet',
      cardId: '4cb9292a-5a36-453b-85a3-1750597f7603',
      timestamp: +new Date()
    },
    {
      _id: '3',
      type: 'in' ,
      amount: 1000,
      title: 'Lorem Ipsum',
      description: 'Lorem ipsum dolor sit amet',
      cardId: '4cb9292a-5a36-453b-85a3-1750597f7603',
      timestamp: +new Date()
    },
    {
      _id: '4',
      type: 'out' ,
      amount: 40,
      title: 'Lorem Ipsum',
      description: 'Lorem ipsum dolor sit amet',
      cardId: '4cb9292a-5a36-453b-85a3-1750597f7603',
      timestamp: +new Date()
    },
    {
      _id: '5',
      type: 'in' ,
      amount: 200,
      title: 'Lorem Ipsum',
      description: 'Lorem ipsum dolor sit amet',
      cardId: '4cb9292a-5a36-453b-85a3-1750597f7603',
      timestamp: +new Date()
    },
    {
      _id: '6',
      type: 'out' ,
      amount: 5,
      title: 'Lorem Ipsum',
      description: 'Lorem ipsum dolor sit amet',
      cardId: '4cb9292a-5a36-453b-85a3-1750597f7603',
      timestamp: +new Date()
    },
    {
      _id: '7',
      type: 'out' ,
      amount: 55,
      title: 'Lorem Ipsum',
      description: 'Lorem ipsum dolor sit amet',
      cardId: '4cb9292a-5a36-453b-85a3-1750597f7603',
      timestamp: +new Date()
    },
    {
      _id: '8',
      type: 'out' ,
      amount: 5,
      title: 'Lorem Ipsum',
      description: 'Lorem ipsum dolor sit amet',
      cardId: '4cb9292a-5a36-453b-85a3-1750597f7603',
      timestamp: +new Date()
    },
    {
      _id: '9',
      type: 'out' ,
      amount: 0.80,
      title: 'Lorem Ipsum',
      description: 'Lorem ipsum dolor sit amet',
      cardId: '4cb9292a-5a36-453b-85a3-1750597f7603',
      timestamp: +new Date()
    },
    {
      _id: '10',
      type: 'out' ,
      amount: 65,
      title: 'Lorem Ipsum',
      description: 'Lorem ipsum dolor sit amet',
      cardId: '4cb9292a-5a36-453b-85a3-1750597f7603',
      timestamp: +new Date()
    },
    {
      _id: '11',
      type: 'out' ,
      amount: 65,
      title: 'Lorem Ipsum',
      description: 'Lorem ipsum dolor sit amet',
      cardId: '4cb9292a-5a36-453b-85a3-1750597f7603',
      timestamp: +new Date()
    },
    {
      _id: '12',
      type: 'out' ,
      amount: 65,
      title: 'Lorem Ipsum',
      description: 'Lorem ipsum dolor sit amet',
      cardId: '4cb9292a-5a36-453b-85a3-1750597f7603',
      timestamp: +new Date()
    },
    {
      _id: '13',
      type: 'in' ,
      amount: 50,
      title: 'Lorem Ipsum',
      description: 'Lorem ipsum dolor sit amet',
      cardId: '4cb9292a-5a36-453b-85a3-1750597f7603',
      timestamp: +new Date()
    },
    {
      _id: '14',
      type: 'in' ,
      amount: 70,
      title: 'Lorem Ipsum',
      description: 'Lorem ipsum dolor sit amet',
      cardId: '4cb9292a-5a36-453b-85a3-1750597f7603',
      timestamp: +new Date()
    },
    {
      _id: '15',
      type: 'out' ,
      amount: 65,
      title: 'Lorem Ipsum',
      description: 'Lorem ipsum dolor sit amet',
      cardId: '4cb9292a-5a36-453b-85a3-1750597f7603',
      timestamp: +new Date()
    },
    {
      _id: '16',
      type: 'out' ,
      amount: 150,
      title: 'Lorem Ipsum',
      description: 'Lorem ipsum dolor sit amet',
      cardId: '4cb9292a-5a36-453b-85a3-1750597f7603',
      timestamp: +new Date()
    },
    {
      _id: '17',
      type: 'in' ,
      amount: 65,
      title: 'Lorem Ipsum',
      description: 'Lorem ipsum dolor sit amet',
      cardId: '4cb9292a-5a36-453b-85a3-1750597f7603',
      timestamp: +new Date()
    },
    {
      _id: '18',
      type: 'out' ,
      amount: 12,
      title: 'Lorem Ipsum',
      description: 'Lorem ipsum dolor sit amet',
      cardId: '4cb9292a-5a36-453b-85a3-1750597f7603',
      timestamp: +new Date()
    },
    {
      _id: '19',
      type: 'out' ,
      amount: 5,
      title: 'Lorem Ipsum',
      description: 'Lorem ipsum dolor sit amet',
      cardId: '4cb9292a-5a36-453b-85a3-1750597f7603',
      timestamp: +new Date()
    },
    {
      _id: '20',
      type: 'out' ,
      amount: 15,
      title: 'Lorem Ipsum',
      description: 'Lorem ipsum dolor sit amet',
      cardId: '4cb9292a-5a36-453b-85a3-1750597f7603',
      timestamp: +new Date()
    },
    {
      _id: '21',
      type: 'in' ,
      amount: 105,
      title: 'Lorem Ipsum',
      description: 'Lorem ipsum dolor sit amet',
      cardId: '4cb9292a-5a36-453b-85a3-1750597f7603',
      timestamp: +new Date()
    },

    {
      _id: '1',
      type: 'out' ,
      amount: 1005,
      title: 'Lorem Ipsum',
      description: 'Lorem ipsum dolor sit amet',
      cardId: '4eaccf5b-d6b7-4630-9859-c9bbebffa095',
      timestamp: +new Date()
    },
    {
      _id: '2',
      type: 'out' ,
      amount: 800,
      title: 'Lorem Ipsum',
      description: 'Lorem ipsum dolor sit amet',
      cardId: '4eaccf5b-d6b7-4630-9859-c9bbebffa095',
      timestamp: +new Date()
    },
    {
      _id: '3',
      type: 'in' ,
      amount: 10000,
      title: 'Lorem Ipsum',
      description: 'Lorem ipsum dolor sit amet',
      cardId: '4eaccf5b-d6b7-4630-9859-c9bbebffa095',
      timestamp: +new Date()
    },
    {
      _id: '4',
      type: 'out' ,
      amount: 4,
      title: 'Lorem Ipsum',
      description: 'Lorem ipsum dolor sit amet',
      cardId: '4eaccf5b-d6b7-4630-9859-c9bbebffa095',
      timestamp: +new Date()
    },
    {
      _id: '5',
      type: 'in' ,
      amount: 20,
      title: 'Lorem Ipsum',
      description: 'Lorem ipsum dolor sit amet',
      cardId: '4eaccf5b-d6b7-4630-9859-c9bbebffa095',
      timestamp: +new Date()
    },
    {
      _id: '6',
      type: 'out' ,
      amount: 5,
      title: 'Lorem Ipsum',
      description: 'Lorem ipsum dolor sit amet',
      cardId: '4eaccf5b-d6b7-4630-9859-c9bbebffa095',
      timestamp: +new Date()
    },
    {
      _id: '7',
      type: 'out' ,
      amount: 55,
      title: 'Lorem Ipsum',
      description: 'Lorem ipsum dolor sit amet',
      cardId: '4eaccf5b-d6b7-4630-9859-c9bbebffa095',
      timestamp: +new Date()
    },
    {
      _id: '8',
      type: 'out' ,
      amount: 5,
      title: 'Lorem Ipsum',
      description: 'Lorem ipsum dolor sit amet',
      cardId: '4eaccf5b-d6b7-4630-9859-c9bbebffa095',
      timestamp: +new Date()
    },
    {
      _id: '9',
      type: 'out' ,
      amount: 0.80,
      title: 'Lorem Ipsum',
      description: 'Lorem ipsum dolor sit amet',
      cardId: '4eaccf5b-d6b7-4630-9859-c9bbebffa095',
      timestamp: +new Date()
    },
    {
      _id: '10',
      type: 'out' ,
      amount: 65,
      title: 'Lorem Ipsum',
      description: 'Lorem ipsum dolor sit amet',
      cardId: '4eaccf5b-d6b7-4630-9859-c9bbebffa095',
      timestamp: +new Date()
    },
    {
      _id: '11',
      type: 'out' ,
      amount: 65,
      title: 'Lorem Ipsum',
      description: 'Lorem ipsum dolor sit amet',
      cardId: '4eaccf5b-d6b7-4630-9859-c9bbebffa095',
      timestamp: +new Date()
    },
    {
      _id: '12',
      type: 'out' ,
      amount: 65,
      title: 'Lorem Ipsum',
      description: 'Lorem ipsum dolor sit amet',
      cardId: '4eaccf5b-d6b7-4630-9859-c9bbebffa095',
      timestamp: +new Date()
    },
    {
      _id: '13',
      type: 'in' ,
      amount: 50,
      title: 'Lorem Ipsum',
      description: 'Lorem ipsum dolor sit amet',
      cardId: '4eaccf5b-d6b7-4630-9859-c9bbebffa095',
      timestamp: +new Date()
    },
    {
      _id: '14',
      type: 'in' ,
      amount: 70,
      title: 'Lorem Ipsum',
      description: 'Lorem ipsum dolor sit amet',
      cardId: '4eaccf5b-d6b7-4630-9859-c9bbebffa095',
      timestamp: +new Date()
    },
    {
      _id: '15',
      type: 'out' ,
      amount: 65,
      title: 'Lorem Ipsum',
      description: 'Lorem ipsum dolor sit amet',
      cardId: '4eaccf5b-d6b7-4630-9859-c9bbebffa095',
      timestamp: +new Date()
    },
    {
      _id: '16',
      type: 'out' ,
      amount: 150,
      title: 'Lorem Ipsum',
      description: 'Lorem ipsum dolor sit amet',
      cardId: '4eaccf5b-d6b7-4630-9859-c9bbebffa095',
      timestamp: +new Date()
    },
    {
      _id: '17',
      type: 'in' ,
      amount: 650000,
      title: 'Lorem Ipsum',
      description: 'Lorem ipsum dolor sit amet',
      cardId: '4eaccf5b-d6b7-4630-9859-c9bbebffa095',
      timestamp: +new Date()
    },
    {
      _id: '18',
      type: 'out' ,
      amount: 12,
      title: 'Lorem Ipsum',
      description: 'Lorem ipsum dolor sit amet',
      cardId: '4eaccf5b-d6b7-4630-9859-c9bbebffa095',
      timestamp: +new Date()
    },
    {
      _id: '19',
      type: 'out' ,
      amount: 5,
      title: 'Lorem Ipsum',
      description: 'Lorem ipsum dolor sit amet',
      cardId: '4eaccf5b-d6b7-4630-9859-c9bbebffa095',
      timestamp: +new Date()
    },
    {
      _id: '20',
      type: 'out' ,
      amount: 5000,
      title: 'Lorem Ipsum',
      description: 'Lorem ipsum dolor sit amet',
      cardId: '4eaccf5b-d6b7-4630-9859-c9bbebffa095',
      timestamp: +new Date()
    },
    {
      _id: '21',
      type: 'in' ,
      amount: 100000,
      title: 'Lorem Ipsum',
      description: 'Lorem ipsum dolor sit amet',
      cardId: '4eaccf5b-d6b7-4630-9859-c9bbebffa095',
      timestamp: +new Date()
    },

  ]


}

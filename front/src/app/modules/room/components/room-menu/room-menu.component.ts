import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-room-menu',
  templateUrl: './room-menu.component.html',
  styleUrls: ['./room-menu.component.scss']
})
export class RoomMenuComponent implements OnInit {

  menu: Array<any> = [
    {
      name: 'Muted',
      icon: 'uil uil-microphone'
    },
    {
      name: 'Home',
      icon: 'uil uil-estate'
    },
    {
      name: 'Share',
      icon: 'uil uil-share'
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}

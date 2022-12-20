import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-video-player',
  templateUrl: './room-video-player.component.html',
  styleUrls: ['./room-video-player.component.scss']
})
export class RoomVideoPlayerComponent implements OnInit {

  @Input() stream: any;

  constructor() { }

  ngOnInit(): void {}

}

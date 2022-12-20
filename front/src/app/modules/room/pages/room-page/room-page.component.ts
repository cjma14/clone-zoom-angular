import { Component, OnInit } from '@angular/core';
import { MessagesConsoleService } from '../../../../shared/services/messages-console/messages-console.service';

@Component({
  selector: 'app-room-page',
  templateUrl: './room-page.component.html',
  styleUrls: ['./room-page.component.scss']
})
export class RoomPageComponent implements OnInit {


  currentStream: MediaStream | null = null;

  listUser: Array<any> = []

  constructor(
    private _console: MessagesConsoleService
  ) { }

  get thereAreMediaDevices() {
    return Boolean(navigator?.mediaDevices)
  }

  ngOnInit(): void {
    this.getAccesUserMedia();
  }

  getAccesUserMedia() {

    if (!this.thereAreMediaDevices) {
      this._console.error("No se dectectaron dispositivos")
      return;
    }

    navigator.mediaDevices.getUserMedia({
      audio: true,
      video: true
    }).then((stream) => {

      this.currentStream = stream;
      this.addUser(stream);

    }).catch((e) => {
      console.error(e);
    })

  }

  addUser(stream: MediaStream): void {

    this.listUser.push(stream);

  }

}

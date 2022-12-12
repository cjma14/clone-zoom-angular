import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoomVideoPlayerComponent } from './room-video-player.component';

describe('RoomVideoPlayerComponent', () => {
  let component: RoomVideoPlayerComponent;
  let fixture: ComponentFixture<RoomVideoPlayerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RoomVideoPlayerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RoomVideoPlayerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

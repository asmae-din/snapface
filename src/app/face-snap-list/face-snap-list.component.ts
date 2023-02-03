import { Component, OnDestroy, OnInit } from '@angular/core';
import { interval, Observable, observable, Subject, takeUntil, tap } from 'rxjs';
import { FaceSnap } from '../models/face-snap.model';
import { FaceSnapsService } from '../services/face-snaps.service';
@Component({
  selector: 'app-face-snap-list',
  templateUrl: './face-snap-list.component.html',
  styleUrls: ['./face-snap-list.component.scss']
})
export class FaceSnapListComponent implements OnInit {

  faceSnapsArr!:FaceSnap[];
  faceSnaps$!:Observable<FaceSnap[]>;   

  constructor( private faceSnapsServices:FaceSnapsService) {};
  ngOnInit(): void{
    this.faceSnaps$=this.faceSnapsServices.getAllFaceSnaps();
   
  }
  
}

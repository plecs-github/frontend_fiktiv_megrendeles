import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Mask } from '../model/mask';
import { MaskService } from '../service/mask.service';

@Component({
  selector: 'app-masks',
  templateUrl: './masks.component.html',
  styleUrls: ['./masks.component.scss']
})


export class MasksComponent implements OnInit {
  mask: Mask = new Mask();
  maskList$: BehaviorSubject<Mask[]> = this.mService.list$;
  constructor(private mService: MaskService) { }
  ngOnInit(): void {
  }
}

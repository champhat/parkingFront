import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ParkingService } from '../parking.service';
import { ParkingInfo } from '../parkingInfo';

@Component({
  selector: 'app-parking-detail',
  templateUrl: './parking-detail.component.html',
  styleUrls: ['./parking-detail.component.scss'],
})
export class ParkingDetailComponent implements OnInit {
  parking: ParkingInfo = {} as ParkingInfo;
  isLoaded: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private ParkingService: ParkingService
  ) {}

  ngOnInit(): void {
    const parkingId = parseInt(this.route.snapshot.paramMap.get('id') || '{}');
    this.ParkingService.getParking(parkingId).subscribe((response) => {
      this.parking = response;
      this.isLoaded = true;
    });
  }
}

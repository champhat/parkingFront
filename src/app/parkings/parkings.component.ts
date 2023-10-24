import { Component, OnInit } from '@angular/core';
import {ParkingService} from '../parking.service';
import { ParkingInfo } from '../parkingInfo';

@Component({
  selector: 'app-parkings',
  templateUrl: './parkings.component.html',
  styleUrls: ['./parkings.component.scss']
})
export class ParkingsComponent implements OnInit {
  isLoaded: boolean = false;
  parkings: ParkingInfo[]=[];

  constructor(private parkingService:ParkingService) { }

  ngOnInit(): void {
   this.parkingService.getParkings().subscribe( response => {
     this.parkings=response;
     this.isLoaded=true;
   });
  }

  calculStyleStatut(parking:ParkingInfo){
    if(parking.statut==="ouvert"){
      return {color:'green'}
    }else if (parking.statut==="reservé abonnés"){
      return {color:'orange'}
    }else if (parking.statut==="fermé"){
      return {color:'rouge'}
    }else{
      return {'font-style':'italic'}
    }
  }
}

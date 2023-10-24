import { Injectable } from '@angular/core';
import { ParkingInfo } from './parkingInfo';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class ParkingService {
  constructor(private HttpClient: HttpClient) {}

  getParkings(): Observable<ParkingInfo[]> {
    return this.HttpClient.get<ParkingInfo[]>(environment.apiUrl + '/parkings');
  }

  getParking(id: number): Observable<ParkingInfo> {
    return this.HttpClient.get<ParkingInfo[]>(
      environment.apiUrl + '/parkings'
    ).pipe(
      map((parkings) => parkings.find((parking) => parking.identifiant === id)!)
    );
  }
}

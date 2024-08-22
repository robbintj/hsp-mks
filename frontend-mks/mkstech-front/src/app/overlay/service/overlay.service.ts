import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Overlay } from '../model/overlay.model';

@Injectable({
  providedIn: 'root'
})
export class OverlayService {

  // private apiUrl = 'http://localhost:8080/api/overlay';  
  private apiUrl = 'http://ec2-3-144-199-231.us-east-2.compute.amazonaws.com:8080/api/overlay';


  constructor(private http: HttpClient) { }

  getOverlays(): Observable<Overlay[]> {
    return this.http.get<Overlay[]>(this.apiUrl);
  }

  getOverlay(id: number): Observable<Overlay> {
    return this.http.get<Overlay>(`${this.apiUrl}/${id}`);
  }

  createOverlay(overlay: Overlay): Observable<Overlay> {
    return this.http.post<Overlay>(this.apiUrl, overlay);
  }

  updateOverlay(id: number, overlay: Overlay): Observable<Overlay> {
    return this.http.put<Overlay>(`${this.apiUrl}/${id}`, overlay);
  }

  deleteOverlay(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}

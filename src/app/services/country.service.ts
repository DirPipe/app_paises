import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root' 
})
export class CountryService {
  private apiUrl = 'https://restcountries.com/v3.1/all'; // URL 

  constructor(private http: HttpClient) { }

  // Obtiene la lista de todos los países desde la API
  getCountries(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }
}


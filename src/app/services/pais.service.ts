//
//
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from "rxjs";

import { Pais } from './pais.interface';

//
//
@Injectable({
                providedIn: 'root'
})

//
//
export class PaisService {

    //
    private paises: Pais[];
    private paisesUrl = "https://restcountries.eu/rest/v2/all"            // todos los paises

    constructor(private http: HttpClient) { }

    //
    public getPaises(): Observable<Pais[]> {
        return this.http.get<Pais[]>(this.paisesUrl);
    }
}

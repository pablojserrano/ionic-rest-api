//
//
import { Component, OnInit, Input } from '@angular/core';

import { Pais } from '../services/pais.interface';
import { PaisService } from '../services/pais.service';

//
//
@Component({
                selector:       'app-tab1',
                templateUrl:    'tab1.page.html',
                styleUrls:      ['tab1.page.scss']
            })

//
//
export class Tab1Page implements OnInit {

    //
    @Input() paises: Pais[] = [];

    //
    constructor(public paisService: PaisService) { }

    //
    ngOnInit(): void {
        this.paisService.getPaises().subscribe(paises => (this.paises = paises));   
    }
}

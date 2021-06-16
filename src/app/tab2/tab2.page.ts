//
//
import { Component, OnInit, Input } from '@angular/core';

import { Pais } from '../services/pais.interface';
import { PaisService } from '../services/pais.service';

//
//
@Component({
                selector:       'app-tab2',
                templateUrl:    'tab2.page.html',
                styleUrls:      ['tab2.page.scss']
})

//
//
export class Tab2Page {
    //
    @Input() paises: Pais[] = [];

    //
    constructor(public paisService: PaisService) { }

    //
    ngOnInit(): void {
        this.paisService.getPaises().subscribe(paises => (this.paises = paises));
    }
}

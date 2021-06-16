//
//
import { Component, OnInit, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { Pais } from '../services/pais.interface';
import { PaisService } from '../services/pais.service';

//
//
@Component({
                selector:       'app-tab3',
                templateUrl:    'tab3.page.html',
                styleUrls:      ['tab3.page.scss']
})

//
//
export class Tab3Page {

    //
    @Input() paises: Pais[] = [];

    modoOscuro: boolean = true;

    //
    constructor(public paisService: PaisService) {
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)');
        this.modoOscuro = prefersDark.matches;
     }

    //
    ngOnInit(): void {
        this.paisService.getPaises().subscribe(paises => (this.paises = paises)); }

    //
    AlternarModoOscuro() {
        this.modoOscuro = !this.modoOscuro;
        document.body.classList.toggle('dark');
    }
}



import { Component } from '@angular/core';

@Component({
  selector: 'app-komponentti',
  templateUrl: './komponentti.component.html',
  styleUrls: ['./komponentti.component.css']
})
export class KomponenttiComponent {
    komponenttiTitle: string;

    constructor() {
      this.komponenttiTitle = "Ensimmäinen harjoitus";
    }
}

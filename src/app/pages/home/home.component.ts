import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent {
  status = true

  nombre:string = ''

  names: string[]=['enrique', 'gerardo', 'ausiano']

  dia: string=''

}

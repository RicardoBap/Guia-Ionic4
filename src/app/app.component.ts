import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {

  public paginas = [
    { titulo:'Home',  url:'home', icone: 'home' },
    { titulo:'Instalação', url:'instalacao', icone:'arrow-forward-circle' },
    { titulo:'Layout', url:'layout', icone:'arrow-forward-circle' }
  ]
  
  constructor() {}
}

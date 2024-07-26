import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from "./pages/shared/footer/footer.component";
import { HeaderComponent } from './components/shared/header/header.component';

@Component({
  selector: 'app-root',
  standalone: true,   //esto es para llamr componentes
  imports: [RouterOutlet, FooterComponent, HeaderComponent],  // aqui se hacen los import
  templateUrl: './app.component.html', 
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'UtnApp';
  nombre=  'Nidia';// ejemplo
  edad:number=20;  // ejemplo de variable nuemrica

}

//
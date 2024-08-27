import { Component } from '@angular/core';
import { HeaderComponent } from './components/header/header.component';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from "./components/footer/footer.component";
import { CadastroComponent } from "./cadastro/cadastro.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  standalone: true,
  imports: [HeaderComponent, FooterComponent, CadastroComponent]
})
export class AppComponent {
  title = 'login-cadastro-dymi';
}

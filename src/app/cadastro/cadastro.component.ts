import { Component } from '@angular/core';
import { InfoPessoalComponent } from "./info-pessoal/info-pessoal.component";

@Component({
  selector: 'app-cadastro',
  standalone: true,
  imports: [InfoPessoalComponent],
  templateUrl: './cadastro.component.html',
  styleUrl: './cadastro.component.scss'
})
export class CadastroComponent {

}

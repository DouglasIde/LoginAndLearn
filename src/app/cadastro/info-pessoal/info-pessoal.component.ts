import { Component } from '@angular/core';

@Component({
  selector: 'app-info-pessoal',
  standalone: true,
  imports: [],
  templateUrl: './info-pessoal.component.html',
  styleUrl: './info-pessoal.component.scss'
})

export class InfoPessoalComponent {

nome: string = '';
cpf: string = '';

}

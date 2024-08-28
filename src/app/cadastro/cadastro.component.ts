import { Component } from '@angular/core';
import { InfoPessoalComponent } from "./info-pessoal/info-pessoal.component";
import { StepperComponent } from "../stepper/stepper.component";
import { CdkStepperModule } from '@angular/cdk/stepper';

@Component({
  selector: 'app-cadastro',
  standalone: true,
  imports: [InfoPessoalComponent, StepperComponent, CdkStepperModule],
  templateUrl: './cadastro.component.html',
  styleUrl: './cadastro.component.scss'
})
export class CadastroComponent {

}

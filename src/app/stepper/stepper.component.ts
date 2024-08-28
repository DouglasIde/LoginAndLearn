import { CommonModule } from '@angular/common';
import { Component, Input, NgModule } from '@angular/core';
import { CdkStepper } from '@angular/cdk/stepper';

@Component({
  selector: 'app-stepper',
  standalone: true,
  imports: [],
  templateUrl: './stepper.component.html',
  styleUrl: './stepper.component.scss'
})
export class StepperComponent extends CdkStepper {
  @Input() linearModeSelected = true;

  onClick(index: number){
    this.selectedIndex = index;
  }
}

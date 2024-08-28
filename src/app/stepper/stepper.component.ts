import { CommonModule } from '@angular/common';
import { Component, Input, NgModule } from '@angular/core';
import { CdkStepper, CdkStepperModule } from '@angular/cdk/stepper';

@Component({
  selector: 'app-stepper',
  standalone: true,
  imports: [CommonModule, CdkStepperModule],
  templateUrl: './stepper.component.html',
  styleUrl: './stepper.component.scss',
  providers: [{provide: CdkStepper, useExisting: StepperComponent}]
})
export class StepperComponent extends CdkStepper {
  @Input() linearModeSelected = true;

  onClick(index: number){
    this.selectedIndex = index;
  }
}

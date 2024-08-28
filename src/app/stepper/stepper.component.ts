import { CommonModule } from '@angular/common';
import { Component, Input, NgModule, QueryList, TemplateRef, ViewChildren } from '@angular/core';
import { CdkStep, CdkStepper, CdkStepperModule } from '@angular/cdk/stepper';

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

  // @ViewChildren(CdkStep) steps!: QueryList<CdkStep>;

  onClick(index: number){
    this.selectedIndex = index;
  }

  get stepsItems(){
    return this.steps.toArray();
  }

  getStepContent(index: number): TemplateRef<any> | null{
    const step = this.stepsItems[index];
    return step ? step.content : null;
  }
}

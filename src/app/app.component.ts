import { Component, ViewChild, AfterViewInit, ChangeDetectorRef, NgZone } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { MatStepper, MatStepperModule } from '@angular/material/stepper';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatDatepickerModule } from '@angular/material/datepicker';
import {
  FormGroup,
  FormBuilder,
  Validators,
  ReactiveFormsModule,
} from '@angular/forms';
import { animate, state, style, transition, trigger } from '@angular/animations';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    MatButtonModule,
    MatStepperModule,
    MatCardModule,
    MatInputModule,
    MatDatepickerModule,
    ReactiveFormsModule,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  animations: [
    trigger('fadeIn', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('0.5s 2s ease-out', style({ opacity: 1 }))
      ])
    ]),
    trigger('slideIn', [
      transition(':enter', [
        style({ transform: 'translateX(-100%)' }),
        animate('0.5s 4s ease-out', style({ transform: 'translateX(0)' }))
      ])
    ]),
    trigger('expandCollapse', [
      state('collapsed', style({ height: '0px', overflow: 'hidden' })),
      state('expanded', style({ height: '*', overflow: 'auto' })),
      transition('collapsed <=> expanded', animate('0.5s 6s ease-in-out'))
    ]),
    trigger('rotateFadeIn', [
      transition(':enter', [
        style({ transform: 'rotate(-90deg)', opacity: 0 }),
        animate('0.5s 8s cubic-bezier(0.68, -0.55, 0.27, 1.55)', 
          style({ transform: 'rotate(0)', opacity: 1 }))
      ])
    ]),    
    trigger('zoomIn', [
      transition(':enter', [
        style({ transform: 'scale(0.5)', opacity: 0 }),
        animate('0.5s 10s ease-in', style({ transform: 'scale(1)', opacity: 1 }))
      ])
    ]),    
  ]
})
export class AppComponent implements AfterViewInit{
  @ViewChild('stepper')
  stepper!: MatStepper;
  title = 'mat-app-demo';

  // Define form groups for each step
  firstStepFirstCardFormGroup!: FormGroup;
  firstStepSecondCardFormGroup!: FormGroup;
  secondStepFirstCardFormGroup!: FormGroup;
  secondStepSecondCardFormGroup!: FormGroup;
  thirdStepFirstCardFormGroup!: FormGroup;
  thirdStepSecondCardFormGroup!: FormGroup;
  fourthStepFirstCardFormGroup!: FormGroup;
  fourthStepSecondCardFormGroup!: FormGroup;
  fifthStepFirstCardFormGroup!: FormGroup;
  fifthStepSecondCardFormGroup!: FormGroup;

  constructor(private _formBuilder: FormBuilder, private cdr: ChangeDetectorRef, private ngZone: NgZone) {}

  ngAfterViewInit() {
    this.initialize();
  }
 
  initialize() {
    this.stepper.steps.forEach((step) => {
      step.completed = false;
    });
  }

  ngOnInit() {
    // Initialize form groups with form controls
    this.firstStepFirstCardFormGroup = this._formBuilder.group({
      firstStepFirstCardFirstCtrl: ['', Validators.required],
      firstStepFirstCardSecondCtrl: ['', Validators.required],
    });
    this.firstStepSecondCardFormGroup = this._formBuilder.group({
      firstStepSecondCardFirstCtrl: ['', Validators.required],
      firstStepSecondCardSecondCtrl: ['', Validators.required],
    });
    this.secondStepFirstCardFormGroup = this._formBuilder.group({
      secondStepFirstCardFirstCtrl: ['', Validators.required],
      secondStepFirstCardSecondCtrl: ['', Validators.required],
    });
    this.secondStepSecondCardFormGroup = this._formBuilder.group({
      secondStepSecondCardFirstCtrl: ['', Validators.required],
      secondStepSecondCardSecondCtrl: ['', Validators.required],
    });
    this.thirdStepFirstCardFormGroup = this._formBuilder.group({
      thirdStepFirstCardFirstCtrl: ['', Validators.required],
      thirdStepFirstCardSecondCtrl: ['', Validators.required],
    });
    this.thirdStepSecondCardFormGroup = this._formBuilder.group({
      thirdStepSecondCardFirstCtrl: ['', Validators.required],
      thirdStepSecondCardSecondCtrl: ['', Validators.required],
    });
    this.fourthStepFirstCardFormGroup = this._formBuilder.group({
      fourthStepFirstCardFirstCtrl: ['', Validators.required],
      fourthStepFirstCardSecondCtrl: ['', Validators.required],
    });
    this.fourthStepSecondCardFormGroup = this._formBuilder.group({
      fourthStepSecondCardFirstCtrl: ['', Validators.required],
      fourthStepSecondCardSecondCtrl: ['', Validators.required],
    });
    this.fifthStepFirstCardFormGroup = this._formBuilder.group({
      fifthStepFirstCardFirstCtrl: ['', Validators.required],
      fifthStepFirstCardSecondCtrl: ['', Validators.required],
    });
    this.fifthStepSecondCardFormGroup = this._formBuilder.group({
      fifthStepSecondCardFirstCtrl: ['', Validators.required],
      fifthStepSecondCardSecondCtrl: ['', Validators.required],
    });
  }

  // goToNextStep() {
  //   console.log('Current Step before next:', this.stepper.selectedIndex);
  //   if (this.isCurrentStepValid()) {
  //     console.log('form is valid for this step');
  //     this.ngZone.run(() => {
  //       this.stepper.next();
  //       console.log('Current Step after next:', this.stepper.selectedIndex);
  //     });
  //   }
  //  }
  
  goToNextStep() {
    console.log('Current Step before next:', this.stepper?.selectedIndex);
    if (this.isCurrentStepValid()) {
    console.log('form is valid for this step');
    if (this.stepper?.selected) {
      this.stepper.selected.completed = true;
      this.stepper.next();
    }
    console.log('Current Step after next:', this.stepper?.selectedIndex);
    }
   }
   
   
   

  isCurrentStepValid(): boolean {
    // Validate each step based on the current stepper index
    switch (this.stepper?.selectedIndex) {
      case 0:
        console.log('Step 1 Form Groups Validity:',
        this.firstStepFirstCardFormGroup.valid,
        this.firstStepSecondCardFormGroup.valid);
        return (
          this.firstStepFirstCardFormGroup.valid &&
          this.firstStepSecondCardFormGroup.valid
        );
      case 1:
        return (
          this.secondStepFirstCardFormGroup.valid &&
          this.secondStepSecondCardFormGroup.valid
        );
      case 2:
        return (
          this.thirdStepFirstCardFormGroup.valid &&
          this.thirdStepSecondCardFormGroup.valid
        );
      case 3:
        return (
          this.fourthStepFirstCardFormGroup.valid &&
          this.fourthStepSecondCardFormGroup.valid
        );
      case 4:
        return (
          this.fifthStepFirstCardFormGroup.valid &&
          this.fifthStepSecondCardFormGroup.valid
        );
      default:
        return false;
    }
  }
}

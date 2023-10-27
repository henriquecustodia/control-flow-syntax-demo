import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BaseComponent } from '../base-component';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-control-flow-syntax',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './control-flow-syntax.component.html',
  styleUrls: ['./control-flow-syntax.component.scss'],
})
export class ControlFlowSyntaxComponent extends BaseComponent {}

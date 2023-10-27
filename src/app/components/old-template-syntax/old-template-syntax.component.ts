import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BaseComponent } from '../base-component';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-old-template-syntax',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './old-template-syntax.component.html',
  styleUrls: ['./old-template-syntax.component.scss'],
})
export class OldTemplateSyntaxComponent extends BaseComponent {}

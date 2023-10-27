import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ControlFlowSyntaxComponent } from './components/control-flow-syntax/control-flow-syntax.component';
import { OldTemplateSyntaxComponent } from './components/old-template-syntax/old-template-syntax.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    ControlFlowSyntaxComponent,
    OldTemplateSyntaxComponent,
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {}

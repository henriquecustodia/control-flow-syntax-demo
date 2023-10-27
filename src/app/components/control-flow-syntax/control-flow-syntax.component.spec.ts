import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ControlFlowSyntaxComponent } from './control-flow-syntax.component';

describe('ControlFlowSyntaxComponent', () => {
  let component: ControlFlowSyntaxComponent;
  let fixture: ComponentFixture<ControlFlowSyntaxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ControlFlowSyntaxComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ControlFlowSyntaxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

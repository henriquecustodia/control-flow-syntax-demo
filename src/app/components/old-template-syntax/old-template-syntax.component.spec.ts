import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OldTemplateSyntaxComponent } from './old-template-syntax.component';

describe('OldTemplateSyntaxComponent', () => {
  let component: OldTemplateSyntaxComponent;
  let fixture: ComponentFixture<OldTemplateSyntaxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OldTemplateSyntaxComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OldTemplateSyntaxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

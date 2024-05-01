import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorldviewComponent } from './worldview.component';

describe('WorldviewComponent', () => {
  let component: WorldviewComponent;
  let fixture: ComponentFixture<WorldviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WorldviewComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WorldviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

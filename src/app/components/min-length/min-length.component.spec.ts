import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MinLengthComponent } from './min-length.component';

describe('MinLengthComponent', () => {
  let component: MinLengthComponent;
  let fixture: ComponentFixture<MinLengthComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MinLengthComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MinLengthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

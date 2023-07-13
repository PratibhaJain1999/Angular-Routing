import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AmazonDetailsComponent } from './amazon-details.component';

describe('AmazonDetailsComponent', () => {
  let component: AmazonDetailsComponent;
  let fixture: ComponentFixture<AmazonDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AmazonDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AmazonDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

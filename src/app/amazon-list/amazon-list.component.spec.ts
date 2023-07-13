import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AmazonListComponent } from './amazon-list.component';

describe('AmazonListComponent', () => {
  let component: AmazonListComponent;
  let fixture: ComponentFixture<AmazonListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AmazonListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AmazonListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

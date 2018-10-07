import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItineraryPartComponent } from './itinerary-part.component';

describe('ItineraryPartComponent', () => {
  let component: ItineraryPartComponent;
  let fixture: ComponentFixture<ItineraryPartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItineraryPartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItineraryPartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

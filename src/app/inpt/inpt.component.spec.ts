import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InptComponent } from './inpt.component';

describe('InptComponent', () => {
  let component: InptComponent;
  let fixture: ComponentFixture<InptComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InptComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

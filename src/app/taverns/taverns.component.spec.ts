import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TavernsComponent } from './taverns.component';

describe('TavernsComponent', () => {
  let component: TavernsComponent;
  let fixture: ComponentFixture<TavernsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TavernsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TavernsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

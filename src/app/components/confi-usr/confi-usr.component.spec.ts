import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfiUsrComponent } from './confi-usr.component';

describe('ConfiUsrComponent', () => {
  let component: ConfiUsrComponent;
  let fixture: ComponentFixture<ConfiUsrComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConfiUsrComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConfiUsrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

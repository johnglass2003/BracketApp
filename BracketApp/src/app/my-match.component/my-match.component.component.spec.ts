import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyMatchComponentComponent } from './my-match.component.component';

describe('MyMatchComponentComponent', () => {
  let component: MyMatchComponentComponent;
  let fixture: ComponentFixture<MyMatchComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyMatchComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyMatchComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

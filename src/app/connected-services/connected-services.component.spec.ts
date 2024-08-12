import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConnectedServicesComponent } from './connected-services.component';

describe('ConnectedServicesComponent', () => {
  let component: ConnectedServicesComponent;
  let fixture: ComponentFixture<ConnectedServicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConnectedServicesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConnectedServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

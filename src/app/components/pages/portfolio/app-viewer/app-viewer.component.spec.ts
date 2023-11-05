import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppViewerComponent } from './app-viewer.component';

describe('AppViewerComponent', () => {
  let component: AppViewerComponent;
  let fixture: ComponentFixture<AppViewerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AppViewerComponent]
    });
    fixture = TestBed.createComponent(AppViewerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

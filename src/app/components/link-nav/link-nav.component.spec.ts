import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LinkNavComponent } from './link-nav.component';

describe('LinkNavComponent', () => {
  let component: LinkNavComponent;
  let fixture: ComponentFixture<LinkNavComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LinkNavComponent]
    });
    fixture = TestBed.createComponent(LinkNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

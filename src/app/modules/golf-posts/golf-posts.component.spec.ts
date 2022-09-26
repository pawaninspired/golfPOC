import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GolfPostsComponent } from './golf-posts.component';

describe('GolfPostsComponent', () => {
  let component: GolfPostsComponent;
  let fixture: ComponentFixture<GolfPostsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GolfPostsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GolfPostsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

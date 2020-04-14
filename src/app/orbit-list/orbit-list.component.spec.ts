import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'orbit-report'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('orbit-report');
  });

  import { async, ComponentFixture, TestBed } from '@angular/core/testing';

  import { OrbitListComponent } from './orbit-list.component';
  
  describe('OrbitListComponent', () => {
    let component: OrbitListComponent;
    let fixture: ComponentFixture<OrbitListComponent>;
  
    beforeEach(async(() => {
      TestBed.configureTestingModule({
        declarations: [ OrbitListComponent ]
      })
      .compileComponents();
    }));
  
    beforeEach(() => {
      fixture = TestBed.createComponent(OrbitListComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
    });
  
    it('should create', () => {
      expect(component).toBeTruthy();
    });
  });
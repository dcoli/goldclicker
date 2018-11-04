import { TestBed, async } from '@angular/core/testing';
import { GoldClickerComponent } from './goldclicker.component';

describe('GoldClickerComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        GoldClickerComponent
      ],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(GoldClickerComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'goldclicker'`, () => {
    const fixture = TestBed.createComponent(GoldClickerComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('goldclicker');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(GoldClickerComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to goldclicker!');
  });
});

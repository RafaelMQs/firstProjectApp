import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ResidentEvilRaccoonCityPage } from './resident-evil-raccoon-city.page';

describe('ResidentEvilRaccoonCityPage', () => {
  let component: ResidentEvilRaccoonCityPage;
  let fixture: ComponentFixture<ResidentEvilRaccoonCityPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ResidentEvilRaccoonCityPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ResidentEvilRaccoonCityPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

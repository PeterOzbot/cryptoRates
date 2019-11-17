import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ToolbarComponent } from './toolbar.component';
import { NavigationService } from 'src/app/services/navigation.service';
import { MockMatToolbarComponent, MockMatToolbarRowComponent, MockMatIconComponent } from 'src/test-util/mocked-components';
import { MockNavigationService } from 'src/test-util/mocked-services';

describe('ToolbarComponent', () => {
  let component: ToolbarComponent;
  let fixture: ComponentFixture<ToolbarComponent>;

  beforeEach((() => {
    TestBed.configureTestingModule({
      declarations: [
        ToolbarComponent,
        MockMatToolbarComponent,
        MockMatToolbarRowComponent,
        MockMatIconComponent
      ],
      providers: [
        { provide: NavigationService, useClass: MockNavigationService }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(ToolbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create component', () => {
    expect(component).toBeTruthy();
  });

  it('should call NavigationService on toggleSetting', () => {
    // arrange
    const navigationService = TestBed.get(NavigationService);
    const spy = spyOn(navigationService, 'toggleSetting');

    // act
    component.toggleSetting();

    // assert
    expect(spy).toHaveBeenCalled();
  });

  it('should call NavigationService on goToRoot', () => {
    // arrange
    const navigationService = TestBed.get(NavigationService);
    const spy = spyOn(navigationService, 'goToRoot');

    // act
    component.goToRoot();

    // assert
    expect(spy).toHaveBeenCalled();
  });
});

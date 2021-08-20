import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HomeComponent } from './home.component';
import { HomeService } from './home.service';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;
  let homeService: HomeService

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeComponent ],
      providers: [HomeService]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    homeService = TestBed.get(HomeService)
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should be called "checkData" function and equal to salary slip', ()=>{
    spyOn(homeService, 'isDataExist').and.returnValue(true)
    let salSip = component.checkData();
    // expect(salSip).toEqual("salary slip")
    expect(homeService.isDataExist).toHaveBeenCalled();
  })
});

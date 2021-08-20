import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { addition } from './testFunction';
import { CustomerReservation } from './testFunction';

// describe('AppComponent', () => {
//   beforeEach(async () => {
//     await TestBed.configureTestingModule({
//       imports: [
//         RouterTestingModule
//       ],
//       declarations: [
//         AppComponent
//       ],
//     }).compileComponents();
//   });

//   it('should create the app', () => {
//     const fixture = TestBed.createComponent(AppComponent);
//     const app = fixture.componentInstance;
//     expect(app).toBeTruthy();
//   });

//   it(`should have as title 'angular-test'`, () => {
//     const fixture = TestBed.createComponent(AppComponent);
//     const app = fixture.componentInstance;
//     expect(app.title).toEqual('angular-test');
//   });

//   it('should render title', () => {
//     const fixture = TestBed.createComponent(AppComponent);
//     fixture.detectChanges();
//     const compiled = fixture.nativeElement;
//     expect(compiled.querySelector('.content span').textContent).toContain('angular-test app is running!');
//   });
// });

describe('addition function', ()=>{
  it('it should add function parameter', ()=>{
    expect(addition(10,20)).toBe(30);
  })
})

// describe('customer reservation facility', ()=>{
//   let custService: CustomerReservation
//   beforeEach(()=>{
//     custService = new CustomerReservation();
//   });

//   afterEach(()=>{
//     custService = null;
//   })
//   // it('it checks whether the roome is reserved or not', ()=>{
//   //   // //Arrange
//   //   // let reservation = new customerReservation()
//   //   // // Act
//   //   // let roomReserved = reservation.reserveRoom()
//   //   // //Assert
//   //   // expect(roomReserved).toBeTruthy();
//   // })

//   it('should increase the customer number', ()=>{
//     expect()
//   })
// })

describe('checks for room availability', ()=>{
  let custService:any;
  beforeEach(()=>{
    custService = new CustomerReservation();
  });

  afterEach(()=>{
    custService = null;
  });

  it('should increase the number', ()=>{
    let custCount = custService.increasedCustomerNumber()
    expect(custCount).toEqual(11);
  })

  it('should decrease the number', ()=>{
    let custCount = custService.decreasedCustomerNumber()
    expect(custCount).toEqual(9);
  })
})
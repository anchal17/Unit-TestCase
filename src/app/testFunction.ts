export function addition(a:any,b:any){
    return a+b;
}

export class CustomerReservation{
    // roomCapacity = 30;
    customerNumber = 10;

    // reserveRoom(){
    //     let roomReserved = false;
    //     if(this.customerNumber<this.roomCapacity){
    //         this.customerNumber++;
    //         roomReserved = true
    //     }
    //     return roomReserved;
    // }

    increasedCustomerNumber(){
        return ++this.customerNumber;
    }

    decreasedCustomerNumber(){
        return --this.customerNumber;
    }
}
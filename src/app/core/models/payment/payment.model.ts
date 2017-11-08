export class PaymentModel {
    _id: string;
    memberid: number;
    isfullpaid: boolean;
    items: object[];
    taxes: object[];
    taxamount: number;
    amount: string;
    totalamount: string;
    paidamount: number;
    mode: string;
    status: string;
    paymentdate: Date;
    chqnumber: string;
    bankname: string;
    notes: string;
    chqdate: Date;
    invoicenumberprefix: string;
    invoicenumber: number;
    receiptnumberprefix: string;
    receiptnumber: number;
    property: object;
    paymentreceivedby: string;
}   

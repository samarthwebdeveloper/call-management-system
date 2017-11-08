export class PaymentrefundModel {
    _id: string;
    memberid: number;
    items: object[];
    taxamount: string;
    totalamount: string;
    mode: string;
    refunddate: Date;
    chqnumber: string;
    bankname: string;
    chqdate: Date;
    status: string;
}
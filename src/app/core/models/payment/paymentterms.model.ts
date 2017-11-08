export class PaymentTermsModel {
    _id: string;
    membershipid: string;
    paymentitem: string;
    period: String;
    tenure: number;
    amount: number;
    date: number;
    istaxable: boolean;
    taxes: string[];
    property: string[];
    status : string;
}
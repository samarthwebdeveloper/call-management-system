export class PaymentSettingModel {
    _id: string;
    businessname: string;
    billingemail: string;
    city: String;
    state: String;
    country: string;
    address1: string;
    address2: string;
    currency: string;
    decimalformat: string;
    paymentmethod : string[];
    receiptformat : object = {prefix:'', format:''};
    invoiceformat : object = {prefix:'', format:''};
    firstreminder : number;
    secondreminder : number;
    adminreminder : number;
    duereminder : object;
    property: object;
    status: string;
}
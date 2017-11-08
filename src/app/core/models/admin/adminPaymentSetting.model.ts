export class AdminPaymentSettingModel {
    _id: string;
    membershipid: string;
    EMIperiod: string;
    EMIAmount: number;
    EMIDate: number;
    ASFperiod: string;
    ASFAmount: number;
    ASFDate: number;
    property: object;
    status: string;
}
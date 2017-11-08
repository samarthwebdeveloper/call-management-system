export class PaymentSummaryModel {
    _id: string;
    membershipid: string;
    membershipsname: string;
    totalmembers: number;
    overDue: number;
    duein7Days: number;
    duein15Days: number;
    duein30Days: number;
}
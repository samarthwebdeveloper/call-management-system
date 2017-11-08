export class MemberModel {
    _id: string;
    membernumber: string;
    membershipid: string;
    membershipstart: Date;
    username: string;
    password: string;
    role: string;
    roletype: string;
    property: Object;
    permission: string[];
    paymentterms: string[];
    status: string;
    lastaction: string;
    userid: string;
    paymentmode: string;
    membership: any;
    memberfullname: string;
    fullname: string;
}
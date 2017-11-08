export class CompanySettingModel {
    _id: string;
    
    //organizationname: string;
    //shortname: string;
    //logo: string;
    //website: string;
    //contactperson: string;
    //contactnumber: string;
    //address1: string;
    //address2: string;
    //city: string;
    //state: string;
    //country: string;
    //pincode: string;

    superadmin: string;
    language: String;
    locale: string;
    timezone: string;
    dateformat: string;
    timeformat: string;
    membershipidformat: String; 
    startingnumber: String;
    memberusername: string;
    usernameformat: string;
    calendarweek: number;
    seasonratiotype: string;
    property: object;
}
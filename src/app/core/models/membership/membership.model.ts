export class MembershipModel {
    _id: string;
    membershipname: string;
    allowmember:Number;    
    tenure: Number;
    periodin: String;
    eligiblenight:Number;
    eligibleperiodin:String;  
    price:Number;
    minnight:Number;
    minnightperiodin:String;
    carryon:Number;
    season:String; 
    seasonupgrade: object[];
    rcifees: Number;
    advancebookingnotice: Object = {ls:0 , hs:0, ps:0 };
    maintenancefees: Number;
    maintenanceperiodin: String;    
    addons: string[];
    otherbenefits: object[];
    property: Object;
    status: string;

}



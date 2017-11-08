export class FieldsModel {
    _id: number;
    formid: string;
    formname: string;
    
    tabname: string;
    tabdisplaytext: string;

    sectionname: string;
    sectiondisplaytext: string;

    groupname: string;
    groupdisplaytext: string;

    fieldtype: string;
    lookupdata: string[];
    validationData: string;
    // validationData: string[];
    
    fieldname: string;
    fielddisplaytext: string;

    inbuildlookupField: string;
    
    form: string;
    formfield: string;
    displayvalue: string;
    fieldfilter: string;
    fieldfiltervalue: string;
    apiurl: string;
    method: string;

    description: string;
    isMandatory: boolean;
    isDisplayOnList: boolean;
    formorder: number;
    issystemfield: boolean;
    
}

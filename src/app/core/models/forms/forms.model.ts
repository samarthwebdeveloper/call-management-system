export class FormsModel {
    _id: number;
    name: string;
    status: string;
    formname: string;
    dispalyformname: string;
    schemaname: string;
    formlistname: string;
    issystemform: boolean;
    tabs: string[];
    addurl: object;
    editurl: object;
    listurl: object;
    geturl: object;
    rootfields: string[];
    gridaction: string[];
    formaction: string[];    
    displayfields: string[];    
}

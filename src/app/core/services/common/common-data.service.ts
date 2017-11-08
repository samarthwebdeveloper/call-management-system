

export class CommonDataService {
    authId: string;
    a: any;
    filterDataparams: any;
    reportDataparams: any;
    isfilterData = false;
    isReportData = false;
    reportFromDate: Date;
    reportToDate: Date;
    reportParams: any;
    dateDDStateParams: string; 
    dateDDStateForNextParams: string;
    constructor() {
        this.filterDataparams = {
            'search': [],
            'select': [],
            'sort': {}
        }
        this.reportDataparams = {
            'search': [],
            'select': [],
            'sort': "",
            'refsearch': {}
        }
    }

}

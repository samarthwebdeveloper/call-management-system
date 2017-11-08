export class RoleModel {
    _id: number;
    roleid:number;
    rolename: string;
    description: string;
    permission: any[];
    status: string;
    formname: string;
    view: boolean;
    edit: boolean;
    delete: boolean;
    add: boolean;
}

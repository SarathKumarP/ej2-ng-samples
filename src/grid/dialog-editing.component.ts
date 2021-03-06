import { Component, OnInit } from '@angular/core';
import { orderDatas } from './data';
import { EditService, ToolbarService, PageService } from '@syncfusion/ej2-ng-grids';

@Component({
    selector: 'ej-griddialogedit',
    templateUrl: 'dialog-editing.html',
    providers: [ToolbarService, EditService, PageService]
})
export class DialogEditComponent implements OnInit {
    public data: Object[];
    public editSettings: Object;
    public toolbar: string[];
    public orderidrules: Object;
    public customeridrules: Object;
    public freightrules: Object;
    public pageSettings: Object;
    public editparams: Object;

    public ngOnInit(): void {
        this.data = orderDatas;
        this.editSettings = { allowEditing: true, allowAdding: true, allowDeleting: true, mode: 'dialog' };
        this.toolbar = ['add', 'edit', 'delete'];
        this.orderidrules = { required: true };
        this.customeridrules = { required: true };
        this.freightrules =  { required: true };
        this.editparams = { params: { popupHeight: '300px' }};
        this.pageSettings = { pageCount: 5};
    }
}

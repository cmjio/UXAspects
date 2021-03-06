import { Directive, ElementRef, EventEmitter, Injector, Input, Output } from '@angular/core';
import { UpgradeComponent } from '@angular/upgrade/static';

@Directive({
    selector: 'treegrid'
})
export class TreeGridNg1Component extends UpgradeComponent {

    @Input() data: any[] | Function;
    @Input() columns: TreeGridColumn[];
    @Input() treeData: TreeGridData[];
    @Input() selected: any[];
    @Input() currentRow: any;
    @Input() options: TreeGridOptions;

    @Output() optionsChange = new EventEmitter<TreeGridOptions>();
    @Output() selectedChange = new EventEmitter<any[]>();
    @Output() currentRowChange = new EventEmitter<any>();
    @Output() treeDataChange = new EventEmitter<TreeGridData[]>();
    @Output() selectionManager: EventEmitter<any>;

    constructor(elementRef: ElementRef, injector: Injector) {
        super('treegrid', elementRef, injector);
    }
}

export interface TreeGridColumn {
    name: string;
    value?: string | Function;
    template?: string;
    headerClass?: string;
    cellClass?: string;
    width?: string;
    tooltip?: string;
    tooltipPlacement?: 'top' | 'bottom' | 'left' | 'right';
}

export interface TreeGridData {
    dataItem: any;
    children: any[];
    expanded: boolean;
    expanding: boolean;
    level: number;
    api: any;
}

export interface TreeGridOptions {
    childrenProperty?: string;
    hasChildren?: Function;
    maxDepth?: number;
    expandTopLevel?: boolean;
    select?: any;
    expander?: any;
    icons?: any;
    rowClass?: string | Function;
    sort?: Function;
}

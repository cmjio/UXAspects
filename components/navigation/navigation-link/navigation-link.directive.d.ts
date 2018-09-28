import { LocationStrategy } from '@angular/common';
import { OnChanges, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavigationItem } from '../navigation-item.inferface';
import { NavigationService } from '../navigation.service';
export declare class NavigationLinkDirective implements OnInit, OnChanges, OnDestroy {
    private _router;
    private _locationStrategy;
    private _navigationService;
    navigationItem: NavigationItem;
    expanded: boolean;
    canExpand: boolean;
    indent: boolean;
    href: string;
    role: string;
    ariaExpanded: string;
    isActive: boolean;
    indentChildren: boolean;
    private _expanded$;
    private _onDestroy;
    constructor(_router: Router, _locationStrategy: LocationStrategy, _navigationService: NavigationService);
    ngOnInit(): void;
    ngOnChanges(): void;
    ngOnDestroy(): void;
    activated(event: Event): boolean;
    private updateNavigationState();
    private updateAttributes();
    private getHref();
    private isActiveItem(item);
}

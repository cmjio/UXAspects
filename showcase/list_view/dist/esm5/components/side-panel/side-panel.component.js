/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Component, Input, Output, EventEmitter, HostBinding, HostListener, ElementRef } from '@angular/core';
import { SidePanelService } from './side-panel.service';
var SidePanelComponent = (function () {
    function SidePanelComponent(service, _elementRef) {
        this.service = service;
        this._elementRef = _elementRef;
        this.inline = false;
        this.attachTo = 'window';
        this.width = '50%';
        this.top = '0';
        this.modal = false;
        this.animate = false;
        this.closeOnExternalClick = false;
        this.openChange = new EventEmitter();
    }
    Object.defineProperty(SidePanelComponent.prototype, "open", {
        get: /**
         * @return {?}
         */
        function () {
            return this.service.open$.value;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this.service.open$.next(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SidePanelComponent.prototype, "position", {
        get: /**
         * @return {?}
         */
        function () {
            if (this.inline) {
                return 'static';
            }
            if (this.attachTo === 'container') {
                return 'absolute';
            }
            return 'fixed';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SidePanelComponent.prototype, "cssWidth", {
        get: /**
         * @return {?}
         */
        function () {
            if (typeof this.width === 'number') {
                return this.width === 0 ? '0' : this.width + 'px';
            }
            return this.width;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SidePanelComponent.prototype, "cssTop", {
        get: /**
         * @return {?}
         */
        function () {
            if (typeof this.top === 'number') {
                return this.top === 0 ? '0' : this.top + 'px';
            }
            return this.top;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SidePanelComponent.prototype, "componentWidth", {
        get: /**
         * @return {?}
         */
        function () {
            if (this.inline) {
                return this.open ? this.cssWidth : '0';
            }
            return null;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SidePanelComponent.prototype, "hostWidth", {
        get: /**
         * @return {?}
         */
        function () {
            return this.inline ? '100%' : this.cssWidth;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    SidePanelComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this._subscription = this.service.open$.subscribe(function (next) {
            _this.openChange.emit(next);
        });
    };
    /**
     * @return {?}
     */
    SidePanelComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this._subscription.unsubscribe();
    };
    /**
     * @return {?}
     */
    SidePanelComponent.prototype.openPanel = /**
     * @return {?}
     */
    function () {
        this.service.open();
    };
    /**
     * @return {?}
     */
    SidePanelComponent.prototype.closePanel = /**
     * @return {?}
     */
    function () {
        this.service.close();
    };
    /**
     * @param {?} event
     * @return {?}
     */
    SidePanelComponent.prototype.clickHandler = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        if (!this.open || !this.closeOnExternalClick) {
            return;
        }
        var /** @type {?} */ target = /** @type {?} */ (event.target);
        if (!this._elementRef.nativeElement.contains(target) ||
            (target && target.classList.contains('modal-backdrop'))) {
            this.closePanel();
        }
    };
    SidePanelComponent.decorators = [
        { type: Component, args: [{
                    selector: 'ux-side-panel',
                    exportAs: 'ux-side-panel',
                    template: "<div *ngIf=\"modal && open\" class=\"modal-backdrop\"\n    [style.position]=\"position\"\n    [style.top]=\"cssTop\"></div>\n\n<div class=\"ux-side-panel-host\"\n    [class.modal-panel]=\"modal\"\n    [style.position]=\"position\"\n    [style.width]=\"hostWidth\"\n    [style.top]=\"cssTop\">\n    <ng-content></ng-content>\n</div>\n",
                    providers: [SidePanelService],
                    host: {
                        'class': 'ux-side-panel'
                    }
                },] },
    ];
    /** @nocollapse */
    SidePanelComponent.ctorParameters = function () { return [
        { type: SidePanelService, },
        { type: ElementRef, },
    ]; };
    SidePanelComponent.propDecorators = {
        "open": [{ type: Input }, { type: HostBinding, args: ['class.open',] },],
        "inline": [{ type: Input }, { type: HostBinding, args: ['class.inline',] },],
        "attachTo": [{ type: Input },],
        "width": [{ type: Input },],
        "top": [{ type: Input },],
        "modal": [{ type: Input }, { type: HostBinding, args: ['attr.aria-modal',] },],
        "animate": [{ type: Input }, { type: HostBinding, args: ['class.animate',] },],
        "closeOnExternalClick": [{ type: Input },],
        "openChange": [{ type: Output },],
        "componentWidth": [{ type: HostBinding, args: ['style.width',] },],
        "closePanel": [{ type: HostListener, args: ['document:keyup.escape',] },],
        "clickHandler": [{ type: HostListener, args: ['document:click', ['$event'],] },],
    };
    return SidePanelComponent;
}());
export { SidePanelComponent };
function SidePanelComponent_tsickle_Closure_declarations() {
    /** @type {!Array<{type: !Function, args: (undefined|!Array<?>)}>} */
    SidePanelComponent.decorators;
    /**
     * @nocollapse
     * @type {function(): !Array<(null|{type: ?, decorators: (undefined|!Array<{type: !Function, args: (undefined|!Array<?>)}>)})>}
     */
    SidePanelComponent.ctorParameters;
    /** @type {!Object<string,!Array<{type: !Function, args: (undefined|!Array<?>)}>>} */
    SidePanelComponent.propDecorators;
    /** @type {?} */
    SidePanelComponent.prototype.inline;
    /** @type {?} */
    SidePanelComponent.prototype.attachTo;
    /** @type {?} */
    SidePanelComponent.prototype.width;
    /** @type {?} */
    SidePanelComponent.prototype.top;
    /** @type {?} */
    SidePanelComponent.prototype.modal;
    /** @type {?} */
    SidePanelComponent.prototype.animate;
    /** @type {?} */
    SidePanelComponent.prototype.closeOnExternalClick;
    /** @type {?} */
    SidePanelComponent.prototype.openChange;
    /** @type {?} */
    SidePanelComponent.prototype._subscription;
    /** @type {?} */
    SidePanelComponent.prototype.service;
    /** @type {?} */
    SidePanelComponent.prototype._elementRef;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2lkZS1wYW5lbC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AdXgtYXNwZWN0cy91eC1hc3BlY3RzLyIsInNvdXJjZXMiOlsiY29tcG9uZW50cy9zaWRlLXBhbmVsL3NpZGUtcGFuZWwuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLEtBQUssRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFhLFdBQVcsRUFBRSxZQUFZLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRWpJLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHNCQUFzQixDQUFDOztJQW1HcEQsNEJBQ2MsT0FBeUIsRUFDM0I7UUFERSxZQUFPLEdBQVAsT0FBTyxDQUFrQjtRQUMzQixnQkFBVyxHQUFYLFdBQVc7c0JBakVkLEtBQUs7d0JBR3FCLFFBQVE7cUJBR2xCLEtBQUs7bUJBR1AsR0FBRztxQkFJbEIsS0FBSzt1QkFJSCxLQUFLO29DQUdRLEtBQUs7MEJBR2YsSUFBSSxZQUFZLEVBQVc7S0EyQ25DOzBCQTVFRCxvQ0FBSTs7Ozs7WUFDSixNQUFNLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDOzs7Ozs7UUFHcEMsVUFBUyxLQUFjO1lBQ25CLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztTQUNsQzs7OztJQTZCRCxzQkFBSSx3Q0FBUTs7OztRQUFaO1lBQ0ksRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7Z0JBQ2QsTUFBTSxDQUFDLFFBQVEsQ0FBQzthQUNuQjtZQUNELEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxRQUFRLEtBQUssV0FBVyxDQUFDLENBQUMsQ0FBQztnQkFDaEMsTUFBTSxDQUFDLFVBQVUsQ0FBQzthQUNyQjtZQUNELE1BQU0sQ0FBQyxPQUFPLENBQUM7U0FDbEI7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QUNMLFdBQVcsU0FBQyxpQkFBaUI7NEJBRzdCLEtBQUssWUFDTCxXQUFXLFNBQUMsZUFBZTt5Q0FHM0IsS0FBSzsrQkFHTCxNQUFNO21DQTJCTixXQUFXLFNBQUMsYUFBYTsrQkFpQ3pCLFlBQVksU0FBQyx1QkFBdUI7aUNBS3BDLFlBQVksU0FBQyxnQkFBZ0IsRUFBRSxDQUFDLFFBQVEsQ0FBQzs7NkJBN0g5Qzs7U0F3QmEsa0JBQWtCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0LCBPdXRwdXQsIEV2ZW50RW1pdHRlciwgT25EZXN0cm95LCBIb3N0QmluZGluZywgSG9zdExpc3RlbmVyLCBFbGVtZW50UmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMvU3Vic2NyaXB0aW9uJztcclxuaW1wb3J0IHsgU2lkZVBhbmVsU2VydmljZSB9IGZyb20gJy4vc2lkZS1wYW5lbC5zZXJ2aWNlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICd1eC1zaWRlLXBhbmVsJyxcclxuICAgIGV4cG9ydEFzOiAndXgtc2lkZS1wYW5lbCcsXHJcbiAgICB0ZW1wbGF0ZTogYDxkaXYgKm5nSWY9XCJtb2RhbCAmJiBvcGVuXCIgY2xhc3M9XCJtb2RhbC1iYWNrZHJvcFwiXHJcbiAgICBbc3R5bGUucG9zaXRpb25dPVwicG9zaXRpb25cIlxyXG4gICAgW3N0eWxlLnRvcF09XCJjc3NUb3BcIj48L2Rpdj5cclxuXHJcbjxkaXYgY2xhc3M9XCJ1eC1zaWRlLXBhbmVsLWhvc3RcIlxyXG4gICAgW2NsYXNzLm1vZGFsLXBhbmVsXT1cIm1vZGFsXCJcclxuICAgIFtzdHlsZS5wb3NpdGlvbl09XCJwb3NpdGlvblwiXHJcbiAgICBbc3R5bGUud2lkdGhdPVwiaG9zdFdpZHRoXCJcclxuICAgIFtzdHlsZS50b3BdPVwiY3NzVG9wXCI+XHJcbiAgICA8bmctY29udGVudD48L25nLWNvbnRlbnQ+XHJcbjwvZGl2PlxyXG5gLFxyXG4gICAgcHJvdmlkZXJzOiBbU2lkZVBhbmVsU2VydmljZV0sXHJcbiAgICBob3N0OiB7XHJcbiAgICAgICAgJ2NsYXNzJzogJ3V4LXNpZGUtcGFuZWwnXHJcbiAgICB9XHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBTaWRlUGFuZWxDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XHJcblxyXG4gICAgQElucHV0KClcclxuICAgIEBIb3N0QmluZGluZygnY2xhc3Mub3BlbicpXHJcbiAgICBnZXQgb3BlbigpOiBib29sZWFuIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5zZXJ2aWNlLm9wZW4kLnZhbHVlO1xyXG4gICAgfVxyXG5cclxuICAgIHNldCBvcGVuKHZhbHVlOiBib29sZWFuKSB7XHJcbiAgICAgICAgdGhpcy5zZXJ2aWNlLm9wZW4kLm5leHQodmFsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgIEBJbnB1dCgpXHJcbiAgICBASG9zdEJpbmRpbmcoJ2NsYXNzLmlubGluZScpXHJcbiAgICBpbmxpbmUgPSBmYWxzZTtcclxuXHJcbiAgICBASW5wdXQoKVxyXG4gICAgYXR0YWNoVG86ICd3aW5kb3cnIHwgJ2NvbnRhaW5lcicgPSAnd2luZG93JztcclxuXHJcbiAgICBASW5wdXQoKVxyXG4gICAgd2lkdGg6IHN0cmluZyB8IG51bWJlciA9ICc1MCUnO1xyXG5cclxuICAgIEBJbnB1dCgpXHJcbiAgICB0b3A6IHN0cmluZyB8IG51bWJlciA9ICcwJztcclxuXHJcbiAgICBASW5wdXQoKVxyXG4gICAgQEhvc3RCaW5kaW5nKCdhdHRyLmFyaWEtbW9kYWwnKVxyXG4gICAgbW9kYWwgPSBmYWxzZTtcclxuXHJcbiAgICBASW5wdXQoKVxyXG4gICAgQEhvc3RCaW5kaW5nKCdjbGFzcy5hbmltYXRlJylcclxuICAgIGFuaW1hdGUgPSBmYWxzZTtcclxuXHJcbiAgICBASW5wdXQoKVxyXG4gICAgY2xvc2VPbkV4dGVybmFsQ2xpY2sgPSBmYWxzZTtcclxuXHJcbiAgICBAT3V0cHV0KClcclxuICAgIG9wZW5DaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPGJvb2xlYW4+KCk7XHJcblxyXG4gICAgZ2V0IHBvc2l0aW9uKCkge1xyXG4gICAgICAgIGlmICh0aGlzLmlubGluZSkge1xyXG4gICAgICAgICAgICByZXR1cm4gJ3N0YXRpYyc7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLmF0dGFjaFRvID09PSAnY29udGFpbmVyJykge1xyXG4gICAgICAgICAgICByZXR1cm4gJ2Fic29sdXRlJztcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuICdmaXhlZCc7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IGNzc1dpZHRoKCk6IHN0cmluZyB7XHJcbiAgICAgICAgaWYgKHR5cGVvZiB0aGlzLndpZHRoID09PSAnbnVtYmVyJykge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy53aWR0aCA9PT0gMCA/ICcwJyA6IHRoaXMud2lkdGggKyAncHgnO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdGhpcy53aWR0aDtcclxuICAgIH1cclxuXHJcbiAgICBnZXQgY3NzVG9wKCk6IHN0cmluZyB7XHJcbiAgICAgICAgaWYgKHR5cGVvZiB0aGlzLnRvcCA9PT0gJ251bWJlcicpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMudG9wID09PSAwID8gJzAnIDogdGhpcy50b3AgKyAncHgnO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdGhpcy50b3A7XHJcbiAgICB9XHJcblxyXG4gICAgQEhvc3RCaW5kaW5nKCdzdHlsZS53aWR0aCcpXHJcbiAgICBnZXQgY29tcG9uZW50V2lkdGgoKTogc3RyaW5nIHtcclxuICAgICAgICBpZiAodGhpcy5pbmxpbmUpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMub3BlbiA/IHRoaXMuY3NzV2lkdGggOiAnMCc7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgfVxyXG5cclxuICAgIGdldCBob3N0V2lkdGgoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaW5saW5lID8gJzEwMCUnIDogdGhpcy5jc3NXaWR0aDtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIF9zdWJzY3JpcHRpb246IFN1YnNjcmlwdGlvbjtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihcclxuICAgICAgICBwcm90ZWN0ZWQgc2VydmljZTogU2lkZVBhbmVsU2VydmljZSxcclxuICAgICAgICBwcml2YXRlIF9lbGVtZW50UmVmOiBFbGVtZW50UmVmXHJcbiAgICApIHsgfVxyXG5cclxuICAgIG5nT25Jbml0KCkge1xyXG4gICAgICAgIHRoaXMuX3N1YnNjcmlwdGlvbiA9IHRoaXMuc2VydmljZS5vcGVuJC5zdWJzY3JpYmUoKG5leHQpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5vcGVuQ2hhbmdlLmVtaXQobmV4dCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgbmdPbkRlc3Ryb3koKSB7XHJcbiAgICAgICAgdGhpcy5fc3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgb3BlblBhbmVsKCkge1xyXG4gICAgICAgIHRoaXMuc2VydmljZS5vcGVuKCk7XHJcbiAgICB9XHJcblxyXG4gICAgQEhvc3RMaXN0ZW5lcignZG9jdW1lbnQ6a2V5dXAuZXNjYXBlJylcclxuICAgIGNsb3NlUGFuZWwoKSB7XHJcbiAgICAgICAgdGhpcy5zZXJ2aWNlLmNsb3NlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgQEhvc3RMaXN0ZW5lcignZG9jdW1lbnQ6Y2xpY2snLCBbJyRldmVudCddKVxyXG4gICAgY2xpY2tIYW5kbGVyKGV2ZW50OiBNb3VzZUV2ZW50KSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLm9wZW4gfHwgIXRoaXMuY2xvc2VPbkV4dGVybmFsQ2xpY2spIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3QgdGFyZ2V0ID0gZXZlbnQudGFyZ2V0IGFzIEhUTUxFbGVtZW50O1xyXG5cclxuICAgICAgICBpZiAoIXRoaXMuX2VsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5jb250YWlucyh0YXJnZXQpIHx8XHJcbiAgICAgICAgICAgICh0YXJnZXQgJiYgdGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnbW9kYWwtYmFja2Ryb3AnKSkpIHtcclxuICAgICAgICAgICAgdGhpcy5jbG9zZVBhbmVsKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59Il19
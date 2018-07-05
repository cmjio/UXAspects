/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { BaseSearchComponent } from '../base-search.component';
var SearchTextComponent = (function (_super) {
    tslib_1.__extends(SearchTextComponent, _super);
    function SearchTextComponent() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.type = 'text';
        return _this;
    }
    Object.defineProperty(SearchTextComponent.prototype, "label", {
        get: /**
         * @return {?}
         */
        function () {
            return this.config.label;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SearchTextComponent.prototype, "placeholder", {
        get: /**
         * @return {?}
         */
        function () {
            return this.config.placeholder || 'Enter text';
        },
        enumerable: true,
        configurable: true
    });
    SearchTextComponent.decorators = [
        { type: Component, args: [{
                    selector: 'ux-search-text',
                    template: "<label class=\"form-label\" *ngIf=\"label\">{{ label }}</label>\n<input [placeholder]=\"placeholder\" [(ngModel)]=\"value\" class=\"form-control\">"
                },] },
    ];
    return SearchTextComponent;
}(BaseSearchComponent));
export { SearchTextComponent };
function SearchTextComponent_tsickle_Closure_declarations() {
    /** @type {!Array<{type: !Function, args: (undefined|!Array<?>)}>} */
    SearchTextComponent.decorators;
    /**
     * @nocollapse
     * @type {function(): !Array<(null|{type: ?, decorators: (undefined|!Array<{type: !Function, args: (undefined|!Array<?>)}>)})>}
     */
    SearchTextComponent.ctorParameters;
    /** @type {?} */
    SearchTextComponent.prototype.type;
}
/**
 * @record
 */
export function SearchTextConfig() { }
function SearchTextConfig_tsickle_Closure_declarations() {
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGV4dC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AdXgtYXNwZWN0cy91eC1hc3BlY3RzLyIsInNvdXJjZXMiOlsiY29tcG9uZW50cy9zZWFyY2gtYnVpbGRlci9zZWFyY2gtY29tcG9uZW50cy90ZXh0L3RleHQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMxQyxPQUFPLEVBQUUsbUJBQW1CLEVBQTZCLE1BQU0sMEJBQTBCLENBQUM7O0lBT2pELCtDQUFtQjs7O3FCQUUzQyxNQUFNOzs7SUFFckIsc0JBQUksc0NBQUs7Ozs7UUFBVDtZQUNFLE1BQU0sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQztTQUMxQjs7O09BQUE7SUFFRCxzQkFBSSw0Q0FBVzs7OztRQUFmO1lBQ0UsTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsV0FBVyxJQUFJLFlBQVksQ0FBQztTQUNoRDs7O09BQUE7O2dCQWZGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsZ0JBQWdCO29CQUMxQixRQUFRLEVBQUUscUpBQ2lFO2lCQUM1RTs7OEJBUEQ7RUFReUMsbUJBQW1CO1NBQS9DLG1CQUFtQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQmFzZVNlYXJjaENvbXBvbmVudCwgQmFzZVNlYXJjaENvbXBvbmVudENvbmZpZyB9IGZyb20gJy4uL2Jhc2Utc2VhcmNoLmNvbXBvbmVudCc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3V4LXNlYXJjaC10ZXh0JyxcbiAgdGVtcGxhdGU6IGA8bGFiZWwgY2xhc3M9XCJmb3JtLWxhYmVsXCIgKm5nSWY9XCJsYWJlbFwiPnt7IGxhYmVsIH19PC9sYWJlbD5cbjxpbnB1dCBbcGxhY2Vob2xkZXJdPVwicGxhY2Vob2xkZXJcIiBbKG5nTW9kZWwpXT1cInZhbHVlXCIgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIj5gXG59KVxuZXhwb3J0IGNsYXNzIFNlYXJjaFRleHRDb21wb25lbnQgZXh0ZW5kcyBCYXNlU2VhcmNoQ29tcG9uZW50IHtcblxuICB0eXBlOiBzdHJpbmcgPSAndGV4dCc7XG5cbiAgZ2V0IGxhYmVsKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuY29uZmlnLmxhYmVsO1xuICB9XG5cbiAgZ2V0IHBsYWNlaG9sZGVyKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuY29uZmlnLnBsYWNlaG9sZGVyIHx8ICdFbnRlciB0ZXh0JztcbiAgfVxufVxuXG5leHBvcnQgaW50ZXJmYWNlIFNlYXJjaFRleHRDb25maWcgZXh0ZW5kcyBCYXNlU2VhcmNoQ29tcG9uZW50Q29uZmlnIHsgfSJdfQ==
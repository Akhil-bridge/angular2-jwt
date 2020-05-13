import { __decorate, __metadata, __param } from "tslib";
import { NgModule, Optional, SkipSelf } from '@angular/core';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { JwtInterceptor } from './jwt.interceptor';
import { JWT_OPTIONS } from './jwtoptions.token';
import { JwtHelperService } from './jwthelper.service';
var JwtModule = /** @class */ (function () {
    function JwtModule(parentModule) {
        if (parentModule) {
            throw new Error('JwtModule is already loaded. It should only be imported in your application\'s main module.');
        }
    }
    JwtModule_1 = JwtModule;
    JwtModule.forRoot = function (options) {
        return {
            ngModule: JwtModule_1,
            providers: [
                {
                    provide: HTTP_INTERCEPTORS,
                    useClass: JwtInterceptor,
                    multi: true
                },
                options.jwtOptionsProvider ||
                    {
                        provide: JWT_OPTIONS,
                        useValue: options.config
                    },
                JwtHelperService
            ]
        };
    };
    var JwtModule_1;
    JwtModule.ctorParameters = function () { return [
        { type: JwtModule, decorators: [{ type: Optional }, { type: SkipSelf }] }
    ]; };
    JwtModule = JwtModule_1 = __decorate([
        NgModule(),
        __param(0, Optional()), __param(0, SkipSelf()),
        __metadata("design:paramtypes", [JwtModule])
    ], JwtModule);
    return JwtModule;
}());
export { JwtModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW5ndWxhci1qd3QubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGF1dGgwL2FuZ3VsYXItand0LyIsInNvdXJjZXMiOlsibGliL2FuZ3VsYXItand0Lm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFFBQVEsRUFBdUIsUUFBUSxFQUFFLFFBQVEsRUFBWSxNQUFNLGVBQWUsQ0FBQztBQUM1RixPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUN6RCxPQUFPLEVBQUMsY0FBYyxFQUFDLE1BQU0sbUJBQW1CLENBQUM7QUFDakQsT0FBTyxFQUFDLFdBQVcsRUFBQyxNQUFNLG9CQUFvQixDQUFDO0FBQy9DLE9BQU8sRUFBQyxnQkFBZ0IsRUFBQyxNQUFNLHFCQUFxQixDQUFDO0FBaUJyRDtJQUVFLG1CQUFvQyxZQUF1QjtRQUN6RCxJQUFJLFlBQVksRUFBRTtZQUNoQixNQUFNLElBQUksS0FBSyxDQUFDLDZGQUE2RixDQUFDLENBQUM7U0FDaEg7SUFDSCxDQUFDO2tCQU5VLFNBQVM7SUFPYixpQkFBTyxHQUFkLFVBQWUsT0FBeUI7UUFDdEMsT0FBTztZQUNMLFFBQVEsRUFBRSxXQUFTO1lBQ25CLFNBQVMsRUFBRTtnQkFDVDtvQkFDRSxPQUFPLEVBQUUsaUJBQWlCO29CQUMxQixRQUFRLEVBQUUsY0FBYztvQkFDeEIsS0FBSyxFQUFFLElBQUk7aUJBQ1o7Z0JBQ0QsT0FBTyxDQUFDLGtCQUFrQjtvQkFDMUI7d0JBQ0UsT0FBTyxFQUFFLFdBQVc7d0JBQ3BCLFFBQVEsRUFBRSxPQUFPLENBQUMsTUFBTTtxQkFDekI7Z0JBQ0QsZ0JBQWdCO2FBQ2pCO1NBQ0YsQ0FBQztJQUNKLENBQUM7OztnQkF0QmlELFNBQVMsdUJBQTlDLFFBQVEsWUFBSSxRQUFROztJQUZ0QixTQUFTO1FBRHJCLFFBQVEsRUFBRTtRQUdJLFdBQUEsUUFBUSxFQUFFLENBQUEsRUFBRSxXQUFBLFFBQVEsRUFBRSxDQUFBO3lDQUFlLFNBQVM7T0FGaEQsU0FBUyxDQXlCckI7SUFBRCxnQkFBQztDQUFBLEFBekJELElBeUJDO1NBekJZLFNBQVMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSwgTW9kdWxlV2l0aFByb3ZpZGVycywgT3B0aW9uYWwsIFNraXBTZWxmLCBQcm92aWRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBIVFRQX0lOVEVSQ0VQVE9SUyB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcclxuaW1wb3J0IHtKd3RJbnRlcmNlcHRvcn0gZnJvbSAnLi9qd3QuaW50ZXJjZXB0b3InO1xyXG5pbXBvcnQge0pXVF9PUFRJT05TfSBmcm9tICcuL2p3dG9wdGlvbnMudG9rZW4nO1xyXG5pbXBvcnQge0p3dEhlbHBlclNlcnZpY2V9IGZyb20gJy4vand0aGVscGVyLnNlcnZpY2UnO1xyXG5cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgSnd0TW9kdWxlT3B0aW9ucyB7XHJcbiAgand0T3B0aW9uc1Byb3ZpZGVyPzogUHJvdmlkZXI7XHJcbiAgY29uZmlnPzoge1xyXG4gICAgdG9rZW5HZXR0ZXI/OiAoKSA9PiBzdHJpbmcgfCBudWxsIHwgUHJvbWlzZTxzdHJpbmcgfCBudWxsPjtcclxuICAgIGhlYWRlck5hbWU/OiBzdHJpbmc7XHJcbiAgICBhdXRoU2NoZW1lPzogKCkgPT4gc3RyaW5nIHwgbnVsbCB8IFByb21pc2U8c3RyaW5nIHwgbnVsbD47XHJcbiAgICB3aGl0ZWxpc3RlZERvbWFpbnM/OiBBcnJheTxzdHJpbmcgfCBSZWdFeHA+O1xyXG4gICAgYmxhY2tsaXN0ZWRSb3V0ZXM/OiBBcnJheTxzdHJpbmcgfCBSZWdFeHA+O1xyXG4gICAgdGhyb3dOb1Rva2VuRXJyb3I/OiBib29sZWFuO1xyXG4gICAgc2tpcFdoZW5FeHBpcmVkPzogYm9vbGVhbjtcclxuICB9O1xyXG59XHJcblxyXG5ATmdNb2R1bGUoKVxyXG5leHBvcnQgY2xhc3MgSnd0TW9kdWxlIHtcclxuXHJcbiAgY29uc3RydWN0b3IoQE9wdGlvbmFsKCkgQFNraXBTZWxmKCkgcGFyZW50TW9kdWxlOiBKd3RNb2R1bGUpIHtcclxuICAgIGlmIChwYXJlbnRNb2R1bGUpIHtcclxuICAgICAgdGhyb3cgbmV3IEVycm9yKCdKd3RNb2R1bGUgaXMgYWxyZWFkeSBsb2FkZWQuIEl0IHNob3VsZCBvbmx5IGJlIGltcG9ydGVkIGluIHlvdXIgYXBwbGljYXRpb25cXCdzIG1haW4gbW9kdWxlLicpO1xyXG4gICAgfVxyXG4gIH1cclxuICBzdGF0aWMgZm9yUm9vdChvcHRpb25zOiBKd3RNb2R1bGVPcHRpb25zKTogTW9kdWxlV2l0aFByb3ZpZGVyczxKd3RNb2R1bGU+IHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIG5nTW9kdWxlOiBKd3RNb2R1bGUsXHJcbiAgICAgIHByb3ZpZGVyczogW1xyXG4gICAgICAgIHtcclxuICAgICAgICAgIHByb3ZpZGU6IEhUVFBfSU5URVJDRVBUT1JTLFxyXG4gICAgICAgICAgdXNlQ2xhc3M6IEp3dEludGVyY2VwdG9yLFxyXG4gICAgICAgICAgbXVsdGk6IHRydWVcclxuICAgICAgICB9LFxyXG4gICAgICAgIG9wdGlvbnMuand0T3B0aW9uc1Byb3ZpZGVyIHx8XHJcbiAgICAgICAge1xyXG4gICAgICAgICAgcHJvdmlkZTogSldUX09QVElPTlMsXHJcbiAgICAgICAgICB1c2VWYWx1ZTogb3B0aW9ucy5jb25maWdcclxuICAgICAgICB9LFxyXG4gICAgICAgIEp3dEhlbHBlclNlcnZpY2VcclxuICAgICAgXVxyXG4gICAgfTtcclxuICB9XHJcbn1cclxuIl19
var JwtModule_1;
import { __decorate, __metadata, __param } from "tslib";
import { NgModule, Optional, SkipSelf } from '@angular/core';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { JwtInterceptor } from './jwt.interceptor';
import { JWT_OPTIONS } from './jwtoptions.token';
import { JwtHelperService } from './jwthelper.service';
let JwtModule = JwtModule_1 = class JwtModule {
    constructor(parentModule) {
        if (parentModule) {
            throw new Error('JwtModule is already loaded. It should only be imported in your application\'s main module.');
        }
    }
    static forRoot(options) {
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
    }
};
JwtModule.ctorParameters = () => [
    { type: JwtModule, decorators: [{ type: Optional }, { type: SkipSelf }] }
];
JwtModule = JwtModule_1 = __decorate([
    NgModule(),
    __param(0, Optional()), __param(0, SkipSelf()),
    __metadata("design:paramtypes", [JwtModule])
], JwtModule);
export { JwtModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW5ndWxhci1qd3QubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGF1dGgwL2FuZ3VsYXItand0LyIsInNvdXJjZXMiOlsibGliL2FuZ3VsYXItand0Lm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQXVCLFFBQVEsRUFBRSxRQUFRLEVBQVksTUFBTSxlQUFlLENBQUM7QUFDNUYsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDekQsT0FBTyxFQUFDLGNBQWMsRUFBQyxNQUFNLG1CQUFtQixDQUFDO0FBQ2pELE9BQU8sRUFBQyxXQUFXLEVBQUMsTUFBTSxvQkFBb0IsQ0FBQztBQUMvQyxPQUFPLEVBQUMsZ0JBQWdCLEVBQUMsTUFBTSxxQkFBcUIsQ0FBQztBQWlCckQsSUFBYSxTQUFTLGlCQUF0QixNQUFhLFNBQVM7SUFFcEIsWUFBb0MsWUFBdUI7UUFDekQsSUFBSSxZQUFZLEVBQUU7WUFDaEIsTUFBTSxJQUFJLEtBQUssQ0FBQyw2RkFBNkYsQ0FBQyxDQUFDO1NBQ2hIO0lBQ0gsQ0FBQztJQUNELE1BQU0sQ0FBQyxPQUFPLENBQUMsT0FBeUI7UUFDdEMsT0FBTztZQUNMLFFBQVEsRUFBRSxXQUFTO1lBQ25CLFNBQVMsRUFBRTtnQkFDVDtvQkFDRSxPQUFPLEVBQUUsaUJBQWlCO29CQUMxQixRQUFRLEVBQUUsY0FBYztvQkFDeEIsS0FBSyxFQUFFLElBQUk7aUJBQ1o7Z0JBQ0QsT0FBTyxDQUFDLGtCQUFrQjtvQkFDMUI7d0JBQ0UsT0FBTyxFQUFFLFdBQVc7d0JBQ3BCLFFBQVEsRUFBRSxPQUFPLENBQUMsTUFBTTtxQkFDekI7Z0JBQ0QsZ0JBQWdCO2FBQ2pCO1NBQ0YsQ0FBQztJQUNKLENBQUM7Q0FDRixDQUFBOztZQXZCbUQsU0FBUyx1QkFBOUMsUUFBUSxZQUFJLFFBQVE7O0FBRnRCLFNBQVM7SUFEckIsUUFBUSxFQUFFO0lBR0ksV0FBQSxRQUFRLEVBQUUsQ0FBQSxFQUFFLFdBQUEsUUFBUSxFQUFFLENBQUE7cUNBQWUsU0FBUztHQUZoRCxTQUFTLENBeUJyQjtTQXpCWSxTQUFTIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUsIE1vZHVsZVdpdGhQcm92aWRlcnMsIE9wdGlvbmFsLCBTa2lwU2VsZiwgUHJvdmlkZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgSFRUUF9JTlRFUkNFUFRPUlMgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XHJcbmltcG9ydCB7Snd0SW50ZXJjZXB0b3J9IGZyb20gJy4vand0LmludGVyY2VwdG9yJztcclxuaW1wb3J0IHtKV1RfT1BUSU9OU30gZnJvbSAnLi9qd3RvcHRpb25zLnRva2VuJztcclxuaW1wb3J0IHtKd3RIZWxwZXJTZXJ2aWNlfSBmcm9tICcuL2p3dGhlbHBlci5zZXJ2aWNlJztcclxuXHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIEp3dE1vZHVsZU9wdGlvbnMge1xyXG4gIGp3dE9wdGlvbnNQcm92aWRlcj86IFByb3ZpZGVyO1xyXG4gIGNvbmZpZz86IHtcclxuICAgIHRva2VuR2V0dGVyPzogKCkgPT4gc3RyaW5nIHwgbnVsbCB8IFByb21pc2U8c3RyaW5nIHwgbnVsbD47XHJcbiAgICBoZWFkZXJOYW1lPzogc3RyaW5nO1xyXG4gICAgYXV0aFNjaGVtZT86ICgpID0+IHN0cmluZyB8IG51bGwgfCBQcm9taXNlPHN0cmluZyB8IG51bGw+O1xyXG4gICAgd2hpdGVsaXN0ZWREb21haW5zPzogQXJyYXk8c3RyaW5nIHwgUmVnRXhwPjtcclxuICAgIGJsYWNrbGlzdGVkUm91dGVzPzogQXJyYXk8c3RyaW5nIHwgUmVnRXhwPjtcclxuICAgIHRocm93Tm9Ub2tlbkVycm9yPzogYm9vbGVhbjtcclxuICAgIHNraXBXaGVuRXhwaXJlZD86IGJvb2xlYW47XHJcbiAgfTtcclxufVxyXG5cclxuQE5nTW9kdWxlKClcclxuZXhwb3J0IGNsYXNzIEp3dE1vZHVsZSB7XHJcblxyXG4gIGNvbnN0cnVjdG9yKEBPcHRpb25hbCgpIEBTa2lwU2VsZigpIHBhcmVudE1vZHVsZTogSnd0TW9kdWxlKSB7XHJcbiAgICBpZiAocGFyZW50TW9kdWxlKSB7XHJcbiAgICAgIHRocm93IG5ldyBFcnJvcignSnd0TW9kdWxlIGlzIGFscmVhZHkgbG9hZGVkLiBJdCBzaG91bGQgb25seSBiZSBpbXBvcnRlZCBpbiB5b3VyIGFwcGxpY2F0aW9uXFwncyBtYWluIG1vZHVsZS4nKTtcclxuICAgIH1cclxuICB9XHJcbiAgc3RhdGljIGZvclJvb3Qob3B0aW9uczogSnd0TW9kdWxlT3B0aW9ucyk6IE1vZHVsZVdpdGhQcm92aWRlcnM8Snd0TW9kdWxlPiB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBuZ01vZHVsZTogSnd0TW9kdWxlLFxyXG4gICAgICBwcm92aWRlcnM6IFtcclxuICAgICAgICB7XHJcbiAgICAgICAgICBwcm92aWRlOiBIVFRQX0lOVEVSQ0VQVE9SUyxcclxuICAgICAgICAgIHVzZUNsYXNzOiBKd3RJbnRlcmNlcHRvcixcclxuICAgICAgICAgIG11bHRpOiB0cnVlXHJcbiAgICAgICAgfSxcclxuICAgICAgICBvcHRpb25zLmp3dE9wdGlvbnNQcm92aWRlciB8fFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIHByb3ZpZGU6IEpXVF9PUFRJT05TLFxyXG4gICAgICAgICAgdXNlVmFsdWU6IG9wdGlvbnMuY29uZmlnXHJcbiAgICAgICAgfSxcclxuICAgICAgICBKd3RIZWxwZXJTZXJ2aWNlXHJcbiAgICAgIF1cclxuICAgIH07XHJcbiAgfVxyXG59XHJcbiJdfQ==
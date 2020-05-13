import { __decorate, __metadata, __param } from "tslib";
import { Injectable, Inject } from "@angular/core";
import { JwtHelperService } from "./jwthelper.service";
import { JWT_OPTIONS } from "./jwtoptions.token";
import { mergeMap } from "rxjs/operators";
import { parse } from "url";
import { from } from "rxjs";
var JwtInterceptor = /** @class */ (function () {
    function JwtInterceptor(config, jwtHelper) {
        this.jwtHelper = jwtHelper;
        this.tokenGetter = config.tokenGetter;
        this.headerName = config.headerName || "Authorization";
        this.authScheme = config.authScheme;
        this.whitelistedDomains = config.whitelistedDomains || [];
        this.blacklistedRoutes = config.blacklistedRoutes || [];
        this.throwNoTokenError = config.throwNoTokenError || false;
        this.skipWhenExpired = config.skipWhenExpired;
    }
    JwtInterceptor.prototype.isWhitelistedDomain = function (request) {
        var requestUrl = parse(request.url, false, true);
        return (requestUrl.hostname === null ||
            this.whitelistedDomains.findIndex(function (domain) {
                return typeof domain === "string"
                    ? domain === requestUrl.hostname
                    : domain instanceof RegExp
                        ? domain.test(requestUrl.hostname)
                        : false;
            }) > -1);
    };
    JwtInterceptor.prototype.isBlacklistedRoute = function (request) {
        var requestedUrl = parse(request.url, false, true);
        return (this.blacklistedRoutes.findIndex(function (route) {
            if (typeof route === "string") {
                var parsedRoute = parse(route, false, true);
                return (parsedRoute.hostname === requestedUrl.hostname &&
                    parsedRoute.path === requestedUrl.path);
            }
            if (route instanceof RegExp) {
                return route.test(request.url);
            }
            return false;
        }) > -1);
    };
    JwtInterceptor.prototype.handleInterception = function (token, request, next) {
        var _a;
        var tokenIsExpired = false;
        if (!token && this.throwNoTokenError) {
            throw new Error("Could not get token from tokenGetter function.");
        }
        if (this.skipWhenExpired) {
            tokenIsExpired = token ? this.jwtHelper.isTokenExpired(token) : true;
        }
        if (token && tokenIsExpired && this.skipWhenExpired) {
            request = request.clone();
        }
        else if (token) {
            request = request.clone({
                setHeaders: (_a = {},
                    _a[this.headerName] = "" + this.authScheme() + token,
                    _a),
            });
        }
        return next.handle(request);
    };
    JwtInterceptor.prototype.intercept = function (request, next) {
        var _this = this;
        if (!this.isWhitelistedDomain(request) ||
            this.isBlacklistedRoute(request)) {
            return next.handle(request);
        }
        var token = this.tokenGetter();
        if (token instanceof Promise) {
            return from(token).pipe(mergeMap(function (asyncToken) {
                return _this.handleInterception(asyncToken, request, next);
            }));
        }
        else {
            return this.handleInterception(token, request, next);
        }
    };
    JwtInterceptor.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: Inject, args: [JWT_OPTIONS,] }] },
        { type: JwtHelperService }
    ]; };
    JwtInterceptor = __decorate([
        Injectable(),
        __param(0, Inject(JWT_OPTIONS)),
        __metadata("design:paramtypes", [Object, JwtHelperService])
    ], JwtInterceptor);
    return JwtInterceptor;
}());
export { JwtInterceptor };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiand0LmludGVyY2VwdG9yLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGF1dGgwL2FuZ3VsYXItand0LyIsInNvdXJjZXMiOlsibGliL2p3dC5pbnRlcmNlcHRvci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFPbkQsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDdkQsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBRWpELE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUMxQyxPQUFPLEVBQUUsS0FBSyxFQUFFLE1BQU0sS0FBSyxDQUFDO0FBQzVCLE9BQU8sRUFBRSxJQUFJLEVBQWMsTUFBTSxNQUFNLENBQUM7QUFHeEM7SUFTRSx3QkFDdUIsTUFBVyxFQUN6QixTQUEyQjtRQUEzQixjQUFTLEdBQVQsU0FBUyxDQUFrQjtRQUVsQyxJQUFJLENBQUMsV0FBVyxHQUFHLE1BQU0sQ0FBQyxXQUFXLENBQUM7UUFDdEMsSUFBSSxDQUFDLFVBQVUsR0FBRyxNQUFNLENBQUMsVUFBVSxJQUFJLGVBQWUsQ0FBQztRQUN2RCxJQUFJLENBQUMsVUFBVSxHQUFHLE1BQU0sQ0FBQyxVQUFVLENBQUM7UUFDcEMsSUFBSSxDQUFDLGtCQUFrQixHQUFHLE1BQU0sQ0FBQyxrQkFBa0IsSUFBSSxFQUFFLENBQUM7UUFDMUQsSUFBSSxDQUFDLGlCQUFpQixHQUFHLE1BQU0sQ0FBQyxpQkFBaUIsSUFBSSxFQUFFLENBQUM7UUFDeEQsSUFBSSxDQUFDLGlCQUFpQixHQUFHLE1BQU0sQ0FBQyxpQkFBaUIsSUFBSSxLQUFLLENBQUM7UUFDM0QsSUFBSSxDQUFDLGVBQWUsR0FBRyxNQUFNLENBQUMsZUFBZSxDQUFDO0lBQ2hELENBQUM7SUFFRCw0Q0FBbUIsR0FBbkIsVUFBb0IsT0FBeUI7UUFDM0MsSUFBTSxVQUFVLEdB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QyxJQUFJLEtBQUssWUFBWSxPQUFPLEVBQUU7WUFDNUIsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsSUFBSSxDQUNyQixRQUFRLENBQUMsVUFBQyxVQUF5QjtnQkFDakMsT0FBTyxLQUFJLENBQUMsa0JBQWtCLENBQUMsVUFBVSxFQUFFLE9BQU8sRUFBRSxJQUFJLENBQUMsQ0FBQztZQUM1RCxDQUFDLENBQUMsQ0FDSCxDQUFDO1NBQ0g7YUFBTTtZQUNMLE9BQU8sSUFBSSxDQUFDLGtCQUFrQixDQUFDLEtBQUssRUFBRSxPQUFPLEVBQUUsSUFBSSxDQUFDLENBQUM7U0FDdEQ7SUFDSCxDQUFDOztnREFqR0UsTUFBTSxTQUFDLFdBQVc7Z0JBQ0QsZ0JBQWdCOztJQVh6QixjQUFjO1FBRDFCLFVBQVUsRUFBRTtRQVdSLFdBQUEsTUFBTSxDQUFDLFdBQVcsQ0FBQyxDQUFBO2lEQUNGLGdCQUFnQjtPQVh6QixjQUFjLENBNEcxQjtJQUFELHFCQUFDO0NBQUEsQUE1R0QsSUE0R0M7U0E1R1ksY0FBYyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUsIEluamVjdCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7XHJcbiAgSHR0cFJlcXVlc3QsXHJcbiAgSHR0cEhhbmRsZXIsXHJcbiAgSHR0cEV2ZW50LFxyXG4gIEh0dHBJbnRlcmNlcHRvcixcclxufSBmcm9tIFwiQGFuZ3VsYXIvY29tbW9uL2h0dHBcIjtcclxuaW1wb3J0IHsgSnd0SGVscGVyU2VydmljZSB9IGZyb20gXCIuL2p3dGhlbHBlci5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7IEpXVF9PUFRJT05TIH0gZnJvbSBcIi4vand0b3B0aW9ucy50b2tlblwiO1xyXG5cclxuaW1wb3J0IHsgbWVyZ2VNYXAgfSBmcm9tIFwicnhqcy9vcGVyYXRvcnNcIjtcclxuaW1wb3J0IHsgcGFyc2UgfSBmcm9tIFwidXJsXCI7XHJcbmltcG9ydCB7IGZyb20sIE9ic2VydmFibGUgfSBmcm9tIFwicnhqc1wiO1xyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgSnd0SW50ZXJjZXB0b3IgaW1wbGVtZW50cyBIdHRwSW50ZXJjZXB0b3Ige1xyXG4gIHRva2VuR2V0dGVyOiAoKSA9PiBzdHJpbmcgfCBudWxsIHwgUHJvbWlzZTxzdHJpbmcgfCBudWxsPjtcclxuICBoZWFkZXJOYW1lOiBzdHJpbmc7XHJcbiAgYXV0aFNjaGVtZTogKCkgPT4gc3RyaW5nIHwgbnVsbCB8IFByb21pc2U8c3RyaW5nIHwgbnVsbD47XHJcbiAgd2hpdGVsaXN0ZWREb21haW5zOiBBcnJheTxzdHJpbmcgfCBSZWdFeHA+O1xyXG4gIGJsYWNrbGlzdGVkUm91dGVzOiBBcnJheTxzdHJpbmcgfCBSZWdFeHA+O1xyXG4gIHRocm93Tm9Ub2tlbkVycm9yOiBib29sZWFuO1xyXG4gIHNraXBXaGVuRXhwaXJlZDogYm9vbGVhbjtcclxuXHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBASW5qZWN0KEpXVF9PUFRJT05TKSBjb25maWc6IGFueSxcclxuICAgIHB1YmxpYyBqd3RIZWxwZXI6IEp3dEhlbHBlclNlcnZpY2VcclxuICApIHtcclxuICAgIHRoaXMudG9rZW5HZXR0ZXIgPSBjb25maWcudG9rZW5HZXR0ZXI7XHJcbiAgICB0aGlzLmhlYWRlck5hbWUgPSBjb25maWcuaGVhZGVyTmFtZSB8fCBcIkF1dGhvcml6YXRpb25cIjtcclxuICAgIHRoaXMuYXV0aFNjaGVtZSA9IGNvbmZpZy5hdXRoU2NoZW1lO1xyXG4gICAgdGhpcy53aGl0ZWxpc3RlZERvbWFpbnMgPSBjb25maWcud2hpdGVsaXN0ZWREb21haW5zIHx8IFtdO1xyXG4gICAgdGhpcy5ibGFja2xpc3RlZFJvdXRlcyA9IGNvbmZpZy5ibGFja2xpc3RlZFJvdXRlcyB8fCBbXTtcclxuICAgIHRoaXMudGhyb3dOb1Rva2VuRXJyb3IgPSBjb25maWcudGhyb3dOb1Rva2VuRXJyb3IgfHwgZmFsc2U7XHJcbiAgICB0aGlzLnNraXBXaGVuRXhwaXJlZCA9IGNvbmZpZy5za2lwV2hlbkV4cGlyZWQ7XHJcbiAgfVxyXG5cclxuICBpc1doaXRlbGlzdGVkRG9tYWluKHJlcXVlc3Q6IEh0dHBSZXF1ZXN0PGFueT4pOiBib29sZWFuIHtcclxuICAgIGNvbnN0IHJlcXVlc3RVcmw6IGFueSA9IHBhcnNlKHJlcXVlc3QudXJsLCBmYWxzZSwgdHJ1ZSk7XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgcmVxdWVzdFVybC5ob3N0bmFtZSA9PT0gbnVsbCB8fFxyXG4gICAgICB0aGlzLndoaXRlbGlzdGVkRG9tYWlucy5maW5kSW5kZXgoKGRvbWFpbikgPT5cclxuICAgICAgICB0eXBlb2YgZG9tYWluID09PSBcInN0cmluZ1wiXHJcbiAgICAgICAgICA/IGRvbWFpbiA9PT0gcmVxdWVzdFVybC5ob3N0bmFtZVxyXG4gICAgICAgICAgOiBkb21haW4gaW5zdGFuY2VvZiBSZWdFeHBcclxuICAgICAgICAgID8gZG9tYWluLnRlc3QocmVxdWVzdFVybC5ob3N0bmFtZSlcclxuICAgICAgICAgIDogZmFsc2VcclxuICAgICAgKSA+IC0xXHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgaXNCbGFja2xpc3RlZFJvdXRlKHJlcXVlc3Q6IEh0dHBSZXF1ZXN0PGFueT4pOiBib29sZWFuIHtcclxuICAgIGNvbnN0IHJlcXVlc3RlZFVybCA9IHBhcnNlKHJlcXVlc3QudXJsLCBmYWxzZSwgdHJ1ZSk7XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgdGhpcy5ibGFja2xpc3RlZFJvdXRlcy5maW5kSW5kZXgoKHJvdXRlOiBzdHJpbmcgfCBSZWdFeHApID0+IHtcclxuICAgICAgICBpZiAodHlwZW9mIHJvdXRlID09PSBcInN0cmluZ1wiKSB7XHJcbiAgICAgICAgICBjb25zdCBwYXJzZWRSb3V0ZSA9IHBhcnNlKHJvdXRlLCBmYWxzZSwgdHJ1ZSk7XHJcbiAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICBwYXJzZWRSb3V0ZS5ob3N0bmFtZSA9PT0gcmVxdWVzdGVkVXJsLmhvc3RuYW1lICYmXHJcbiAgICAgICAgICAgIHBhcnNlZFJvdXRlLnBhdGggPT09IHJlcXVlc3RlZFVybC5wYXRoXHJcbiAgICAgICAgICApO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHJvdXRlIGluc3RhbmNlb2YgUmVnRXhwKSB7XHJcbiAgICAgICAgICByZXR1cm4gcm91dGUudGVzdChyZXF1ZXN0LnVybCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgIH0pID4gLTFcclxuICAgICk7XHJcbiAgfVxyXG5cclxuICBoYW5kbGVJbnRlcmNlcHRpb24oXHJcbiAgICB0b2tlbjogc3RyaW5nIHwgbnVsbCxcclxuICAgIHJlcXVlc3Q6IEh0dHBSZXF1ZXN0PGFueT4sXHJcbiAgICBuZXh0OiBIdHRwSGFuZGxlclxyXG4gICkge1xyXG4gICAgbGV0IHRva2VuSXNFeHBpcmVkID0gZmFsc2U7XHJcblxyXG4gICAgaWYgKCF0b2tlbiAmJiB0aGlzLnRocm93Tm9Ub2tlbkVycm9yKSB7XHJcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkIG5vdCBnZXQgdG9rZW4gZnJvbSB0b2tlbkdldHRlciBmdW5jdGlvbi5cIik7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHRoaXMuc2tpcFdoZW5FeHBpcmVkKSB7XHJcbiAgICAgIHRva2VuSXNFeHBpcmVkID0gdG9rZW4gPyB0aGlzLmp3dEhlbHBlci5pc1Rva2VuRXhwaXJlZCh0b2tlbikgOiB0cnVlO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICh0b2tlbiAmJiB0b2tlbklzRXhwaXJlZCAmJiB0aGlzLnNraXBXaGVuRXhwaXJlZCkge1xyXG4gICAgICByZXF1ZXN0ID0gcmVxdWVzdC5jbG9uZSgpO1xyXG4gICAgfSBlbHNlIGlmICh0b2tlbikge1xyXG4gICAgICByZXF1ZXN0ID0gcmVxdWVzdC5jbG9uZSh7XHJcbiAgICAgICAgc2V0SGVhZGVyczoge1xyXG4gICAgICAgICAgW3RoaXMuaGVhZGVyTmFtZV06IGAke3RoaXMuYXV0aFNjaGVtZSgpfSR7dG9rZW59YCxcclxuICAgICAgICB9LFxyXG4gICAgICB9KTtcclxuICAgIH1cclxuICAgIHJldHVybiBuZXh0LmhhbmRsZShyZXF1ZXN0KTtcclxuICB9XHJcblxyXG4gIGludGVyY2VwdChcclxuICAgIHJlcXVlc3Q6IEh0dHBSZXF1ZXN0PGFueT4sXHJcbiAgICBuZXh0OiBIdHRwSGFuZGxlclxyXG4gICk6IE9ic2VydmFibGU8SHR0cEV2ZW50PGFueT4+IHtcclxuICAgIGlmIChcclxuICAgICAgIXRoaXMuaXNXaGl0ZWxpc3RlZERvbWFpbihyZXF1ZXN0KSB8fFxyXG4gICAgICB0aGlzLmlzQmxhY2tsaXN0ZWRSb3V0ZShyZXF1ZXN0KVxyXG4gICAgKSB7XHJcbiAgICAgIHJldHVybiBuZXh0LmhhbmRsZShyZXF1ZXN0KTtcclxuICAgIH1cclxuICAgIGNvbnN0IHRva2VuID0gdGhpcy50b2tlbkdldHRlcigpO1xyXG5cclxuICAgIGlmICh0b2tlbiBpbnN0YW5jZW9mIFByb21pc2UpIHtcclxuICAgICAgcmV0dXJuIGZyb20odG9rZW4pLnBpcGUoXHJcbiAgICAgICAgbWVyZ2VNYXAoKGFzeW5jVG9rZW46IHN0cmluZyB8IG51bGwpID0+IHtcclxuICAgICAgICAgIHJldHVybiB0aGlzLmhhbmRsZUludGVyY2VwdGlvbihhc3luY1Rva2VuLCByZXF1ZXN0LCBuZXh0KTtcclxuICAgICAgICB9KVxyXG4gICAgICApO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcmV0dXJuIHRoaXMuaGFuZGxlSW50ZXJjZXB0aW9uKHRva2VuLCByZXF1ZXN0LCBuZXh0KTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIl19
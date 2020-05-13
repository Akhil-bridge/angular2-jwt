// tslint:disable:no-bitwise
import { __decorate, __metadata, __param } from "tslib";
import { Injectable, Inject } from '@angular/core';
import { JWT_OPTIONS } from './jwtoptions.token';
var JwtHelperService = /** @class */ (function () {
    function JwtHelperService(config) {
        if (config === void 0) { config = null; }
        this.tokenGetter = config && config.tokenGetter || function () { };
    }
    JwtHelperService.prototype.urlBase64Decode = function (str) {
        var output = str.replace(/-/g, '+').replace(/_/g, '/');
        switch (output.length % 4) {
            case 0: {
                break;
            }
            case 2: {
                output += '==';
                break;
            }
            case 3: {
                output += '=';
                break;
            }
            default: {
                throw new Error('Illegal base64url string!');
            }
        }
        return this.b64DecodeUnicode(output);
    };
    // credits for decoder goes to https://github.com/atk
    JwtHelperService.prototype.b64decode = function (str) {
        var chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';
        var output = '';
        str = String(str).replace(/=+$/, '');
        if (str.length % 4 === 1) {
            throw new Error('\'atob\' failed: The string to be decoded is not correctly encoded.');
        }
        for (
        // initialize result and counters
        var bc = 0, bs = void 0, buffer = void 0, idx = 0; 
        // get next character
        (buffer = str.charAt(idx++)); 
        // character found in table? initialize bit storage and add its ascii value;
        ~buffer &&
            ((bs = bc % 4 ? bs * 64 + buffer : buffer),
                // and if not first of each 4 characters,
                // convert the first 8 bits to one ascii character
                bc++ % 4)
            ? (output += String.fromCharCode(255 & (bs >> ((-2 * bc) & 6))))
            : 0) {
            // try to find character in table (0-63, not found => -1)
            buffer = chars.indexOf(buffer);
        }
        return output;
    };
    JwtHelperService.prototype.b64DecodeUnicode = function (str) {
        return decodeURIComponent(Array.prototype.map
            .call(this.b64decode(str), function (c) {
            return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
        })
            .join(''));
    };
    JwtHelperService.prototype.decodeToken = function (token) {
        if (token === void 0) { token = this.tokenGetter(); }
        if (!token || token === '') {
            return null;
        }
        var parts = token.split('.');
        if (parts.length !== 3) {
            throw new Error('The inspected token doesn\'t appear to be a JWT. Check to make sure it has three parts and see https://jwt.io for more.');
        }
        var decoded = this.urlBase64Decode(parts[1]);
        if (!decoded) {
            throw new Error('Cannot decode the token.');
        }
        return JSON.parse(decoded);
    };
    JwtHelperService.prototype.getTokenExpirationDate = function (token) {
        if (token === void 0) { token = this.tokenGetter(); }
        var decoded;
        decoded = this.decodeToken(token);
        if (!decoded || !decoded.hasOwnProperty('exp')) {
            return null;
        }
        var date = new Date(0);
        date.setUTCSeconds(decoded.exp);
        return date;
    };
    JwtHelperService.prototype.isTokenExpired = function (token, offsetSeconds) {
        if (token === void 0) { token = this.tokenGetter(); }
        if (!token || token === '') {
            return true;
        }
        var date = this.getTokenExpirationDate(token);
        offsetSeconds = offsetSeconds || 0;
        if (date === null) {
            return false;
        }
        return !(date.valueOf() > new Date().valueOf() + offsetSeconds * 1000);
    };
    JwtHelperService.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: Inject, args: [JWT_OPTIONS,] }] }
    ]; };
    JwtHelperService = __decorate([
        Injectable(),
        __param(0, Inject(JWT_OPTIONS)),
        __metadata("design:paramtypes", [Object])
    ], JwtHelperService);
    return JwtHelperService;
}());
export { JwtHelperService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiand0aGVscGVyLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AYXV0aDAvYW5ndWxhci1qd3QvIiwic291cmNlcyI6WyJsaWIvand0aGVscGVyLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsNEJBQTRCOztBQUU1QixPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNuRCxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFHakQ7SUFHRSwwQkFBaUMsTUFBYTtRQUFiLHVCQUFBLEVBQUEsYUFBYTtRQUM1QyxJQUFJLENBQUMsV0FBVyxHQUFHLE1BQU0sSUFBSSxNQUFNLENBQUMsV0FBVyxJQUFJLGNBQVksQ0FBQyxDQUFDO0lBQ25FLENBQUM7SUFFTSwwQ0FBZSxHQUF0QixVQUF1QixHQUFXO1FBQ2hDLElBQUksTUFBTSxHQUFHLEdBQUcsQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFFLEdBQUcsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsR0FBRyxDQUFDLENBQUM7UUFDdkQsUUFBUSxNQUFNLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRTtZQUN6QixLQUFLLENBQUMsQ0FBQyxDQUFDO2dCQUNOLE1BQU07YUFDUDtZQUNELEtBQUssQ0FBQyxDQUFDLENBQUM7Z0JBQ04sTUFBTSxJQUFJLElBQUksQ0FBQztnQkFDZixNQUFNO2FBQ1A7WUFDRCxLQUFLLENBQUMsQ0FBQyxDQUFDO2dCQUNOLE1BQU0sSUFBSSxHQUFHLENBQUM7Z0JBQ2QsTUFBTTthQUNQO1lBQ0QsT0FBTyxDQUFDLENBQUM7Z0JBQ1AsTUFBTSxJQUFJLEtBQUssQ0FBQywyQkFBMkIsQ0FBQyxDQUFDO2FBQzlDO1NBQ0Y7UUFDRCxPQUFPLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUN2QyxDQUFDO0lBRUQscURBQXFEO0lBQzdDLG9DQUFTLEdBQWpCLFVBQWtCLEdBQVc7UUFD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QUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUVsQyxJQUFJLENBQUMsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLGNBQWMsQ0FBQyxLQUFLLENBQUMsRUFBRTtZQUM5QyxPQUFPLElBQUksQ0FBQztTQUNiO1FBRUQsSUFBTSxJQUFJLEdBQUcsSUFBSSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDekIsSUFBSSxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUM7UUFFaEMsT0FBTyxJQUFJLENBQUM7SUFDZCxDQUFDO0lBRU0seUNBQWMsR0FBckIsVUFBc0IsS0FBa0MsRUFBRSxhQUFzQjtRQUExRCxzQkFBQSxFQUFBLFFBQWdCLElBQUksQ0FBQyxXQUFXLEVBQUU7UUFDdEQsSUFBSSxDQUFDLEtBQUssSUFBSSxLQUFLLEtBQUssRUFBRSxFQUFFO1lBQ3hCLE9BQU8sSUFBSSxDQUFDO1NBQ2Y7UUFDRCxJQUFNLElBQUksR0FBRyxJQUFJLENBQUMsc0JBQXNCLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDaEQsYUFBYSxHQUFHLGFBQWEsSUFBSSxDQUFDLENBQUM7UUFFbkMsSUFBSSxJQUFJLEtBQUssSUFBSSxFQUFFO1lBQ2pCLE9BQU8sS0FBSyxDQUFDO1NBQ2Q7UUFFRCxPQUFPLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLEdBQUcsSUFBSSxJQUFJLEVBQUUsQ0FBQyxPQUFPLEVBQUUsR0FBRyxhQUFhLEdBQUcsSUFBSSxDQUFDLENBQUM7SUFDekUsQ0FBQzs7Z0RBdEhZLE1BQU0sU0FBQyxXQUFXOztJQUhwQixnQkFBZ0I7UUFENUIsVUFBVSxFQUFFO1FBSUUsV0FBQSxNQUFNLENBQUMsV0FBVyxDQUFDLENBQUE7O09BSHJCLGdCQUFnQixDQTBINUI7SUFBRCx1QkFBQztDQUFBLEFBMUhELElBMEhDO1NBMUhZLGdCQUFnQiIsInNvdXJjZXNDb250ZW50IjpbIi8vIHRzbGludDpkaXNhYmxlOm5vLWJpdHdpc2VcclxuXHJcbmltcG9ydCB7IEluamVjdGFibGUsIEluamVjdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBKV1RfT1BUSU9OUyB9IGZyb20gJy4vand0b3B0aW9ucy50b2tlbic7XHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBKd3RIZWxwZXJTZXJ2aWNlIHtcclxuICB0b2tlbkdldHRlcjogKCkgPT4gc3RyaW5nO1xyXG5cclxuICBjb25zdHJ1Y3RvcihASW5qZWN0KEpXVF9PUFRJT05TKSBjb25maWcgPSBudWxsKSB7XHJcbiAgICB0aGlzLnRva2VuR2V0dGVyID0gY29uZmlnICYmIGNvbmZpZy50b2tlbkdldHRlciB8fCBmdW5jdGlvbigpIHt9O1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHVybEJhc2U2NERlY29kZShzdHI6IHN0cmluZyk6IHN0cmluZyB7XHJcbiAgICBsZXQgb3V0cHV0ID0gc3RyLnJlcGxhY2UoLy0vZywgJysnKS5yZXBsYWNlKC9fL2csICcvJyk7XHJcbiAgICBzd2l0Y2ggKG91dHB1dC5sZW5ndGggJSA0KSB7XHJcbiAgICAgIGNhc2UgMDoge1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICAgIGNhc2UgMjoge1xyXG4gICAgICAgIG91dHB1dCArPSAnPT0nO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICAgIGNhc2UgMzoge1xyXG4gICAgICAgIG91dHB1dCArPSAnPSc7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgICAgZGVmYXVsdDoge1xyXG4gICAgICAgIHRocm93IG5ldyBFcnJvcignSWxsZWdhbCBiYXNlNjR1cmwgc3RyaW5nIScpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gdGhpcy5iNjREZWNvZGVVbmljb2RlKG91dHB1dCk7XHJcbiAgfVxyXG5cclxuICAvLyBjcmVkaXRzIGZvciBkZWNvZGVyIGdvZXMgdG8gaHR0cHM6Ly9naXRodWIuY29tL2F0a1xyXG4gIHByaXZhdGUgYjY0ZGVjb2RlKHN0cjogc3RyaW5nKTogc3RyaW5nIHtcclxuICAgIGNvbnN0IGNoYXJzID1cclxuICAgICAgJ0FCQ0RFRkdISUpLTE1OT1BRUlNUVVZXWFlaYWJjZGVmZ2hpamtsbW5vcHFyc3R1dnd4eXowMTIzNDU2Nzg5Ky89JztcclxuICAgIGxldCBvdXRwdXQgPSAnJztcclxuXHJcbiAgICBzdHIgPSBTdHJpbmcoc3RyKS5yZXBsYWNlKC89KyQvLCAnJyk7XHJcblxyXG4gICAgaWYgKHN0ci5sZW5ndGggJSA0ID09PSAxKSB7XHJcbiAgICAgIHRocm93IG5ldyBFcnJvcihcclxuICAgICAgICAnXFwnYXRvYlxcJyBmYWlsZWQ6IFRoZSBzdHJpbmcgdG8gYmUgZGVjb2RlZCBpcyBub3QgY29ycmVjdGx5IGVuY29kZWQuJ1xyXG4gICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIGZvciAoXHJcbiAgICAgIC8vIGluaXRpYWxpemUgcmVzdWx0IGFuZCBjb3VudGVyc1xyXG4gICAgICBsZXQgYmMgPSAwLCBiczogYW55LCBidWZmZXI6IGFueSwgaWR4ID0gMDtcclxuICAgICAgLy8gZ2V0IG5leHQgY2hhcmFjdGVyXHJcbiAgICAgIChidWZmZXIgPSBzdHIuY2hhckF0KGlkeCsrKSk7XHJcbiAgICAgIC8vIGNoYXJhY3RlciBmb3VuZCBpbiB0YWJsZT8gaW5pdGlhbGl6ZSBiaXQgc3RvcmFnZSBhbmQgYWRkIGl0cyBhc2NpaSB2YWx1ZTtcclxuICAgICAgfmJ1ZmZlciAmJlxyXG4gICAgICAoXHJcbiAgICAgICAgKGJzID0gYmMgJSA0ID8gYnMgKiA2NCArIGJ1ZmZlciA6IGJ1ZmZlciksXHJcbiAgICAgICAgLy8gYW5kIGlmIG5vdCBmaXJzdCBvZiBlYWNoIDQgY2hhcmFjdGVycyxcclxuICAgICAgICAvLyBjb252ZXJ0IHRoZSBmaXJzdCA4IGJpdHMgdG8gb25lIGFzY2lpIGNoYXJhY3RlclxyXG4gICAgICAgIGJjKysgJSA0XHJcbiAgICAgIClcclxuICAgICAgICA/IChvdXRwdXQgKz0gU3RyaW5nLmZyb21DaGFyQ29kZSgyNTUgJiAoYnMgPj4gKCgtMiAqIGJjKSAmIDYpKSkpXHJcbiAgICAgICAgOiAwXHJcbiAgICApIHtcclxuICAgICAgLy8gdHJ5IHRvIGZpbmQgY2hhcmFjdGVyIGluIHRhYmxlICgwLTYzLCBub3QgZm91bmQgPT4gLTEpXHJcbiAgICAgIGJ1ZmZlciA9IGNoYXJzLmluZGV4T2YoYnVmZmVyKTtcclxuICAgIH1cclxuICAgIHJldHVybiBvdXRwdXQ7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGI2NERlY29kZVVuaWNvZGUoc3RyOiBhbnkpIHtcclxuICAgIHJldHVybiBkZWNvZGVVUklDb21wb25lbnQoXHJcbiAgICAgIEFycmF5LnByb3RvdHlwZS5tYXBcclxuICAgICAgICAuY2FsbCh0aGlzLmI2NGRlY29kZShzdHIpLCAoYzogYW55KSA9PiB7XHJcbiAgICAgICAgICByZXR1cm4gJyUnICsgKCcwMCcgKyBjLmNoYXJDb2RlQXQoMCkudG9TdHJpbmcoMTYpKS5zbGljZSgtMik7XHJcbiAgICAgICAgfSlcclxuICAgICAgICAuam9pbignJylcclxuICAgICk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgZGVjb2RlVG9rZW4odG9rZW46IHN0cmluZyA9IHRoaXMudG9rZW5HZXR0ZXIoKSk6IGFueSB7XHJcbiAgICBpZiAoIXRva2VuIHx8IHRva2VuID09PSAnJykge1xyXG4gICAgICByZXR1cm4gbnVsbDtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBwYXJ0cyA9IHRva2VuLnNwbGl0KCcuJyk7XHJcblxyXG4gICAgaWYgKHBhcnRzLmxlbmd0aCAhPT0gMykge1xyXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXHJcbiAgICAgICAgJ1RoZSBpbnNwZWN0ZWQgdG9rZW4gZG9lc25cXCd0IGFwcGVhciB0byBiZSBhIEpXVC4gQ2hlY2sgdG8gbWFrZSBzdXJlIGl0IGhhcyB0aHJlZSBwYXJ0cyBhbmQgc2VlIGh0dHBzOi8vand0LmlvIGZvciBtb3JlLidcclxuICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBkZWNvZGVkID0gdGhpcy51cmxCYXNlNjREZWNvZGUocGFydHNbMV0pO1xyXG4gICAgaWYgKCFkZWNvZGVkKSB7XHJcbiAgICAgIHRocm93IG5ldyBFcnJvcignQ2Fubm90IGRlY29kZSB0aGUgdG9rZW4uJyk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIEpTT04ucGFyc2UoZGVjb2RlZCk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgZ2V0VG9rZW5FeHBpcmF0aW9uRGF0ZSh0b2tlbjogc3RyaW5nID0gdGhpcy50b2tlbkdldHRlcigpKTogRGF0ZSB8IG51bGwge1xyXG4gICAgbGV0IGRlY29kZWQ6IGFueTtcclxuICAgIGRlY29kZWQgPSB0aGlzLmRlY29kZVRva2VuKHRva2VuKTtcclxuXHJcbiAgICBpZiAoIWRlY29kZWQgfHwgIWRlY29kZWQuaGFzT3duUHJvcGVydHkoJ2V4cCcpKSB7XHJcbiAgICAgIHJldHVybiBudWxsO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGRhdGUgPSBuZXcgRGF0ZSgwKTtcclxuICAgIGRhdGUuc2V0VVRDU2Vjb25kcyhkZWNvZGVkLmV4cCk7XHJcblxyXG4gICAgcmV0dXJuIGRhdGU7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgaXNUb2tlbkV4cGlyZWQodG9rZW46IHN0cmluZyA9IHRoaXMudG9rZW5HZXR0ZXIoKSwgb2Zmc2V0U2Vjb25kcz86IG51bWJlcik6IGJvb2xlYW4ge1xyXG4gICAgaWYgKCF0b2tlbiB8fCB0b2tlbiA9PT0gJycpIHtcclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH1cclxuICAgIGNvbnN0IGRhdGUgPSB0aGlzLmdldFRva2VuRXhwaXJhdGlvbkRhdGUodG9rZW4pO1xyXG4gICAgb2Zmc2V0U2Vjb25kcyA9IG9mZnNldFNlY29uZHMgfHwgMDtcclxuXHJcbiAgICBpZiAoZGF0ZSA9PT0gbnVsbCkge1xyXG4gICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuICEoZGF0ZS52YWx1ZU9mKCkgPiBuZXcgRGF0ZSgpLnZhbHVlT2YoKSArIG9mZnNldFNlY29uZHMgKiAxMDAwKTtcclxuICB9XHJcbn1cclxuIl19
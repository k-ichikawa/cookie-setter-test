"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CookieSetter = void 0;
class CookieSetter {
    set(key, value, set) {
        set(key, value);
        console.log('set cookie');
    }
}
exports.CookieSetter = CookieSetter;
//# sourceMappingURL=cookie.setter.js.map
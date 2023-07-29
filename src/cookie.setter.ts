export class CookieSetter {
  set(key: string, value: string, set: (key: string, value: string) => void): void {
    set(key, value);
    console.log('set cookie');
  }
}

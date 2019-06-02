export const StorageKeys = { INSTALLED_APPS: 'TESLA_APPS_INSTALLED' }

export class LocalStorageService {
  static push(key, value) {
    const existing = this.get(key)
    if (!existing) this.set(key, [value])
    else {
      if (existing.includes(value)) return
      this.set(key, [...existing, value])
    }
  }

  static set(key, value) {
    const json = JSON.stringify(value)
    localStorage.setItem(key, json)
  }

  static get(key) {
    const result = localStorage.getItem(key)
    if (result) return JSON.parse(result)
    return result
  }
}

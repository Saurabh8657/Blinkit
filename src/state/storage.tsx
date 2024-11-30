import { MMKV } from 'react-native-mmkv'


export const tokenStorage = new MMKV({
    id: 'tokenStorage',
    encryptionKey: 'blinket_token_storage'
})

export const storage = new MMKV({
    id: 'my-app-storage',
    encryptionKey: 'blinket_app_storage'
})

export const mmkvStorage = {
    setItem: (key: string, value: any) => {
        storage.set(key, value)
    },
    getItem: (key: string) => {
        const value = storage.getString(key)
        return value ?? null
    },
    removeItem: (key: string) => {
        storage.delete(key)
    },
    clear: () => {
        storage.clearAll()
    }
}

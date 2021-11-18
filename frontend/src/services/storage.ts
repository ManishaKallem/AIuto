import { Storage } from '@capacitor/storage';

export async function setStorageItem(key: string, value: any): Promise<void> {
  await Storage.set({
    key: key,
    value: JSON.stringify(value),
  });
}

export async function getStorageItem(key: string): Promise<any> {
  const item = await Storage.get({ key: key });
  return JSON.parse(item.value as string);
}

export async function removeStorageItem(key: string): Promise<void> {
  await Storage.remove({
    key: key,
  });
}

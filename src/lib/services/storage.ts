export const OWNER_STORAGE_PREFIX = "sunshine-sips-owner";

export function readJson<T>(key: string, fallback: T): T {
  if (typeof window === "undefined") {
    return fallback;
  }

  const value = window.localStorage.getItem(key);
  if (!value) {
    return fallback;
  }

  try {
    return JSON.parse(value) as T;
  } catch {
    return fallback;
  }
}

export function writeJson<T>(key: string, value: T) {
  if (typeof window === "undefined") {
    return;
  }

  window.localStorage.setItem(key, JSON.stringify(value));
  window.dispatchEvent(new CustomEvent(`${key}:changed`));
}

export function subscribeStorageKey(key: string, callback: () => void) {
  if (typeof window === "undefined") {
    return () => undefined;
  }

  const onStorage = (event: StorageEvent) => {
    if (event.key === key) {
      callback();
    }
  };

  window.addEventListener("storage", onStorage);
  window.addEventListener(`${key}:changed`, callback);

  return () => {
    window.removeEventListener("storage", onStorage);
    window.removeEventListener(`${key}:changed`, callback);
  };
}

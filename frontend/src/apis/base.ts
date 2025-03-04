type Path = string;
type Method = "GET" | "POST" | "PUT" | "DELETE";
type NextCache = number | Extract<RequestCache, "no-store" | "no-cache">;
// TODO: オプションデータの渡し方の修正と不足分の追加を行う
type Options = {
  query?: Record<string, unknown>;
  body?: Record<string, unknown> | FormData;
  headers?: Record<string, string>;
  cache?: NextCache;
}

export const customFetch = (path: Path, method: Method, options: Options) => {
  const nextCache = typeof options.cache === 'string' ? options.cache : undefined;
  const revalidate = typeof options.cache === 'number' ? { revalidate: options.cache } : undefined;

  return fetch(withApiOrigin(path), {
    method,
    headers: {
      'Content-Type': 'application/json',
      ...options.headers,
    },
    body: options.body ? JSON.stringify(options.body) : undefined, 
    cache: nextCache,
    next: revalidate,
  });
};

const withApiOrigin = (path: string) => {
  return process.env.API_ORIGIN
    ? `${process.env.API_ORIGIN}${path}`
    : `http://localhost:8080${path}`;
};
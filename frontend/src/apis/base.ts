type Path = string;
type Method = "GET" | "POST" | "PUT" | "DELETE";
// TODO: オプションデータの渡し方の修正と不足分の追加を行う
type Options = {
  query?: Record<string, unknown>;
  body?: Record<string, unknown> | FormData;
  headers?: Record<string, string>;
}

export const customFetch = (path: Path, method: Method, options: Options) => {
  return fetch(withApiOrigin(path), {
    method,
    headers: {
      'Content-Type': 'application/json',
      ...options.headers,
    },
    body: options.body ? JSON.stringify(options.body) : undefined, 
  });
};

const withApiOrigin = (path: string) => {
  return process.env.API_ORIGIN
    ? `${process.env.API_ORIGIN}${path}`
    : `http://localhost:8080${path}`;
};
// Simple API utility functions (no TanStack dependencies)

async function throwIfResNotOk(res: Response) {
  if (!res.ok) {
    const text = (await res.text()) || res.statusText;
    throw new Error(`${res.status}: ${text}`);
  }
}

export async function apiRequest(
  method: string,
  url: string,
  data?: unknown,
): Promise<Response> {
  const res = await fetch(url, {
    method,
    headers: data ? { "Content-Type": "application/json" } : {},
    body: data ? JSON.stringify(data) : undefined,
    credentials: "include",
  });

  await throwIfResNotOk(res);
  return res;
}

export async function apiGet<T>(url: string): Promise<T> {
  const res = await apiRequest("GET", url);
  return (await res.json()) as T;
}

export async function apiPost<T>(url: string, data: unknown): Promise<T> {
  const res = await apiRequest("POST", url, data);
  return (await res.json()) as T;
}

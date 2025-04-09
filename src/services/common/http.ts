const API_URL = process.env.NEXT_PUBLIC_API_URL || "";

const defaultHeaders: HeadersInit = {
  "Content-Type": "application/json",
  Accept: "application/json",
};

// Error personalizado para manejar errores HTTP
export class HttpError extends Error {
  response: Response;

  constructor(response: Response) {
    super(`HTTP error! Status: ${response.status}`);
    this.response = response;
  }
}

// Manejo genérico de respuestas HTTP
const handleResponse = async (response: Response): Promise<any> => {
  if (!response.ok) {
    throw new HttpError(response);
  }
  return response.json();
};

// Headers configurables con token del localStorage
const getUserConfigHeaders = (): HeadersInit => {
  const headers: HeadersInit = {};
  if (typeof window !== "undefined") {
    const token = localStorage.getItem("acc_token");
    if (token) {
      headers.Authorization = JSON.parse(token);
    }
  }
  return headers;
};

interface HttpOptions extends RequestInit {
  headers?: HeadersInit;
}

// Métodos HTTP
export const httpGet = async (
  endpoint: string,
  token?: string,
  options: HttpOptions = {}
): Promise<any> => {
  const headers = {
    ...defaultHeaders,
    ...getUserConfigHeaders(),
    ...(token && { Authorization: token }),
    ...options.headers,
  };

  const response = await fetch(`${API_URL}${endpoint}`, {
    ...options,
    method: "GET",
    headers,
  });

  return handleResponse(response);
};

export const httpGetRevalidate = async (
  endpoint: string,
  token: string,
  revalidateTag: string,
  options: HttpOptions = {}
): Promise<any> => {
  const headers = {
    ...defaultHeaders,
    ...getUserConfigHeaders(),
    Authorization: token,
    ...options.headers,
  };

  const response = await fetch(`${API_URL}${endpoint}`, {
    ...options,
    method: "GET",
    headers,
    next: {
      tags: [revalidateTag],
    },
  });

  return handleResponse(response);
};

export const httpPost = async (
  endpoint: string,
  body: object,
  options: HttpOptions = {}
): Promise<any> => {
  const headers = {
    ...defaultHeaders,
    ...getUserConfigHeaders(),
    ...options.headers,
  };

  const response = await fetch(`${API_URL}${endpoint}`, {
    ...options,
    method: "POST",
    headers,
    body: JSON.stringify(body),
  });

  return handleResponse(response);
};

export const httpPut = async (
  endpoint: string,
  body: object,
  options: HttpOptions = {}
): Promise<any> => {
  const headers = {
    ...defaultHeaders,
    ...getUserConfigHeaders(),
    ...options.headers,
  };

  const response = await fetch(`${API_URL}${endpoint}`, {
    ...options,
    method: "PUT",
    headers,
    body: JSON.stringify(body),
  });

  return handleResponse(response);
};

export const httpPatch = async (
  endpoint: string,
  body: object,
  options: HttpOptions = {}
): Promise<any> => {
  const headers = {
    ...defaultHeaders,
    ...getUserConfigHeaders(),
    ...options.headers,
  };

  const response = await fetch(`${API_URL}${endpoint}`, {
    ...options,
    method: "PATCH",
    headers,
    body: JSON.stringify(body),
  });

  return handleResponse(response);
};

export const httpDelete = async (
  endpoint: string,
  options: HttpOptions = {}
): Promise<any> => {
  const headers = {
    ...defaultHeaders,
    ...getUserConfigHeaders(),
    ...options.headers,
  };

  const response = await fetch(`${API_URL}${endpoint}`, {
    ...options,
    method: "DELETE",
    headers,
  });

  return handleResponse(response);
};

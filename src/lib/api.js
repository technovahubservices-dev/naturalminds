export const API_BASE_URL =
  process.env.REACT_APP_API_BASE_URL?.trim() || "http://localhost:4000/api";

export function getAuthToken() {
  if (typeof window === "undefined") {
    return "";
  }

  return (
    window.localStorage.getItem("naturalminds-token") ||
    process.env.REACT_APP_AUTH_TOKEN ||
    ""
  ).trim();
}

export function setAuthToken(token) {
  if (typeof window === "undefined") {
    return;
  }

  if (token) {
    window.localStorage.setItem("naturalminds-token", token.trim());
    return;
  }

  window.localStorage.removeItem("naturalminds-token");
}

export function buildImageSrc(image) {
  if (!image) {
    return "/placeholder.png";
  }

  if (image.startsWith("https") || image.startsWith("data:")) {
    return image;
  }

  return `data:image/jpeg;base64,${image}`;
}

export function buildProductPayload(product, quantity = 1) {
  return {
    productId: product._id || product.id || product.productId,
    name: product.name || product.title || "Unnamed product",
    description: product.description || "",
    price: Number(product.price) || 0,
    rating: product.rating != null ? Number(product.rating) : 0,
    category: product.category || "",
    image: product.image || "",
    quantity,
  };
}

export async function apiRequest(path, options = {}) {
  const {
    method = "GET",
    body,
    token,
    headers: extraHeaders = {},
  } = options;

  const headers = {
    ...extraHeaders,
  };

  if (body !== undefined) {
    headers["Content-Type"] = "application/json";
  }

  if (token) {
    headers.Authorization = `Bearer ${token}`;
  }

  const response = await fetch(`${API_BASE_URL}${path}`, {
    method,
    headers,
    body: body !== undefined ? JSON.stringify(body) : undefined,
    cache: "no-store",
  });

  let data = null;

  try {
    data = await response.json();
  } catch (error) {
    data = null;
  }

  if (!response.ok) {
    const message =
      data?.message ||
      data?.error ||
      `Request failed with status ${response.status}`;

    throw new Error(message);
  }

  return data;
}
export function formatCartSummary(cart) {
  return {
    items: Array.isArray(cart?.items) ? cart.items : [],
    totalQuantity: Number(cart?.totalQuantity) || 0,
    totalAmount: Number(cart?.totalAmount) || 0,
  };
}

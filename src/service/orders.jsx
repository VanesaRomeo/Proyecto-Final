
const API_BASE =
  (import.meta.env.VITE_API_URL?.replace(/\/+$/, "") || "http://localhost:3002") + "/api";

export async function createOrder({ token, payload }) {
  const res = await fetch(`${API_BASE}/pedidos`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`, // JWT del login
    },
    body: JSON.stringify(payload),
  });
  if (!res.ok) {
    const err = await res.json().catch(() => ({}));
    throw new Error(err?.error || "No se pudo crear el pedido");
  }
  return res.json();
}

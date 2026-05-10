const API_URL = "http://localhost:5050/api";

export async function getMenuItems() {
  const response = await fetch(`${API_URL}/menu`);
  return response.json();
}

export async function createOrder(orderData) {
  const response = await fetch(`${API_URL}/orders`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(orderData),
  });

  return response.json();
}
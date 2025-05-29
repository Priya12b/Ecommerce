// // client/src/utils/api.ts

export async function getAllProducts() {
  const res = await fetch('https://dummyjson.com/products');
  const data = await res.json();
  return data.products; // ✅ RETURN THE ARRAY ONLY
}

export async function fetchNews() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/news`);
  return res.json();
}
// src/lib/api/news.ts
export async function getAllNews() {
  const base = process.env.NEXT_PUBLIC_API_URL ?? "http://127.0.0.1:8000";
  if (!base) {
    // saat build lokal tanpa env, kembalikan array kosong
    return [];
  }

  const url = `${base}/api/news`;
  try {
    const res = await fetch(url, { next: { revalidate: 10 } });
    if (!res.ok) {
      console.warn("getAllNews: response not ok", res.status);
      return [];
    }
    return res.json();
  } catch (err) {
    console.warn("getAllNews fetch error:", err);
    return [];
  }
}

export async function getNewsBySlug(slug: string) {
  
  const base = process.env.NEXT_PUBLIC_API_URL ?? "http://127.0.0.1:8000";
  if (!base || !slug) return null;
  const url = `${base}/api/news/${slug}`;
  try {
    const res = await fetch(url, { next: { revalidate: 10 } });
    if (!res.ok) {
      console.warn("getNewsBySlug: response not ok", res.status);
      return null;
    }
    return res.json();
  } catch (err) {
    console.warn("getNewsBySlug fetch error:", err);
    return null;
  }
}

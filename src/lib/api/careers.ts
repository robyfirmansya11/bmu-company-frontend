export async function getCareerBySlug(slug: string) {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/careers/${slug}`, {
    next: { revalidate: 60 }, // ISR cache 1 menit
  });

  if (!res.ok) {
    throw new Error("Gagal mengambil data karir");
  }

  return res.json();
}

export async function getAllCareers() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/careers`, {
    next: { revalidate: 60 },
  });

  if (!res.ok) {
    throw new Error("Gagal mengambil daftar karir");
  }

  return res.json();
}

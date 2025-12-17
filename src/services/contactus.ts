export async function submitContactUs(data: {
  name: string;
  email: string;
  subject?: string;
  message: string;
}) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/contact-us`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(data),
    }
  );

  const result = await res.json();

  if (!res.ok) {
    throw new Error(result.message || "Gagal mengirim pesan");
  }

  return result;
}

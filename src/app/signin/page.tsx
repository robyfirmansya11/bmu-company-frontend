import { notFound } from "next/navigation";

// Authentication is not configured. Never expose demo credential forms.
export default function Page() {
  notFound();
}

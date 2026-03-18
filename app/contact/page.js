import Contact from "@/components/contact";
import PageShell from "@/components/page-shell";

export const metadata = {
  title: "Contact | Samson Philipo Mamuya",
};

export default function ContactPage() {
  return (
    <PageShell>
      <main className="pt-28">
        <Contact />
      </main>
    </PageShell>
  );
}

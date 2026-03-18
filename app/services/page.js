import PageShell from "@/components/page-shell";
import Services from "@/components/services";

export const metadata = {
  title: "Services | Samson Philipo Mamuya",
};

export default function ServicesPage() {
  return (
    <PageShell>
      <main className="pt-28">
        <Services />
      </main>
    </PageShell>
  );
}

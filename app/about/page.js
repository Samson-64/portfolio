import About from "@/components/about";
import PageShell from "@/components/page-shell";

export const metadata = {
  title: "About | Samson Philipo Mamuya",
};

export default function AboutPage() {
  return (
    <PageShell>
      <main className="pt-28">
        <About />
      </main>
    </PageShell>
  );
}

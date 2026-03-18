import Experience from "@/components/experience";
import PageShell from "@/components/page-shell";

export const metadata = {
  title: "Experience | Samson Philipo Mamuya",
};

export default function ExperiencePage() {
  return (
    <PageShell>
      <main className="pt-28">
        <Experience />
      </main>
    </PageShell>
  );
}

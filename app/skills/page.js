import PageShell from "@/components/page-shell";
import Skills from "@/components/skills";

export const metadata = {
  title: "Skills | Samson Philipo Mamuya",
};

export default function SkillsPage() {
  return (
    <PageShell>
      <main className="pt-28">
        <Skills />
      </main>
    </PageShell>
  );
}

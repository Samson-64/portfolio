import PageShell from "@/components/page-shell";
import Projects from "@/components/projects";

export const metadata = {
  title: "Projects | Samson Philipo Mamuya",
};

export default function ProjectsPage() {
  return (
    <PageShell>
      <main className="pt-28">
        <Projects />
      </main>
    </PageShell>
  );
}

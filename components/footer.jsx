import { siteConfig } from "@/lib/constants";

export default function Footer() {
  return (
    <footer className="border-t border-white/[0.08] py-8">
      <div className="section-shell flex flex-col gap-4 text-sm text-[rgb(var(--muted))] sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="font-heading text-base font-semibold text-[rgb(var(--text))]">{siteConfig.name}</p>
          <p>{siteConfig.title}</p>
        </div>

        <div className="flex flex-wrap items-center gap-4">
          <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>
          {siteConfig.phones.map((phone) => (
            <a key={phone} href={`tel:${phone}`}>
              {phone}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}

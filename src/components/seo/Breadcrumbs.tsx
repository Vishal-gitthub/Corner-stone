import Link from "next/link";

type Crumb = { label: string; href?: string };

export default function Breadcrumbs({ items }: { items: Crumb[] }) {
  return (
    <nav aria-label="Breadcrumb" className="container-responsive pt-28 text-sm text-blue/70">
      <ol className="flex flex-wrap gap-2">
        {items.map((item, index) => <li key={`${item.label}-${index}`} className="flex items-center gap-2">
          {index > 0 && <span aria-hidden="true">/</span>}
          {item.href ? <Link href={item.href} className="hover:text-brown hover:underline">{item.label}</Link> : <span aria-current="page">{item.label}</span>}
        </li>)}
      </ol>
    </nav>
  );
}

import StructuredData from "./StructuredData";
import { pageJsonLd, type BreadcrumbItem, type FaqItem } from "@/lib/site";

export default function PageSchema({
  path,
  title,
  description,
  breadcrumbs,
  faqs,
}: {
  path: string;
  title: string;
  description: string;
  breadcrumbs?: BreadcrumbItem[];
  faqs?: FaqItem[];
}) {
  return (
    <StructuredData
      data={pageJsonLd({ path, title, description, breadcrumbs, faqs })}
    />
  );
}

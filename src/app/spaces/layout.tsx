import { pageMetadata } from "@/lib/site";
import PageSchema from "@/components/seo/PageSchema";
import { spacesFaqs } from "@/lib/faqs";

const seoTitle = "Function Rooms & Private Event Spaces Port Melbourne | The Cornerstone";
const seoDescription =
  "Compare function rooms and private event spaces at The Cornerstone in Port Melbourne for group dining, celebrations, corporate functions and venue hire.";

export const metadata = {
  ...pageMetadata({
    title: seoTitle,
    description: seoDescription,
    path: "/spaces",
    image: "/spaces/function-room.jpeg",
  }),
  title: { absolute: seoTitle },
};

export default function Layout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <><PageSchema path="/spaces" title={seoTitle} description={seoDescription} breadcrumbs={[{ label: "Home", href: "/" }, { label: "Function spaces" }]} faqs={spacesFaqs} />{children}</>;
}

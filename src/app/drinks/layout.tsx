import PageSchema from "@/components/seo/PageSchema";
import { drinksFaqs } from "@/lib/faqs";

export default function Layout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <>
      <PageSchema
        path="/drinks"
        title="Bar Port Melbourne | Beer, Wine & Cocktails | The Cornerstone"
        description="Explore The Cornerstone bar in Port Melbourne for tap beer, wine, spritzes and highballs, with pub food, after-work drinks and relaxed weekend catch-ups."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Drinks" }]}
        faqs={drinksFaqs}
      />
      {children}
    </>
  );
}

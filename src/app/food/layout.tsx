import PageSchema from "@/components/seo/PageSchema";
import { foodFaqs } from "@/lib/faqs";

export default function Layout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <>
      <PageSchema
        path="/food"
        title="Pub Food Port Melbourne | Lunch & Dinner | The Cornerstone"
        description="Explore pub food in Port Melbourne at The Cornerstone, with sharing plates, pub classics, parmas, steaks, seafood and vegetarian choices for lunch or dinner."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Food" }]}
        faqs={foodFaqs}
      />
      {children}
    </>
  );
}

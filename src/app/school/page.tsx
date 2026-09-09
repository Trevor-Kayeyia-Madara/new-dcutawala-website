import { SchoolExperience } from "@/components/SchoolExperience";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "School — Dominion Center",
  description:
    "Dominion Center, the school of Deliverance Church Utawala on Utawala Road, Nairobi.",
  path: "/school",
});

export default function SchoolPage() {
  return <SchoolExperience />;
}

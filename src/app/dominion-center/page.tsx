import { SchoolExperience } from "@/components/SchoolExperience";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Dominion Center",
  description:
    "Dominion Center, the school of Deliverance Church Utawala on Utawala Road, Nairobi.",
  path: "/dominion-center",
});

export default function DominionCenterPage() {
  return <SchoolExperience />;
}

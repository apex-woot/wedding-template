import { AccommodationSection } from "@/components/accommodation-section";
import { DressCodeSection } from "@/components/dress-code-section";
import { FloatingNav } from "@/components/floating-nav";
import { FooterSection } from "@/components/footer-section";
import { InvitationSection } from "@/components/invitation-section";
import { LocationSection } from "@/components/location-section";
import { ProgramSection } from "@/components/program-section";
import { RsvpSection } from "@/components/rsvp-section";
import { HeroSection } from "@/components/hero-section";
import { SectionDivider } from "@/components/section-divider";
import { StoryCalendarSection } from "@/components/story-calendar-section";
import { TransferSection } from "@/components/transfer-section";
import { WeddingGiftsSection } from "@/components/wedding-gifts-section";

export default function Page() {
  return (
    <main>
      <FloatingNav />
      <HeroSection />
      <SectionDivider variant="cream" />
      <InvitationSection />
      <SectionDivider variant="linen" />
      <StoryCalendarSection />
      <SectionDivider variant="linen" />
      <LocationSection />
      <SectionDivider variant="linen" />
      <ProgramSection />
      <SectionDivider variant="linen" />
      <DressCodeSection />
      <SectionDivider variant="linen" />
      <WeddingGiftsSection />
      <SectionDivider variant="linen" />
      <TransferSection />
      <SectionDivider variant="linen" />
      <AccommodationSection />
      <SectionDivider variant="cream" />
      <RsvpSection />
      <FooterSection />
    </main>
  );
}

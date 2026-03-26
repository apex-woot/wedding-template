import { AccommodationSection } from "@/components/accommodation-section";
import { DressCodeSection } from "@/components/dress-code-section";
import { InvitationSection } from "@/components/invitation-section";
import { LocationSection } from "@/components/location-section";
import { ProgramSection } from "@/components/program-section";
import { RsvpSection } from "@/components/rsvp-section";
import { HeroSection } from "@/components/hero-section";
import { StoryCalendarSection } from "@/components/story-calendar-section";
import { TransferSection } from "@/components/transfer-section";
import { WeddingGiftsSection } from "@/components/wedding-gifts-section";

export default function Page() {
  return (
    <main>
      <HeroSection />
      <InvitationSection />
      <StoryCalendarSection />
      <LocationSection />
      <ProgramSection />
      <DressCodeSection />
      <WeddingGiftsSection />
      <TransferSection />
      <AccommodationSection />
      <RsvpSection />
    </main>
  );
}

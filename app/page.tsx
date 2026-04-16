import { AccommodationSection } from "@/components/accommodation-section";
import { BackgroundMusic } from "@/components/background-music";
import { DressCodeSection } from "@/components/dress-code-section";
import { FloatingNav } from "@/components/floating-nav";
import { FooterSection } from "@/components/footer-section";
import { InvitationSection } from "@/components/invitation-section";
import { LanguageSwitcher } from "@/components/language-switcher";
import { LocationSection } from "@/components/location-section";
import { ProgramSection } from "@/components/program-section";
import { RsvpSection } from "@/components/rsvp-section";
import { HeroSection } from "@/components/hero-section";

import { StoryCalendarSection } from "@/components/story-calendar-section";
import { TransferSection } from "@/components/transfer-section";
import { WeddingGiftsSection } from "@/components/wedding-gifts-section";

export default function Page() {
  return (
    <>
      <LanguageSwitcher />
      <BackgroundMusic>
        <main>
          <FloatingNav />
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
          <FooterSection />
        </main>
      </BackgroundMusic>
    </>
  );
}

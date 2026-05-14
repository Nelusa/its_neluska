import BrandKitChrome from "./BrandKitChrome";
import {
  ColorsSection,
  HeroSection,
  LegacyTopNav,
  ModesSection,
  MotifsSection,
  TypeSection,
  VoiceSection,
} from "./sections/identity";
import {
  CalendarSection,
  DailyWorkflowSection,
  FeedSection,
  HighlightsSection,
  HooksSection,
  IGRealSection,
  LaunchSection,
  PostsSection,
  RealPhotoSection,
  ReelScriptsSection,
  ReelsSection,
  RhythmSection,
  StoriesSection,
  StrategySection,
  TwitchSection,
} from "./sections/content";
import {
  CalendarRitualsSection,
  CollabSection,
  CommunityRitualsSection,
  CrisisSection,
  FooterSection,
  KPISection,
  MonetizationSection,
  PrivacySection,
  SlothSystemSection,
} from "./sections/business";

export default function BrandKitPage() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-[var(--paper)]">
      <BrandKitChrome />
      <LegacyTopNav />
      <HeroSection />
      <VoiceSection />
      <ColorsSection />
      <TypeSection />
      <MotifsSection />
      <ModesSection />
      <IGRealSection />
      <PostsSection />
      <FeedSection />
      <StoriesSection />
      <HighlightsSection />
      <ReelsSection />
      <ReelScriptsSection />
      <StrategySection />
      <RhythmSection />
      <DailyWorkflowSection />
      <CalendarSection />
      <LaunchSection />
      <RealPhotoSection />
      <HooksSection />
      <TwitchSection />
      <SlothSystemSection />
      <KPISection />
      <CrisisSection />
      <CollabSection />
      <MonetizationSection />
      <CalendarRitualsSection />
      <CommunityRitualsSection />
      <PrivacySection />
      <FooterSection />
    </main>
  );
}

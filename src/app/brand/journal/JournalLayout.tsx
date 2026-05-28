"use client";

import { useCallback, useEffect, useState } from "react";

import {
  ColorsSection,
  ModesSection,
  MotifsSection,
  TypeSection,
  VoiceSection,
} from "../sections/identity";
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
} from "../sections/content";
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
} from "../sections/business";

import DeskScene from "./DeskScene";
import JournalCard from "./JournalCard";
import JournalCover from "./JournalCover";
import JournalPage from "./JournalPage";
import JournalTabs from "./JournalTabs";
import "./journal.css";
import { isTabKey, type TabKey } from "./tabs";

function readInitialTab(): TabKey | null {
  if (typeof window === "undefined") return null;
  const path = window.location.pathname;
  const match = path.match(/^\/brand\/([a-z]+)$/);
  if (match && isTabKey(match[1])) return match[1];
  return null;
}

function syncUrl(tab: TabKey | null) {
  if (typeof window === "undefined") return;
  const next = tab ? `/brand/${tab}` : "/brand";
  if (window.location.pathname !== next) {
    window.history.replaceState({}, "", next);
  }
}

export default function JournalLayout() {
  const [activeTab, setActiveTab] = useState<TabKey | null>(null);
  const [coverDone, setCoverDone] = useState(false);

  useEffect(() => {
    setActiveTab(readInitialTab());
  }, []);

  useEffect(() => {
    const onPop = () => setActiveTab(readInitialTab());
    window.addEventListener("popstate", onPop);
    return () => window.removeEventListener("popstate", onPop);
  }, []);

  const handleSelect = useCallback((tab: TabKey | null) => {
    setActiveTab(tab);
    syncUrl(tab);
    if (typeof window !== "undefined") {
      window.scrollTo({ top: 0, behavior: "auto" });
    }
  }, []);

  return (
    <>
      <JournalCover onOpen={() => setCoverDone(true)} />

      {coverDone ? (
        <>
          <JournalTabs activeTab={activeTab} onSelect={handleSelect} />

          <div key={activeTab ?? "desk"}>
            {activeTab === null ? (
              <DeskScene onSelect={handleSelect} />
            ) : (
              <JournalPage tab={activeTab}>
                {renderCards(activeTab)}
              </JournalPage>
            )}
          </div>

          <FooterSection />
        </>
      ) : null}
    </>
  );
}

function renderCards(tab: TabKey) {
  switch (tab) {
    case "me":
      return (
        <>
          <JournalCard title="voice" subtitle="tone, words, vulnerability" defaultOpen>
            <VoiceSection />
          </JournalCard>
          <JournalCard title="modes" subtitle="princess · nerd · funny">
            <ModesSection />
          </JournalCard>
          <JournalCard title="content pillars" subtitle="what I actually talk about">
            <StrategySection />
          </JournalCard>
          <JournalCard title="real photo guidelines" subtitle="how I show up in front of the lens">
            <RealPhotoSection />
          </JournalCard>
        </>
      );
    case "look":
      return (
        <>
          <JournalCard title="colors" subtitle="four families + rules" defaultOpen>
            <ColorsSection />
          </JournalCard>
          <JournalCard title="type" subtitle="blanka · agrandir · moontime">
            <TypeSection />
          </JournalCard>
          <JournalCard title="motifs" subtitle="waves · halftone · target-O">
            <MotifsSection />
          </JournalCard>
          <JournalCard title="sloth system" subtitle="when to deploy the sloth">
            <SlothSystemSection />
          </JournalCard>
        </>
      );
    case "post":
      return (
        <>
          <JournalCard title="profile mockup" subtitle="what the IG looks like" defaultOpen>
            <IGRealSection />
          </JournalCard>
          <JournalCard title="post templates" subtitle="9 reusable layouts">
            <PostsSection />
          </JournalCard>
          <JournalCard title="feed rhythm" subtitle="grid preview">
            <FeedSection />
          </JournalCard>
          <JournalCard title="stories" subtitle="daily story templates">
            <StoriesSection />
          </JournalCard>
          <JournalCard title="highlights" subtitle="cover set">
            <HighlightsSection />
          </JournalCard>
          <JournalCard title="reel covers" subtitle="reel cover templates">
            <ReelsSection />
          </JournalCard>
          <JournalCard title="reel scripts" subtitle="script examples">
            <ReelScriptsSection />
          </JournalCard>
          <JournalCard title="hooks" subtitle="content hooks">
            <HooksSection />
          </JournalCard>
          <JournalCard title="weekly rhythm" subtitle="posting cadence">
            <RhythmSection />
          </JournalCard>
          <JournalCard title="daily hour" subtitle="the daily IG workflow">
            <DailyWorkflowSection />
          </JournalCard>
          <JournalCard title="calendar" subtitle="content calendar">
            <CalendarSection />
          </JournalCard>
          <JournalCard title="launch week" subtitle="how to ship a launch">
            <LaunchSection />
          </JournalCard>
        </>
      );
    case "live":
      return (
        <JournalCard title="twitch system" subtitle="overlays · panels · alerts">
          <TwitchSection />
        </JournalCard>
      );
    case "grow":
      return (
        <>
          <JournalCard title="KPIs" subtitle="what success looks like" defaultOpen>
            <KPISection />
          </JournalCard>
          <JournalCard title="collabs" subtitle="who I work with, how">
            <CollabSection />
          </JournalCard>
          <JournalCard title="monetization" subtitle="how money flows in">
            <MonetizationSection />
          </JournalCard>
          <JournalCard title="calendar rituals" subtitle="recurring business beats">
            <CalendarRitualsSection />
          </JournalCard>
        </>
      );
    case "safe":
      return (
        <>
          <JournalCard title="crisis playbook" subtitle="when something goes wrong" defaultOpen>
            <CrisisSection />
          </JournalCard>
          <JournalCard title="community rituals" subtitle="how we treat each other">
            <CommunityRitualsSection />
          </JournalCard>
          <JournalCard title="privacy" subtitle="what stays off the internet">
            <PrivacySection />
          </JournalCard>
        </>
      );
  }
}

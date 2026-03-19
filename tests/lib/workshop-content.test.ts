import { workshopContent } from "@/lib/workshop-content";

describe("workshopContent", () => {
  it("provides the HVG workshop identity and Friday morning event facts", () => {
    expect(workshopContent.title).toBe("Human-Centric Video Generation");
    expect(workshopContent.shortName).toBe("HVG");
    expect(workshopContent.event.dateLabel).toBe("Friday, August 21, 2026");
    expect(workshopContent.event.timeLabel).toBe("8:30-12:30");
    expect(workshopContent.event.locationLabel).toBe("Lyon, France");
  });

  it("includes theme-specific overview, schedule, committee data, and CMT portal content", () => {
    expect(workshopContent.scheduleItems.length).toBeGreaterThanOrEqual(3);
    expect(workshopContent.importantNotes.some((note) => note.title === "Lunch Service")).toBe(true);
    expect(workshopContent.overview[0].toLowerCase()).toContain("human-centric video generation");
    expect(workshopContent.navigation.some((item) => item.label === "Home" && item.href === "/")).toBe(true);
    expect(workshopContent.navigation.some((item) => item.label === "Submission Entry" && item.href === "/submission")).toBe(true);
    expect(workshopContent.navigation.some((item) => item.label === "Committee" && item.href === "/committee")).toBe(true);
    expect(workshopContent.navigation.some((item) => item.label === "Contact")).toBe(false);
    expect(workshopContent.researchScope.pillars).toHaveLength(3);
    expect(workshopContent.researchScope.topics.some((topic) => topic.title === "Text-Driven Synthesis")).toBe(true);
    expect(workshopContent.generalChairs).toHaveLength(10);
    expect(workshopContent.generalChairs[0].name).toBe("Siyu Zhu");
    expect(workshopContent.generalChairs.some((member) => member.name === "Michael J. Black")).toBe(true);
    expect(workshopContent.submissionPortal.portalName).toBe("CMT");
    expect(["pending", "ready"]).toContain(workshopContent.submissionPortal.siteStatus);
    expect(workshopContent.submissionPortal.pendingLabel).toBeTruthy();
    expect(workshopContent.submissionPortal.officialNotice).toBeTruthy();
    expect(workshopContent.submissionPortal.requestChecklist.length).toBeGreaterThan(0);
    expect(workshopContent.submissionPortal.supportEmail).toBeTruthy();
    expect(workshopContent.submissionPortal.dataAccessNote.toLowerCase()).toContain("submission");
    expect(workshopContent.submissionPortal.dataAccessNote.toLowerCase()).not.toContain("attendee signup");
    expect(workshopContent.reviewPolicy.timeline.paperSubmissionDeadline).toBe("February 21, 2026 AoE (UTC-12)");
    expect(workshopContent.diversityPolicy.representationSummary.toLowerCase()).toContain("academia");
    expect(workshopContent.ethicsCompliance.items).toHaveLength(2);
    expect(workshopContent.contact.email).toBeTruthy();
  });

  it("keeps the pending-state submission portal content internally consistent", () => {
    if (workshopContent.submissionPortal.siteStatus === "pending") {
      expect(workshopContent.submissionPortal.portalUrl).toBe("");
      expect(workshopContent.submissionPortal.pendingLabel.toLowerCase()).toContain("pending");
      expect(workshopContent.submissionPortal.officialNotice.toLowerCase()).toContain("official");
    }

    if (workshopContent.submissionPortal.siteStatus === "ready") {
      expect(workshopContent.submissionPortal.portalUrl).toBeTruthy();
    }
  });
});

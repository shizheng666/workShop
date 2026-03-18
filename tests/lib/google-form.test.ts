import { buildGoogleFormPayload, getGoogleFormStatus } from "@/lib/registration/google-form";

const validPayload = {
  fullName: "Grace Hopper",
  email: "grace@example.com",
  affiliation: "US Navy",
  countryOrRegion: "United States",
  role: "Researcher",
  researchInterests: "AI systems",
  attendanceMode: "Online",
  dietaryRestrictions: "None",
  consent: true,
  additionalNotes: "Please share updates by email.",
};

describe("Google Form helpers", () => {
  it("reports placeholder mode when no Google Form environment variables are configured", () => {
    const status = getGoogleFormStatus({});

    expect(status.mode).toBe("fallback");
    expect(status.isConfigured).toBe(false);
  });

  it("builds a URL-encoded payload when form action and mappings are available", () => {
    const payload = buildGoogleFormPayload(validPayload, {
      formUrl: "https://docs.google.com/forms/d/e/example/formResponse",
      fieldMap: {
        fullName: "entry.1001",
        email: "entry.1002",
        affiliation: "entry.1003",
        countryOrRegion: "entry.1004",
        role: "entry.1005",
        researchInterests: "entry.1006",
        attendanceMode: "entry.1007",
        dietaryRestrictions: "entry.1008",
        consent: "entry.1009",
        additionalNotes: "entry.1010",
      },
    });

    expect(payload.formUrl).toBe("https://docs.google.com/forms/d/e/example/formResponse");
    expect(payload.body.toString()).toContain("entry.1001=Grace+Hopper");
    expect(payload.body.toString()).toContain("entry.1009=Yes");
  });
});

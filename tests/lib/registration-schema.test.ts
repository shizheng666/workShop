import { registrationSchema } from "@/lib/registration/schema";

describe("registrationSchema", () => {
  it("accepts a valid attendee registration payload", () => {
    const result = registrationSchema.safeParse({
      fullName: "Ada Lovelace",
      email: "ada@example.com",
      affiliation: "Analytical Engine Lab",
      countryOrRegion: "United Kingdom",
      role: "Faculty",
      researchInterests: "Computer vision, scientific imaging",
      attendanceMode: "In person",
      dietaryRestrictions: "",
      consent: true,
      additionalNotes: "Looking forward to the workshop.",
    });

    expect(result.success).toBe(true);
  });

  it("rejects empty required fields and invalid email addresses", () => {
    const result = registrationSchema.safeParse({
      fullName: "",
      email: "invalid-email",
      affiliation: "",
      countryOrRegion: "",
      role: "",
      researchInterests: "",
      attendanceMode: "",
      dietaryRestrictions: "",
      consent: false,
      additionalNotes: "",
    });

    expect(result.success).toBe(false);
    if (!result.success) {
      const messages = result.error.issues.map((issue) => issue.message);
      expect(messages).toContain("Full name is required.");
      expect(messages).toContain("Please enter a valid email address.");
      expect(messages).toContain("Affiliation is required.");
      expect(messages).toContain("Country or region is required.");
      expect(messages).toContain("Please choose an attendance mode.");
      expect(messages).toContain("Consent is required.");
    }
  });
});

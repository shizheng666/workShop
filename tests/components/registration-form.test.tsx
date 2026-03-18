import { fireEvent, render, screen, waitFor } from "@testing-library/react";

import { RegistrationForm } from "@/components/workshop/registration-form";

describe("RegistrationForm", () => {
  it("shows validation errors when the user submits an incomplete form", async () => {
    render(<RegistrationForm fallbackUrl="#google-form-setup" />);

    fireEvent.click(screen.getByRole("button", { name: "Submit registration" }));

    expect(await screen.findByText("Full name is required.")).toBeInTheDocument();
    expect(screen.getByText("Please enter a valid email address.")).toBeInTheDocument();
    expect(screen.getByText("Consent is required.")).toBeInTheDocument();
  });

  it("shows a success message after a successful API submission", async () => {
    const fetchMock = vi.fn().mockResolvedValue({
      ok: true,
      json: async () => ({ ok: true, mode: "configured" }),
    });

    vi.stubGlobal("fetch", fetchMock);

    render(<RegistrationForm fallbackUrl="#google-form-setup" />);

    fireEvent.change(screen.getByLabelText("Full Name"), {
      target: { value: "Ada Lovelace" },
    });
    fireEvent.change(screen.getByLabelText("Email Address"), {
      target: { value: "ada@example.com" },
    });
    fireEvent.change(screen.getByLabelText("Affiliation"), {
      target: { value: "Analytical Engine Lab" },
    });
    fireEvent.change(screen.getByLabelText("Country / Region"), {
      target: { value: "United Kingdom" },
    });
    fireEvent.change(screen.getByLabelText("Attendance Mode"), {
      target: { value: "In person" },
    });
    fireEvent.click(screen.getByLabelText("I agree to receive workshop updates by email."));

    fireEvent.click(screen.getByRole("button", { name: "Submit registration" }));

    await waitFor(() => {
      expect(screen.getByText("Registration submitted successfully.")).toBeInTheDocument();
    });
  });
});

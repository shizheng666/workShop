import { render, screen } from "@testing-library/react";

import { workshopContent } from "@/lib/workshop-content";

vi.mock("next/image", () => ({
  // eslint-disable-next-line @next/next/no-img-element
  default: (props: React.ImgHTMLAttributes<HTMLImageElement>) => <img {...props} alt={props.alt ?? ""} />,
}));

describe("Submission page ready state", () => {
  it("renders a clickable official CMT portal button when the portal is ready", async () => {
    vi.resetModules();

    vi.doMock("@/lib/workshop-content", () => ({
      workshopContent: {
        ...workshopContent,
        submissionPortal: {
          ...workshopContent.submissionPortal,
          siteStatus: "ready",
          portalUrl: "https://cmt.example.com/hvg2026",
          ctaLabel: "Official CMT Portal",
          pendingLabel: "CMT portal available",
        },
      },
    }));

    const submissionPageModule = await import("@/app/submission/page");
    const SubmissionPage = submissionPageModule.default;

    render(<SubmissionPage />);

    const portalLink = screen.getByRole("link", { name: "Official CMT Portal" });
    expect(portalLink).toHaveAttribute("href", "https://cmt.example.com/hvg2026");
    expect(portalLink).toHaveAttribute("target", "_blank");
  });
});

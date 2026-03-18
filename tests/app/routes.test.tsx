import { render, screen } from "@testing-library/react";

import CommitteePage from "@/app/committee/page";
import SchedulePage from "@/app/schedule/page";
import SubmissionPage from "@/app/submission/page";

vi.mock("next/image", () => ({
  // eslint-disable-next-line @next/next/no-img-element
  default: (props: React.ImgHTMLAttributes<HTMLImageElement>) => <img {...props} alt={props.alt ?? ""} />,
}));

describe("Route pages", () => {
  it("renders the schedule page", () => {
    render(<SchedulePage />);

    expect(screen.getByRole("heading", { name: "Schedule at a Glance" })).toBeInTheDocument();
    expect(screen.getByText("Opening and Welcome")).toBeInTheDocument();
    expect(screen.getAllByRole("link", { name: "Submission Entry" })[0]).toHaveAttribute("href", "/submission");
  });

  it("renders the submission page with CMT and policy content", () => {
    render(<SubmissionPage />);

    expect(screen.getByRole("heading", { name: "Paper Submission via CMT" })).toBeInTheDocument();
    expect(screen.getByText(/cmt is used for submission and review management/i)).toBeInTheDocument();
    expect(screen.getByText("Review Policy")).toBeInTheDocument();
    expect(screen.getByText("February 21, 2026 AoE (UTC-12)")).toBeInTheDocument();
    expect(screen.getByText("Diversity & Inclusion")).toBeInTheDocument();
    expect(screen.getByText("Ethics Compliance")).toBeInTheDocument();
    expect(screen.queryByLabelText("Full Name")).not.toBeInTheDocument();
  });

  it("renders the committee page without the standalone scientific committee block", () => {
    render(<CommitteePage />);

    expect(screen.getByRole("heading", { name: "Committee" })).toBeInTheDocument();
    expect(screen.getByText("Siyu Zhu")).toBeInTheDocument();
    expect(screen.getByText("contact@workshop-placeholder.org")).toBeInTheDocument();
    expect(screen.queryByRole("heading", { name: "Scientific Committee" })).not.toBeInTheDocument();
    expect(screen.queryByText("Committee updates will be announced soon.")).not.toBeInTheDocument();
  });
});

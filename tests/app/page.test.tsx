import { fireEvent, render, screen } from "@testing-library/react";

import Home from "@/app/page";

vi.mock("next/image", () => ({
  // eslint-disable-next-line @next/next/no-img-element
  default: (props: React.ImgHTMLAttributes<HTMLImageElement>) => <img {...props} alt={props.alt ?? ""} />,
}));

describe("Home page", () => {
  it("renders a compact landing page with route-based navigation", () => {
    render(<Home />);

    expect(screen.getByRole("heading", { name: "Human-Centric Video Generation" })).toBeInTheDocument();
    expect(screen.getByText("HVG")).toBeInTheDocument();
    expect(screen.getAllByRole("link", { name: "Home" })[0]).toHaveAttribute("href", "/");
    expect(screen.getAllByRole("link", { name: "Schedule" })[0]).toHaveAttribute("href", "/schedule");
    expect(screen.getAllByRole("link", { name: "Submission Entry" })[0]).toHaveAttribute("href", "/submission");
    expect(screen.getAllByRole("link", { name: "Committee" })[0]).toHaveAttribute("href", "/committee");
    expect(screen.getByRole("link", { name: "Submit via CMT" })).toHaveAttribute("href", "/submission");
    expect(screen.getByRole("link", { name: "Explore Schedule" })).toHaveAttribute("href", "/schedule");
    expect(screen.getByText("CMT portal pending")).toBeInTheDocument();

    expect(screen.getByRole("button", { name: "Overview Snapshot" })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "Submission Entry" })).toBeInTheDocument();
    fireEvent.click(screen.getByRole("button", { name: "Research Scope" }));
    expect(screen.getAllByText("Text-Driven Synthesis").length).toBeGreaterThan(0);

    expect(screen.queryByRole("heading", { name: "Schedule at a Glance" })).not.toBeInTheDocument();
    expect(screen.queryByRole("heading", { name: "Paper Submission via CMT" })).not.toBeInTheDocument();
    expect(screen.queryByRole("heading", { name: "Scientific Committee" })).not.toBeInTheDocument();
    expect(screen.queryByLabelText("Full Name")).not.toBeInTheDocument();
  });
});

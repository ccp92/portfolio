import { render, screen } from "@testing-library/react";
import JobCard from ".";
import { JobCardProps } from "../jobCard";
import { faker } from "@faker-js/faker";

describe("JobCard", () => {
  it("renders elements correctly", () => {
    const jobInfo: JobCardProps = {
      company: faker.company.name(),
      position: faker.name.jobTitle(),
      dates: faker.date.recent().toLocaleDateString(),
      description: [
        faker.hacker.phrase(),
        faker.hacker.phrase(),
        faker.hacker.phrase(),
      ],
    };

    render(
      <JobCard
        company={jobInfo.company}
        position={jobInfo.position}
        dates={jobInfo.dates}
        description={jobInfo.description}
      />
    );

    expect(screen.getByText(jobInfo.company)).toBeVisible();
    expect(screen.getByText(jobInfo.position)).toBeVisible();
    expect(screen.getByText(jobInfo.dates)).toBeVisible();
    expect(screen.getByText(jobInfo.description[0])).toBeVisible();
    expect(screen.getByText(jobInfo.description[1])).toBeVisible();
    expect(screen.getByText(jobInfo.description[2])).toBeVisible();
  });
});

import { HoverEffect } from "../ui/card-hover-effect";

export default function CardHoverEffectDemo() {
  return (
    (<div className="max-w-1xl mt-0 mx-auto px-8">
      <HoverEffect items={projects} />
    </div>)
  );
}
export const projects = [
  {
    title: "Identify",
    description:
      "Understand Client Requirements. Define Project Goals. Conduct Market and Competitor Analysis.",
    // link: "https://apple.com",
  },
  {
    title: "Proposal",
    description:
      "Create a Detailed Project Plan. Establish Timeline and Milestones. Provide Budget Estimation.",
    // link: "https://ibm.com",
  },
  {
    title: "Prototyping",
    description:
      "Develop Mockups and Wireframes. Gather Feedback and Reviews. Refine and Adjust.",
    // link: "https://stripe.com",
  },
  {
    title: "Development",
    description:
      "Use Clean code and Implement it. Integrate Components. Provide Regular Progress Updates.",
    // link: "https://netflix.com",
  },
  {
    title: "Quality Testing",
    description:
      "Conduct Functional Testing. Perform Performance and Load Testing. Execute User Acceptance Testing.",
    // link: "https://google.com",
  },
  {
    title: "Review",
    description:
      "Gather Client Feedback. Iterate and Improve. Obtain Final Approval.",
    // link: "https://meta.com",
  },
  {
    title: "Live",
    description:
      "Prepare for Deployment. Execute Launch. Monitor Initial Performance.",
    // link: "https://amazon.com",
  },
  {
    title: "Support",
    description:
      "Provide Ongoing Maintenance. Fix Bugs and Release Updates. Offer User Training and Documentation.",
    // link: "https://microsoft.com",
  },
  {
    title: "Spotify",
    description:
      "A digital music service that gives you access to millions of songs and podcasts, allowing users to discover, stream, and share music.",
    link: "https://spotify.com",
  },
];

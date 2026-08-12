export interface AboutStat {
  value: string;
  label: string;
}

export const aboutHeading = "Built by engineers who live the van life";
export const aboutParagraph =
  "Nohma started with a single converted van and a belief that experiences matter more than possessions. Today our team of off-grid electrical engineers designs bespoke power systems for campervans, RVs and mobile businesses, so you can travel further, live off-grid longer, and worry less about your setup.";

export const aboutStats: AboutStat[] = [
  { value: "10+", label: "Years designing off-grid systems" },
  { value: "4,000+", label: "Bespoke systems built each year" },
  { value: "98%", label: "Customers who'd recommend us" },
];

export const aboutImage =
  "https://res.cloudinary.com/dglbwcbch/images/c_scale,w_448,h_448,dpr_2/f_auto,q_auto/v1781797013/assets/charlie-profile/charlie-profile.png?_i=AA";
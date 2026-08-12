export interface Testimonial {
  name: string;
  location: string;
  rating: number;
  quote: string;
  avatar: string;
}

export const testimonialsHeading = "Loved by van lifers everywhere";
export const testimonialsSubheading = "4.8/5 average rating from over 1,400 reviews";

export const testimonials: Testimonial[] = [
  {
    name: "Sarah Mitchell",
    location: "Sprinter van conversion",
    rating: 5,
    quote:
      "The design service made a genuinely daunting part of the build simple. Everything arrived labelled and just worked first time.",
    avatar: "https://i.pravatar.cc/100?img=47",
  },
  {
    name: "James Ogundele",
    location: "VW Transporter",
    rating: 5,
    quote:
      "Our engineer answered every question patiently, even the silly ones. Two years of full-time travel later, the system hasn't skipped a beat.",
    avatar: "https://i.pravatar.cc/100?img=12",
  },
  {
    name: "Priya Nair",
    location: "Mobile coffee business",
    rating: 4.5,
    quote:
      "We run a full espresso setup off-grid all day. The team sized the batteries and solar perfectly for our power draw.",
    avatar: "https://i.pravatar.cc/100?img=32",
  },
];
/**
 * Single source of truth for site-wide content (navigation, contact details, links).
 * TODO: replace the placeholder contact details and social links with the real ones.
 */
export const site = {
  name: "Cirsec",
  description:
    "Cirsec is a cybersecurity and technology initiative helping individuals and organisations understand cybersecurity and adopt safer digital practices.",
  email: "hello@cirsec.com",
  phone: "+000 000 000 0000",
  phoneHref: "tel:+0000000000000",
  address: "Address to be added",
  // TODO: replace with Cirsec's own videos (these are the template's placeholder videos).
  heroVideoUrl: "https://www.youtube.com/embed/LuKAeNC8e3c",
  demoVideoUrl: "https://www.youtube.com/embed/BTMjD7_evjE",
} as const;

export type IconName = "info" | "shield" | "star" | "pen" | "help" | "folder" | "book" | "mail" | "phone" | "pin";

export type NavLinkItem = {
  href: string;
  title: string;
  description?: string;
  icon?: IconName;
};

export type NavEntry =
  | { label: string; href: string; menu?: undefined }
  | { label: string; menu: string; href?: undefined; items: NavLinkItem[] };

export const navigation: NavEntry[] = [
  {
    label: "Company",
    menu: "company-menu",
    items: [
      {
        href: "/about",
        title: "Our Mission",
        description: "Why we exist and who we serve",
        icon: "info",
      },
      {
        href: "/services",
        title: "What We Do",
        description: "Awareness, education and practical engagement",
        icon: "shield",
      },
      {
        href: "/projects",
        title: "Initiatives",
        description: "Explore our cybersecurity-focused initiatives",
        icon: "star",
      },
      {
        href: "/blog",
        title: "Blog & News",
        description: "Insights and updates from Cirsec",
        icon: "pen",
      },
    ],
  },
  { label: "About", href: "/about" },
  { label: "Pricing", href: "/pricing" },
  { label: "Services", href: "/services" },
  {
    label: "Resources",
    menu: "resources-menu",
    items: [
      { href: "/faq", title: "FAQ", icon: "help" },
      { href: "/projects", title: "Initiatives", icon: "folder" },
      { href: "/resources", title: "Cyber Safety Tips", icon: "book" },
      { href: "/contact", title: "Contact", icon: "phone" },
    ],
  },
];

export const footerLinks = {
  Company: [
    { label: "About Us", href: "/about" },
    { label: "Our Services", href: "/services" },
    { label: "Initiatives", href: "/projects" },
    { label: "Contact Us", href: "/contact" },
  ],
  Support: [
    { label: "FAQ", href: "/faq" },
    { label: "Cyber Safety Tips", href: "/resources" },
    { label: "Blog & News", href: "/blog" },
    { label: "Get Involved", href: "/contact" },
  ],
  "Legal Policies": [
    { label: "Terms & Conditions", href: "/terms" },
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Cookie Policy", href: "/cookies" },
  ],
} as const;

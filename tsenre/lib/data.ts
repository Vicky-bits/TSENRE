import {
  Radar,
  Gauge,
  ArrowUpFromLine,
  ShieldCheck,
  Waves,
  CircuitBoard,
  HardHat,
  Boxes,
  Truck,
  GraduationCap,
  Users,
  BadgeCheck,
  Cpu,
  Clock,
  Smile,
  HeartPulse,
  Siren,
  Leaf,
  AlertTriangle,
  ClipboardCheck,
  BookOpenCheck,
  type LucideIcon,
} from "lucide-react";

export const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Projects", href: "#projects" },
  { label: "HSE", href: "#hse" },
  { label: "Contact", href: "#contact" },
];

// Sourced from TSENRE's official corporate profile document.
export const COMPANY_INFO = {
  rcNumber: "7449180",
  managingDirector: "Prince Ernest Udoaka",
  corporateBrief:
    "TSENRE Technologies Limited is an indigenous company registered under the laws of the Federal Republic of Nigeria, providing services to multinational organizations in tank and instrument calibration, pressure and leak testing, non-destructive testing, hull thickness gauging, lifting equipment inspection, instrumentation and control, engineering design, and procurement of technical and safety equipment.",
  corporateBriefSecondary:
    "We build our profile through the integration of motivated people, innovative technology and rigorous standards prioritizing safer working conditions to create a competitive advantage for our clients.",
};

export const MISSION_VISION_VALUES = {
  vision:
    "To be a world-class service provider in our field through the provision of unparalleled services, using cutting-edge technology, integrity and a continual improvement approach.",
  mission:
    "To understand, meet and exceed our customers' present and future needs for high quality, value for money and reliable service while developing local skills and setting the industry standard for quality.",
  coreValues: ["Professionalism", "Innovation", "Team Work", "Standard"],
};

export type Service = {
  icon: LucideIcon;
  title: string;
  description: string;
};

// Sourced from TSENRE's official corporate profile ("Our Areas of Operation" + Corporate Profile service list).
export const SERVICES: Service[] = [
  {
    icon: Radar,
    title: "Non-Destructive Testing",
    description:
      "NDT and evaluation processes including radiographic, ultrasonic, magnetic particle and dye penetrant testing that verify structural integrity without compromising assets in service.",
  },
  {
    icon: Gauge,
    title: "Calibration of Equipment",
    description:
      "Tank and instrument calibration, pressure/leak testing, hydro testing and hull thickness gauging, backed by certified procedures and precision reference standards.",
  },
  {
    icon: ArrowUpFromLine,
    title: "Lifting Equipment Inspection",
    description:
      "Load testing, NDT certification of lifting gear, and statutory inspection of cranes, hoists and rigging equipment to certify safe working loads.",
  },
  {
    icon: ShieldCheck,
    title: "Corrosion Control",
    description:
      "Coating inspection and corrosion monitoring programs, including vacuum box testing, that extend the service life of critical infrastructure.",
  },
  {
    icon: Waves,
    title: "Tubular & Pipeline Inspection",
    description:
      "Line pipe inspection, tubular inspection (OCTG) and pipeline integrity assessment for onshore and offshore networks.",
  },
  {
    icon: CircuitBoard,
    title: "Instrumentation & Control",
    description:
      "Design, installation and maintenance of instrumentation and control systems for process automation and monitoring.",
  },
  {
    icon: HardHat,
    title: "Engineering Construction",
    description:
      "Storage tank maintenance, rig maintenance and end-to-end engineering construction delivered under strict safety and quality standards.",
  },
  {
    icon: Boxes,
    title: "Equipment Lease",
    description:
      "A modern fleet of inspection, lifting and industrial equipment available for short and long-term project deployment.",
  },
  {
    icon: Truck,
    title: "Supply",
    description:
      "Procurement of technical and safety equipment, backed by a vetted network of suppliers and reliable logistics services.",
  },
  {
    icon: GraduationCap,
    title: "HR Development & Training",
    description:
      "Competency-based training including mobile crane inspection, overhead crane & hoist, safe rigging & lifting, forklift operation, and on-shore/off-shore inspection.",
  },
];

export type WhyCard = {
  icon: LucideIcon;
  title: string;
  description: string;
};

export const WHY_CHOOSE_US: WhyCard[] = [
  {
    icon: Users,
    title: "Experienced Engineers",
    description: "A multidisciplinary team with decades of combined field and engineering experience.",
  },
  {
    icon: BadgeCheck,
    title: "Quality Assurance",
    description: "Every deliverable is verified against international quality standards and client specifications.",
  },
  {
    icon: ShieldCheck,
    title: "Safety Compliance",
    description: "Zero-compromise HSE culture embedded in every project, every site and every day.",
  },
  {
    icon: Cpu,
    title: "Modern Technology",
    description: "Investment in current-generation inspection and diagnostic equipment for accurate results.",
  },
  {
    icon: Clock,
    title: "Reliable Delivery",
    description: "Disciplined project management that keeps schedules and budgets on track.",
  },
  {
    icon: Smile,
    title: "Customer Satisfaction",
    description: "Long-term client relationships built on transparency, responsiveness and results.",
  },
];

export type Client = {
  name: string;
  logo: string;
};

export const CLIENTS: Client[] = [
  { name: "LEEA — Lifting Equipment Engineers Association", logo: "/images/clients/leea.jpg" },
  { name: "IADC — International Association of Drilling Contractors", logo: "/images/clients/iadc.jpg" },
];

export type Stat = {
  label: string;
  value: number;
  suffix: string;
};

export const STATS: Stat[] = [
  { label: "Years of Experience", value: 20, suffix: "+" },
  { label: "Projects Completed", value: 2900, suffix: "+" },
  { label: "Engineering Services", value: 10, suffix: "+" },
  { label: "Client Satisfaction", value: 100, suffix: "%" },
];

export type HSEPillar = {
  icon: LucideIcon;
  title: string;
  points: string[];
};

export const HSE_PILLARS: HSEPillar[] = [
  {
    icon: HeartPulse,
    title: "Health",
    points: ["Strict drug and alcohol policy for all site personnel", "Occupational health monitoring", "Continued safety education and training"],
  },
  {
    icon: Siren,
    title: "Safety",
    points: ["Life-first emergency response protocol", "Regular emergency readiness exercises", "Permit-to-work & risk management systems"],
  },
  {
    icon: Leaf,
    title: "Environment",
    points: ["Reducing waste, emissions and discharges", "Continual environmental impact assessment", "Sensitivity to the needs of host communities"],
  },
];

export const HSE_QUOTE =
  "If you believe a job cannot be done safely, it shall not be started or continued.";

export type HSEFeature = {
  icon: LucideIcon;
  title: string;
};

export const HSE_FEATURES: HSEFeature[] = [
  { icon: AlertTriangle, title: "Emergency Response" },
  { icon: ClipboardCheck, title: "Risk Management" },
  { icon: BookOpenCheck, title: "Employee Training" },
  { icon: Leaf, title: "Environmental Protection" },
  { icon: BadgeCheck, title: "Quality Assurance" },
];

export type ProjectMedia = {
  type: "image" | "video";
  src: string;
  poster?: string; // used for video cover/thumbnail
};

export type Project = {
  title: string;
  category: string;
  slug: string;
  media: ProjectMedia[];
};

// Real field photography and video supplied by TSENRE, organized by project folder.
export const PROJECTS: Project[] = [
  {
    title: "Barge Calibration Operation",
    category: "Calibration",
    slug: "barge-calibration",
    media: [
      { type: "video", src: "/images/projects/barge-calibration/video.mp4", poster: "/images/projects/barge-calibration/poster.jpg" },
    ],
  },
  {
    title: "Pressure & Hydrotest Services",
    category: "Pressure",
    slug: "calibration-hydrotest",
    media: [
      { type: "image", src: "/images/projects/calibration-hydrotest/img-1.jpg" },
      { type: "image", src: "/images/projects/calibration-hydrotest/img-2.jpg" },
    ],
  },
  {
    title: "Crane Inspection",
    category: "Lifting Equipment Inspection",
    slug: "crane-inspection",
    media: [{ type: "image", src: "/images/projects/crane-inspection/img-1.jpg" }],
  },
  {
    title: "Crane Maintenance",
    category: "Lifting Equipment Inspection",
    slug: "crane-valve-maintenance",
    media: [
      { type: "image", src: "/images/projects/crane-valve-maintenance/img-1.jpg" },
      { type: "image", src: "/images/projects/crane-valve-maintenance/img-2.jpg" },
      { type: "image", src: "/images/projects/crane-valve-maintenance/img-3.jpg" },
    ],
  },
  {
    title: "Foundation Test for Vertical Tanks",
    category: "Engineering Construction",
    slug: "foundation-test-vertical-tanks",
    media: [{ type: "image", src: "/images/projects/foundation-test-vertical-tanks/img-1.jpg" }],
  },
  {
    title: "Inspection & Calibration of Vessel Tanks",
    category: "Calibration",
    slug: "vessel-tank-inspection-calibration",
    media: [
      { type: "image", src: "/images/projects/vessel-tank-inspection-calibration/img-1.jpg" },
      { type: "image", src: "/images/projects/vessel-tank-inspection-calibration/img-2.jpg" },
    ],
  },
  {
    title: "Land Rig Inspection",
    category: "Non-Destructive Testing",
    slug: "land-rig-inspection",
    media: [
      { type: "image", src: "/images/projects/land-rig-inspection/img-1.jpg" },
      { type: "image", src: "/images/projects/land-rig-inspection/img-2.jpg" },
    ],
  },
  {
    title: "LPG Tank Inspection",
    category: "Non-Destructive Testing",
    slug: "lpg-tank-inspection",
    media: [{ type: "image", src: "/images/projects/lpg-tank-inspection/img-1.jpg" }],
  },
  {
    title: "Non-Destructive Testing (MPI)",
    category: "Non-Destructive Testing",
    slug: "ndt-mpi",
    media: [
      { type: "image", src: "/images/projects/ndt-mpi/img-1.jpg" },
      { type: "video", src: "/images/projects/ndt-mpi/video.mp4", poster: "/images/projects/ndt-mpi/img-1.jpg" },
    ],
  },
  {
    title: "Pipeline Inspection",
    category: "Pipeline Inspection",
    slug: "pipeline-inspection",
    media: [
      { type: "image", src: "/images/projects/pipeline-inspection/img-1.jpg" },
      { type: "image", src: "/images/projects/pipeline-inspection/img-2.jpg" },
      { type: "image", src: "/images/projects/pipeline-inspection/img-4.jpg" },
    ],
  },
  {
    title: "Rig Survey",
    category: "Lifting Equipment Inspection",
    slug: "rig-survey-wire-rope-inspection",
    media: [
      { type: "image", src: "/images/projects/rig-survey-wire-rope-inspection/img-1.jpg" },
      { type: "image", src: "/images/projects/rig-survey-wire-rope-inspection/img-2.jpg" },
      { type: "image", src: "/images/projects/rig-survey-wire-rope-inspection/img-3.jpg" },
    ],
  },
  {
    title: "Tank Calibration",
    category: "Calibration",
    slug: "tank-calibration",
    media: [
      { type: "image", src: "/images/projects/tank-calibration/img-1.jpg" },
      { type: "image", src: "/images/projects/tank-calibration/img-2.jpg" },
      { type: "image", src: "/images/projects/tank-calibration/img-3.jpg" },
    ],
  },
  {
    title: "Turbine Meter Calibration",
    category: "Calibration",
    slug: "turbine-meter-calibration",
    media: [
      { type: "image", src: "/images/projects/turbine-meter-calibration/img-1.jpg" },
      { type: "image", src: "/images/projects/turbine-meter-calibration/img-2.jpg" },
    ],
  },
  {
    title: "Rope Access Inspection",
    category: "Access Rope Inspection",
    slug: "access-rope-inspection",
    media: [
      { type: "image", src: "/images/projects/access-rope-inspection/img-1.jpg" },
      { type: "image", src: "/images/projects/access-rope-inspection/img-2.jpg" },
      { type: "image", src: "/images/projects/access-rope-inspection/img-3.jpg" },
    ],
  },
  {
    title: "Dropped Objects Prevention Survey",
    category: "Dropped Objects Prevention",
    slug: "dropped-objects-prevention",
    media: [
      { type: "image", src: "/images/projects/dropped-objects-prevention/img-1.jpg" },
      { type: "image", src: "/images/projects/dropped-objects-prevention/img-2.jpg" },
      { type: "image", src: "/images/projects/dropped-objects-prevention/img-3.jpg" },
    ],
  },
];

export const QUALITY_POINTS = [
  "Quality management system documented to meet the requirements of ISO 9001:2015",
  "NDT personnel and procedures aligned with ASNT (American Society for Nondestructive Testing) standards",
  "British Safety Council membership underpinning our HSE culture",
  "Continual improvement programs that empower every employee to do their job right, first time and every time",
];

export const QUALITY_BADGES = [
  { tag: "ISO 9001:2015", label: "Documented QMS" },
  { tag: "ASNT", label: "NDT Standards" },
  { tag: "BSC", label: "British Safety Council Member" },
  { tag: `RC ${"7449180"}`, label: "Registered in Nigeria" },
];

export const CERTIFICATIONS = [
  {
    name: "ASNT",
    logo: "/images/certifications/asnt.png",
  },
  {
    name: "British Safety Council",
    logo: "/images/certifications/bsc.png",
  },
  {
    name: "NMDPRA",
    logo: "/images/certifications/nmdpra.png",
  },
  {
    name: "NUPRC",
    logo: "/images/certifications/nuprc.png",
  },
];
// Real, signed Quality Policy statement from TSENRE's corporate profile.
export const QUALITY_POLICY_STATEMENT = {
  paragraphs: [
    "TSENRE Technologies Limited is an inspection company committed to providing reliable, non-defect service that meets and exceeds the expectations of our clients. Error-free work builds our reputation, it attracts business and protects our future.",
    "We will always strive to exceed customer expectations, because our business future depends on quality today. TSENRE Technologies Limited actively pursues continual improvement through programs that enable every employee to do their job right, first time and every time.",
  ],
  signatory: "Prince Ernest Udoaka",
  signatoryTitle: "Managing Director",
};

export const CONTACT_INFO = {
  address: "#2 Success Lane, Off Shedrack Avenue, Apamini Estate, Elelenwo, Obio/Akpor L.G.A, Rivers State, Nigeria",
  phones: ["+234 810 597 5042", "+234 705 658 6909", "+234 902 397 2972"],
  whatsapp: ["+234 811 855 3771"],
  email: "tsenretechnologies@gmail.com",
  hours: "Mon – Fri: 8:00 AM – 5:00 PM",
};

// Opens Gmail's web compose window directly — unlike mailto:, this works on any
// desktop browser regardless of whether a default email app is configured.
export function gmailComposeUrl(email: string, subject?: string) {
  const params = new URLSearchParams({ view: "cm", fs: "1", to: email });
  if (subject) params.set("su", subject);
  return `https://mail.google.com/mail/?${params.toString()}`;
}

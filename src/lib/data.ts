import { unsplash } from "./utils";

export const studio = {
  name: "Fahim's Photography",
  firstName: "Fahim",
  mark: "FP",
  role: "Photographer",
  location: "Sydney, Australia",
  email: "hello@fahimsphotography.com",
  phone: "+61 2 8123 4567",
  experience: "11 years",
  tagline: "Finding joy in the in-between.",
  subTagline:
    "Wedding, portrait & editorial photography rooted in honest light and unhurried moments.",
};

export const navLinks = [
  { label: "Work", href: "/#work" },
  { label: "About", href: "/#about" },
  { label: "Journal", href: "/journal" },
  { label: "Contact", href: "/#contact" },
];

export const socialLinks = [
  { label: "Instagram", href: "https://instagram.com" },
  { label: "Pinterest", href: "https://pinterest.com" },
  { label: "Behance", href: "https://behance.net" },
];

export const heroImage = {
  id: "1519741497674-611481863552",
  alt: "Bride holding a bouquet in warm backlight, soft golden bokeh surrounding her",
};

export type GalleryImage = {
  id: string;
  alt: string;
  caption?: string;
  /** relative visual weight inside the editorial grid */
  size: "lg" | "md" | "sm";
  /** CSS object-position, for photos whose subject sits off-centre */
  focal?: string;
};

export type WorkCategory = {
  slug: string;
  label: string;
  count: string;
  description: string;
  images: GalleryImage[];
};

export const workCategories: WorkCategory[] = [
  {
    slug: "weddings",
    label: "Weddings",
    count: "01",
    description:
      "Unscripted ceremonies, quiet vows, and the joy that spills out at the edges of the frame.",
    images: [
      {
        id: "1583939003579-730e3918a45a",
        alt: "Wedding party throwing confetti over the newlyweds outdoors",
        caption: "Confetti send-off, Óbidos",
        size: "lg",
      },
      {
        id: "1511285560929-80b456fea0bc",
        alt: "Couple releasing balloons above a crowd of wedding guests",
        caption: "Sending wishes skyward",
        size: "sm",
      },
      {
        id: "1522673607200-164d1b6ce486",
        alt: "Two chairs decorated with flowers facing an empty green lawn",
        caption: "Before the vows",
        size: "sm",
      },
      {
        id: "1527529482837-4698179dc6ce",
        alt: "Wedding guests toasting with champagne at golden hour",
        caption: "First toast",
        size: "md",
      },
      {
        id: "1520854221256-17451cc331bf",
        alt: "Close up of a couple holding hands, shadows stretched across the grass",
        caption: "Hand in hand",
        size: "sm",
      },
      {
        id: "1502635385003-ee1e6a1a742d",
        alt: "Reception table styled with candles and garden flowers",
        caption: "The details, after",
        size: "md",
      },
    ],
  },
  {
    slug: "portraits",
    label: "Portraits",
    count: "02",
    description:
      "Faces, not poses. Portraits made in the seconds people forget the camera is there.",
    images: [
      {
        id: "1531746020798-e6953c6e8e04",
        alt: "Portrait of a woman with freckles against a soft pink backdrop",
        caption: "Noa, studio session",
        size: "lg",
      },
      {
        id: "1494790108377-be9c29b29330",
        alt: "Portrait of a woman laughing in a red top",
        caption: "",
        size: "sm",
      },
      {
        id: "1519699047748-de8e457a634e",
        alt: "Portrait of a woman with curly hair, soft studio light",
        caption: "",
        size: "sm",
      },
      {
        id: "1522075469751-3a6694fb2f61",
        alt: "Black and white portrait of a man with a beard and curly hair",
        caption: "Diego, in profile",
        size: "md",
      },
      {
        id: "1440589473619-3cde28941638",
        alt: "Close up beauty portrait of a woman with soft curled hair",
        caption: "",
        size: "sm",
      },
      {
        id: "1521119989659-a83eee488004",
        alt: "Portrait of a man in a beanie with arms crossed",
        caption: "",
        size: "sm",
      },
    ],
  },
  {
    slug: "fashion",
    label: "Fashion",
    count: "03",
    description:
      "Editorial fashion with movement and colour left in — nothing flattened for the sake of neat.",
    images: [
      {
        id: "1524638431109-93d95c968f03",
        alt: "Woman with bold red lipstick lit by colourful city lights at night",
        caption: "Neon hour",
        size: "lg",
      },
      {
        id: "1516726817505-f5ed825624d8",
        alt: "Woman in a white sports bra, minimal studio fashion shot",
        caption: "",
        size: "sm",
      },
      {
        id: "1469334031218-e382a71b716b",
        alt: "Woman in sunglasses posing against a bright yellow wall",
        caption: "Citrus wall, Alfama",
        size: "md",
      },
      {
        id: "1520975954732-35dd22299614",
        alt: "Man in a leather jacket sitting on a city street",
        caption: "",
        size: "sm",
      },
      {
        id: "1483985988355-763728e1935b",
        alt: "Woman in sunglasses carrying shopping bags, street style",
        caption: "",
        size: "sm",
      },
      {
        id: "1600091166971-7f9faad6c1e2",
        alt: "Flat lay of a tailored blazer and trousers",
        caption: "Studio still life",
        size: "sm",
      },
    ],
  },
  {
    slug: "travel",
    label: "Travel",
    count: "04",
    description:
      "Souvenirs made of light — coastlines, back streets, and the hour before everything closes.",
    images: [
      {
        id: "1533105079780-92b9be482077",
        alt: "Whitewashed village overlooking the sea in Santorini",
        caption: "Santorini, October",
        size: "lg",
      },
      {
        id: "1465146344425-f00d5f5c8f07",
        alt: "Field of red poppies under a soft sky",
        caption: "",
        size: "sm",
      },
      {
        id: "1502680390469-be75c86b636f",
        alt: "Surfer riding a turquoise wave",
        caption: "Ericeira",
        size: "sm",
      },
      {
        id: "/images/fahim-work-lake.jpg",
        alt: "A photographer in a red beanie photographing a dramatic mountain lake under stormy skies",
        caption: "Waiting for a break in the weather",
        size: "md",
      },
      {
        id: "1517840901100-8179e982acb7",
        alt: "Illuminated hotel sign photographed at night",
        caption: "",
        size: "sm",
      },
      {
        id: "1490750967868-88aa4486c946",
        alt: "Field of orange wildflowers in warm afternoon light",
        caption: "",
        size: "sm",
      },
    ],
  },
  {
    slug: "editorial",
    label: "Editorial",
    count: "05",
    description:
      "Conceptual work made for print — quieter, stranger, and a little more ourselves.",
    images: [
      {
        id: "1522337360788-8b13dee7a37e",
        alt: "Woman running hands through her hair against a dusty pink backdrop",
        caption: "Study in pink",
        size: "lg",
      },
      {
        id: "1500048993953-d23a436266cf",
        alt: "Man lit by colourful bokeh lights, editorial portrait",
        caption: "",
        size: "sm",
      },
      {
        id: "/images/fahim-work-train.jpg",
        alt: "A bald, bearded man seen through the reflection of a Sydney Trains carriage window",
        caption: "Reflections, Sydney",
        size: "sm",
      },
      {
        id: "/images/fahim-work-corridor.jpg",
        alt: "A couple walking hand in hand down a moody, illuminated shopping corridor at night",
        caption: "Closing time",
        size: "md",
      },
      {
        id: "1544005313-94ddf0286df2",
        alt: "Portrait of a woman in a striped shirt with warm side light",
        caption: "",
        size: "sm",
      },
    ],
  },
  {
    slug: "lifestyle",
    label: "Lifestyle",
    count: "06",
    description:
      "The everyday, dignified — mornings, small hands, and rooms lived in on purpose.",
    images: [
      {
        id: "1524250502761-1ac6f2e30d43",
        alt: "Woman laughing outdoors with wind blowing through her hair",
        caption: "",
        size: "lg",
      },
      {
        id: "1470116945706-e6bf5d5a53ca",
        alt: "Baby's hand holding a parent's finger",
        caption: "",
        size: "sm",
      },
      {
        id: "1519689680058-324335c77eba",
        alt: "Baby in sunglasses relaxing on a pool float",
        caption: "",
        size: "sm",
      },
      {
        id: "1490578474895-699cd4e2cf59",
        alt: "Three friends sitting together looking out over a hillside",
        caption: "",
        size: "md",
      },
      {
        id: "1522337660859-02fbefca4702",
        alt: "Close up of hands with fresh pink nail polish",
        caption: "",
        size: "sm",
      },
    ],
  },
];

export const featuredProject = {
  eyebrow: "Featured Story",
  title: "Between Blue and Gold",
  location: "Santorini, Greece",
  date: "September 2025",
  description:
    "Ten days following a family across the Aegean — no shot list, no itinerary, just the instruction to wander until the light did something worth stopping for. This is what happens when you let a place set the pace.",
  heroImage: {
    id: "1533105079780-92b9be482077",
    alt: "Whitewashed village clinging to a cliff above the deep blue Aegean sea",
  },
  gallery: [
    {
      id: "1465146344425-f00d5f5c8f07",
      alt: "Field of red poppies under a soft afternoon sky",
      caption: "Wildflowers on the road to Pyrgos",
      size: "md" as const,
    },
    {
      id: "1531746020798-e6953c6e8e04",
      alt: "Portrait of a woman with freckles lit softly against pink",
      caption: "Elena, before dinner",
      size: "sm" as const,
    },
    {
      id: "1517840901100-8179e982acb7",
      alt: "Illuminated hotel sign glowing at night",
      caption: "Last light, Oia",
      size: "sm" as const,
    },
    {
      id: "1490750967868-88aa4486c946",
      alt: "Orange wildflowers glowing in warm afternoon sun",
      caption: "",
      size: "md" as const,
    },
  ],
};

export const personality = {
  eyebrow: "Off Duty",
  heading: "Behind the camera, mostly barefoot",
  body: "The parts of this job nobody photographs: burnt toast on shoot mornings, second-guessing every playlist, and the two-hour drives home that always feel shorter than the ones there.",
  images: [
    {
      id: "1490578474895-699cd4e2cf59",
      alt: "Three friends sitting together looking out over a hillside",
      caption: "Field trip, not a client in sight",
    },
    {
      id: "1522708323590-d24dbb6b0267",
      alt: "Sunlit studio corner with linen curtains",
      caption: "The studio, 8am",
    },
    {
      id: "1544717297-fa95b6ee9643",
      alt: "Desk covered in contact sheets and a laptop mid-edit",
      caption: "Culling from a wedding, still in yesterday's dress",
    },
    {
      id: "1541961017774-22349e4a1262",
      alt: "Close up of vivid abstract paint mixing, colourful texture",
      caption: "Whatever's on the studio wall this month",
    },
    {
      id: "1519689680058-324335c77eba",
      alt: "Baby in sunglasses on a pool float, laughing",
      caption: "Best client I've ever had",
    },
  ],
};

export const testimonials = [
  {
    quote:
      "Working with Fahim felt effortless. Somehow he captured all the moments we didn't even notice happening — my grandmother's hands, the look before the vows, all of it.",
    name: "Marisol & Tomás",
    context: "Wedding, Sintra",
  },
  {
    quote:
      "I've never enjoyed a photoshoot before this one. No forced smiles, no awkward posing — just conversation, and somehow the best portraits I've ever had.",
    name: "Priya Nair",
    context: "Portrait session",
  },
  {
    quote:
      "He has this quiet way of directing a room without anyone feeling directed. The final gallery felt less like documentation and more like a short film of our week.",
    name: "Studio Kade",
    context: "Editorial campaign",
  },
  {
    quote:
      "Our families are scattered across three continents. Fahim gave us a wedding album that made everyone feel like they'd actually been in the room.",
    name: "Bea & Lin",
    context: "Wedding, Lisbon",
  },
];

export const about = {
  eyebrow: "About",
  heading: "A little about the person behind the lens",
  portrait: {
    id: "/images/fahim-portrait.jpg",
    alt: "Fahim standing by a railing at golden hour, sunglasses tucked into his collar, looking off into the distance",
  },
  secondaryImage: {
    id: "1522708323590-d24dbb6b0267",
    alt: "Sunlit corner of Fahim's studio in Sydney",
  },
  bio: [
    "I picked up a camera at nineteen to avoid writing a thesis, and never quite put it down again. Eleven years and several hundred weddings, portraits, and strange editorial briefs later, it's still the only job that's made sense.",
    "I'm drawn to light more than location, and to honesty more than polish. My favourite frame in any gallery is almost never the one that was planned — it's the one that happened while everyone thought I'd already stopped shooting.",
    "These days I split my time between a small studio in Sydney and wherever the next story happens to be. I still get nervous before every first look.",
  ],
  facts: [
    { label: "Based in", value: "Sydney, Australia" },
    { label: "Experience", value: "11 years, 240+ weddings" },
    { label: "Approach", value: "Documentary first, directed only when it helps" },
    { label: "Currently", value: "Booking into next season" },
  ],
};

export const shootTypes = [
  "Wedding",
  "Portrait",
  "Fashion / Editorial",
  "Travel Story",
  "Lifestyle / Family",
  "Something else entirely",
];

export const journalEntries = [
  {
    slug: "light-worth-waiting-for",
    title: "The light worth waiting for",
    excerpt:
      "On the forty extra minutes I now build into every shoot, and why the best frame is rarely the first one.",
    date: "August 2025",
    readTime: "4 min read",
    image: {
      id: "1476514525535-07fb3b4ae5f1",
      alt: "Wooden boat crossing a still alpine lake at golden hour",
    },
    pullQuote: "The first ten minutes are for the client. The last ten are for the photograph.",
    body: [
      "Early on, I used to book shoots the way most people plan a meeting — a start time, an end time, and a list of shots to get through in between. It took a bad afternoon in a rented rowboat, of all things, to break that habit for good.",
      "We'd planned to be on the water for twenty minutes. The light was flat, the couple was cold, and I nearly called it. Then, almost by accident, we stayed. The sun dropped below the treeline, bounced once off the far shore, and turned the whole lake the colour of weak tea. That frame — the one that almost didn't happen — is still the one people ask about.",
      "Since then I build in what I call the slow window: forty unstructured minutes at the end of every session with nowhere to be. No shot list, no direction, just permission to notice. Most of it produces nothing usable. But the one frame it does produce is usually the reason the client hired me in the first place.",
      "If there's a single piece of advice in this, it's a boring one: build in the time before you need it, not after you've missed the light. You can't negotiate with a sunset.",
    ],
    secondaryImage: {
      id: "1502680390469-be75c86b636f",
      alt: "Surfer riding a turquoise wave in late afternoon light",
    },
  },
  {
    slug: "santorini-notes",
    title: "Notes from ten days in Santorini",
    excerpt:
      "A loose journal from the Aegean — poppy fields, missed ferries, and the family who let me follow them everywhere.",
    date: "September 2025",
    readTime: "6 min read",
    image: {
      id: "1465146344425-f00d5f5c8f07",
      alt: "Field of red poppies under a soft afternoon sky",
    },
    pullQuote: "No shot list, no itinerary — just the instruction to wander until the light did something worth stopping for.",
    body: [
      "The brief for this one, generously, was no brief at all. A family of five asked me to follow them for ten days around the island and 'just see what happens.' I've never said yes to anything faster.",
      "What happened, mostly, was waiting. For ferries that ran late, for toddlers who refused the good light and demanded the bad, for the wind to stop rearranging everyone's hair for one merciful minute. The photographs that came out of it are less a record of a holiday than a record of everyone's patience running out at slightly different times.",
      "My favourite image from the whole trip is not in the gallery I delivered. It's a blurred, half-focused frame of the youngest kid mid-sprint through a poppy field, taken while I was still raising the camera. I kept it anyway. Some of the best evidence of a good trip is the photograph you weren't ready for.",
      "Santorini photographs itself, everyone will tell you. They're not wrong about the blue. But the blue was never really the point.",
    ],
    secondaryImage: {
      id: "1517840901100-8179e982acb7",
      alt: "Illuminated hotel sign glowing at night",
    },
  },
  {
    slug: "what-i-tell-nervous-couples",
    title: "What I tell nervous couples before the first look",
    excerpt:
      "A short, honest list — most of it has nothing to do with cameras at all.",
    date: "June 2025",
    readTime: "3 min read",
    image: {
      id: "1520854221256-17451cc331bf",
      alt: "Close up of a couple holding hands, shadows stretched across the grass",
    },
    pullQuote: "You will not remember a single instruction I give you today. You will remember how it felt.",
    body: [
      "Almost everyone who hires me is, quietly, a little afraid of being photographed. So before the first look, I say some version of the same three things, and none of them are about posing.",
      "First: I am not going to ask you to do anything that looks the way it feels to do it. If it feels silly, it will look silly. We'll find something that doesn't.",
      "Second: the walk toward each other matters more than the moment you arrive. Most couples sprint the first look and save the emotion for the hug. Slow the walk down and the rest takes care of itself.",
      "Third, and the one people remember most: you are allowed to forget I'm there. That's the whole job, really — not to direct a performance, but to become boring enough to ignore. The best wedding photographs are the ones taken by someone the couple has completely stopped noticing.",
    ],
    secondaryImage: {
      id: "1527529482837-4698179dc6ce",
      alt: "Wedding guests toasting with champagne at golden hour",
    },
  },
  {
    slug: "packing-list",
    title: "What's actually in my camera bag",
    excerpt:
      "Fewer lenses than you'd think, one very old light meter, and the snack I refuse to shoot a wedding without.",
    date: "March 2025",
    readTime: "3 min read",
    image: {
      id: "1600091166971-7f9faad6c1e2",
      alt: "Flat lay of a tailored blazer and trousers on a studio table",
    },
    pullQuote: "Every piece of gear in this bag has earned its place by nearly being left behind once.",
    body: [
      "People expect a longer list than this. Two bodies, two prime lenses I actually like, and a third I bring only for portraits and resent carrying every other time. That's the whole kit for most days.",
      "The one indulgence is a light meter older than I am, inherited rather than bought, that I trust more than any histogram. It has no real advantage over what's built into the camera. I use it anyway, mostly out of loyalty.",
      "The genuinely non-negotiable item is a snack — something that doesn't melt, crumble, or require both hands — because an eight-hour wedding day run on venue coffee alone produces worse photographs than a full stomach does. I have opinions about this that are stronger than my opinions about lenses.",
      "The rest is spares: batteries, cards, a lens cloth, and a second pair of comfortable shoes, which matters more to the quality of your photographs than almost anything on this list.",
    ],
    secondaryImage: {
      id: "1541963463532-d68292c34b19",
      alt: "Open book resting outdoors with misty mountains in the background",
    },
  },
];

export function getJournalEntry(slug: string) {
  return journalEntries.find((entry) => entry.slug === slug);
}

export { unsplash };

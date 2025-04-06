export interface Product {
  id: string;
  title: string;
  description: string;
  icon: string;
  gradient: {
    from: string;
    to: string;
    hoverFrom: string;
    hoverTo: string;
  };
  colSpan: 1 | 2;
  buttonVariant: "primary" | "secondary";
  buttonText: string;
}

export const products: Product[] = [
  {
    id: "find-parking",
    title: "Find Parking",
    description: "Never circle for parking again.",
    icon: "🅿️",
    gradient: {
      from: "from-blue-50",
      to: "to-blue-100",
      hoverFrom: "group-hover:from-blue-100",
      hoverTo: "group-hover:to-blue-200",
    },
    colSpan: 2,
    buttonVariant: "primary",
    buttonText: "Download",
  },
  {
    id: "image-converter",
    title: "Image Converter",
    description: "Convert any format instantly.",
    icon: "🖼️",
    gradient: {
      from: "from-purple-50",
      to: "to-purple-100",
      hoverFrom: "group-hover:from-purple-100",
      hoverTo: "group-hover:to-purple-200",
    },
    colSpan: 1,
    buttonVariant: "primary",
    buttonText: "Download",
  },
  {
    id: "cozy-sound",
    title: "Cozy Sound",
    description: "Ambient sounds for focus.",
    icon: "🎵",
    gradient: {
      from: "from-green-50",
      to: "to-green-100",
      hoverFrom: "group-hover:from-green-100",
      hoverTo: "group-hover:to-green-200",
    },
    colSpan: 1,
    buttonVariant: "primary",
    buttonText: "Download",
  },
  {
    id: "financial-planning",
    title: "Financial Planning",
    description: "Track spending, plan ahead.",
    icon: "💰",
    gradient: {
      from: "from-orange-50",
      to: "to-orange-100",
      hoverFrom: "group-hover:from-orange-100",
      hoverTo: "group-hover:to-orange-200",
    },
    colSpan: 2,
    buttonVariant: "primary",
    buttonText: "Download",
  },
  {
    id: "sunday-super-league",
    title: "Sunday Super League",
    description: "Organize your local league.",
    icon: "⚽",
    gradient: {
      from: "from-red-50",
      to: "to-red-100",
      hoverFrom: "group-hover:from-red-100",
      hoverTo: "group-hover:to-red-200",
    },
    colSpan: 1,
    buttonVariant: "primary",
    buttonText: "Download",
  },
  {
    id: "travel-guide",
    title: "Travel Guide",
    description: "Explore cities like a local.",
    icon: "✈️",
    gradient: {
      from: "from-teal-50",
      to: "to-teal-100",
      hoverFrom: "group-hover:from-teal-100",
      hoverTo: "group-hover:to-teal-200",
    },
    colSpan: 1,
    buttonVariant: "primary",
    buttonText: "Download",
  },
  {
    id: "more",
    title: "More coming soon",
    description: "Stay tuned for new products.",
    icon: "+",
    gradient: {
      from: "from-gray-50",
      to: "to-gray-100",
      hoverFrom: "group-hover:from-gray-100",
      hoverTo: "group-hover:to-gray-200",
    },
    colSpan: 1,
    buttonVariant: "secondary",
    buttonText: "View all",
  },
];

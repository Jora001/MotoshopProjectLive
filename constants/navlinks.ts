export interface BaseNavLink {
  label: string;
  href: string;
  icon?: string;
}

export interface BaseFooterItem {
  label?: string | string[];
  href?: string;
  icon?: string | string[];
}

export interface FooterSection {
  title: string;
  content: BaseFooterItem[];
}

export interface ProductsNavLink extends BaseNavLink {
  products: {
    label: string;
    href: string;
    icon: string;
  }[];
}

export type NavLink = BaseNavLink | ProductsNavLink;

export const NAV_LINKS: NavLink[] = [
  { label: "Մեր մասին", href: "/pages/aboutss", icon: "about-us" },
  {
    label: "Տեսականի",
    href: "/pages/assortment",
    products: [
      { label: "Մոտոցիկլեր", href: "/our/motorcycles", icon: "motorcycles" },
      { label: "Աքսեսուարներ", href: "/our/accessories", icon: "accessories" },
      { label: "Պահեստամասեր", href: "/our/spare parts", icon: "spare parts" },
      { label: "Մանկական", href: "/our/for kids", icon: "for kids" },
    ]
  },
  { label: "Փոխանակում", href: "/pages/feautures", icon: "trade-in" },
  { label: "Բլոգ", href: "/pages/blog", icon: "blog" },
  { label: "Ապառիկ", href: "/pages/installment", icon: "credit" },
];

export const FOOTER_RESOURCES_LINKS: FooterSection[] = [
  {
    title: "Օգտակար հղումներ",
    content: [
      { label: "Ապահովագրություն", href: "/pages/insurance" },
      { label: "Պետհամարանիշի ստուգում", href: "/pages/vehicle_plate_check" },
      { label: "Պայմաններ և դրույթներ", href: "/pages/privacy_policy" },
      { label: "Գաղտնիության քաղաքականություն", href: "/pages/terms_conditions" },
    ],
  },
  {
    title: "Այլ ծառայություններ",
    content: [
      { label: "Առաքման պայմաններ", href: "/pages/delivery_information" },
      { label: "Վերադարձի պայմաններ", href: "/pages/product_returns" },
      {
        label: "Վճարման եղանակներ",
        href: "/pages/payment_methods",
        icon: ["pay_apple", "pay_visa", "pay_master"],
      },
    ],
  },
    {
    title: "Հետադարձ կապ",
    content: [
      {
        label: ["ՀՀ, Երևան 0008", "Դավիթ Բեկի փողոց 1/5"],
        href: "/pages/delivery_information",
        icon: "footer_map",
      },
      {
        label: ["+374 10 43 43 00", "+374 55 12 00 00"],
        href: "/pages/delivery_information",
        icon: "footer_phone",
      },
    ],
  },
  {
    title: "Մեր այցեքարտը",
    content: [{ icon: "visit_card" }],
  },
];



export const MOBILE_NAV_LINKS: NavLink[] = [
  NAV_LINKS[0],
  NAV_LINKS[1],
  NAV_LINKS[4],
  NAV_LINKS[2],
  NAV_LINKS[3],
];
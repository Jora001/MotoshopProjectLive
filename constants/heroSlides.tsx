export interface HeroSlide {
  img: string;
  tabletImg?: string;
  mobileImg?: string;
  mainTitle: string;
  mainSubtitle: string;
  buttonText: string;
  redShapeText?: string;
  showLogos?: boolean;
}

export const HERO_SLIDES: HeroSlide[] = [
  {
    img: "/page1sec.png",
    tabletImg: "/firsttablet.png",
    mobileImg: "/firstpmobile.png",
    mainTitle: "Ազատությունը սկսվում է\nճանապարհից",
    mainSubtitle: "Ուժ և վերահսկում՝ ցանկացած ճանապարհին",
    buttonText: "Դիտել տեսականին",
    showLogos: true,
  },
  {
    img: "/page1pn22.png",
    tabletImg: "/tablsl2.png",
    mobileImg: "/mobilesl2.png",
    mainTitle: "Խելամիտ ընտրություն՝\nխելացի գնով",
    mainSubtitle:
      "Գտի՛ր քո նոր մոտոցիկլը՝\nհամադրելով հզորությունը և մատչելիությունը",
    buttonText: "Կարդալ ավելին",
    redShapeText:
      "Ակցիան գործում է սեպտեմբերի 30-ից նոյեմբերի 15-ը նշված տեսականու վրա։",
  },
  {
    img: "/page1pn2.png",
    tabletImg: "/tablsl3.png",
    mobileImg: "/mobilesl3.png",
    mainTitle: "Մոտոցիկլ վարել սովորելը\nայժմ առավել հասանելի է",
    mainSubtitle:
      "Բացահայտիր ազատության նոր ձևը՝\nսկսիր քո ճանապարհը այսօր։",
    buttonText: "Սկսել հիմա",
    redShapeText:
      "Սկսիր զրոյից՝ մասնագետների աջակցությամբ և հստակ ուսուցման ծրագրով։",
  },
];

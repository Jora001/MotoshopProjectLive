export interface Post {
  img: string;
  title: string;
  date: Date;
}

export const POSTS: Post[] = [
  {
    img: "/post1.jpg",
    title: "Անվտանգ վարելու լավագույն խորհուրդները",
    date: new Date("2025-09-24"),
  },
  {
    img: "/post2.png",
    title: "2026 Ducati Panigale V4 R – առաջին հայացք",
    date: new Date("2025-09-05"),
  },
  {
    img: "/post3.png",
    title: "Ավտոմեքենայի յուղ vs մոտոցիկլի յուղ ի՞նչ պետք է իմանան վարորդները",
    date: new Date("2025-09-01"),
  },
];
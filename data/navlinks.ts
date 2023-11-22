interface INavLinks {
  id: string;
  navTitle: string;
  position?: number;
}
export const NavLinks: INavLinks[] = [
  {
    id: "#about",
    navTitle: "About",
  },
  {
    id: "#work",
    navTitle: "Work",
  },
  {
    id: "#projects",
    navTitle: "Projects",
  },
  {
    id: "#contact",
    navTitle: "Contact me",
  },
];

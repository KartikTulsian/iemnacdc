type SubMenuItme = {
  id: number;
  title: string;
  path?: string;
  newTab: boolean;
};

type MenuItem = {
  id: number;
  title: string;
  path?: string;
  newTab: boolean;
  submenu?: SubMenuItme[];
};


const menuData: MenuItem[] = [
  {
    id: 1,
    title: "Home",
    path: "/",
    newTab: false,
  },
  {
    id: 2,
    title: "About",
    path: "/about",
    newTab: false,
  },
  {
    id: 33,
    title: "Speakers",
    path: "/speakers",
    newTab: false,
  },
  {
    id: 3,
    title: "Committee",
    path: "/committee",
    newTab: false,
  },
  {
    id: 4,
    title: "NACDC 2026",
    newTab: false,
    submenu: [
      {
        id: 41,
        title: "Call For Papers",
        path: "/callForPapers",
        newTab: false,
      },
      {
        id: 42,
        title: "Registration",
        path: "/registration",
        newTab: false,
      },
      {
        id: 43,
        title: "Venue",
        path: "/venue",
        newTab: false,
      },
      {
        id: 44,
        title: "Schedule",
        path: "/schedule",
        newTab: false,
      },
    ],
  },
  {
    id: 5,
    title: "Contact",
    path: "/contact",
    newTab: false,
  },
  {
    id: 6,
    title: "Pages",
    newTab: false,
    submenu: [
      {
        id: 61,
        title: "About Page",
        path: "/about",
        newTab: false,
      },
      {
        id: 62,
        title: "Contact Page",
        path: "/contact",
        newTab: false,
      },
      {
        id: 63,
        title: "Blog Grid Page",
        path: "/blog",
        newTab: false,
      },
      {
        id: 64,
        title: "Blog Sidebar Page",
        path: "/blog-sidebar",
        newTab: false,
      },
      {
        id: 65,
        title: "Blog Details Page",
        path: "/blog-details",
        newTab: false,
      },
      {
        id: 66,
        title: "Error Page",
        path: "/error",
        newTab: false,
      },
    ]
  }
];
export default menuData;

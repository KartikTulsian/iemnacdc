export type SubMenuItme = {
  id: number;
  title: string;
  path?: string;
  newTab: boolean;
};

export type MenuItem = {
  id: number;
  title: string;
  path?: string;
  newTab: boolean;
  submenu?: SubMenuItme[];
};



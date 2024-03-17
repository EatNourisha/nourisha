import Ghana from "./Ghana";
import Nigeria from "./Nigeria";
import Zimbabwe from "./Zimbabwe";

export const TabsData = {
  TabTitle: [
    {
      id: "tab1",
      title: "Nigeria",
    },

    {
      id: "tab2",
      title: "Ghana",
    },

    {
      id: "tab3",
      title: "Zimbabwe",
    },
  ],

  TabContents: [
    { id: "tab1", comp: <Nigeria /> },
    { id: "tab2", comp: <Ghana /> },
    { id: "tab3", comp: <Zimbabwe /> },
  ],
};

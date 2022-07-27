import React from "react";

const Context = React.createContext(null);

function Provider({ children }) {
  const [state, setState] = React.useState([
    {
      title: "IT",
      subDirection: [
        {
          title: "Web dasturlash",
          isChecked: false,
        },
        {
          title: "Mobile dasturlash",
          isChecked: false,
        },
      ],
    },
    {
      title: "Dizayn",
      subDirection: [
        {
          title: "UI/UX dizayn",
          isChecked: false,
        },
        {
          title: "Grafik dizayn",
          isChecked: false,
        },
      ],
    },
    {
      title: "Biznes",
      subDirection: [
        {
          title: "Menejment",
          isChecked: false,
        },
        {
          title: "Kredit va audit",
          isChecked: false,
        },
      ],
    },
    {
      title: "Ta’lim",
      subDirection: [
        {
          title: "Matematika",
          isChecked: false,
        },
        {
          title: "Fizika",
          isChecked: false,
        },
      ],
    },
    {
      title: "SMM",
      subDirection: [
        {
          title: "Marke",
          isChecked: false,
        },
        {
          title: "sd",
          isChecked: false,
        },
      ],
    },
  ]);

  return <Context.Provider value={{ state, setState }}>{children}</Context.Provider>;
}

export { Context, Provider };

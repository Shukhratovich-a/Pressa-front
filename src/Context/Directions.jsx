import React from "react";

const Context = React.createContext(null);

function Provider({ children }) {
  const [state, setState] = React.useState([]);

  React.useEffect(() => {
    (async () => {
      const responce = await fetch("http://localhost:5000/categories");
      const data = await responce.json();

      if (data.status === 200 && data.data.length > 0) {
        const array = [];

        for (let category of data.data) {
          const obj = {
            id: category.category_id,
            title: category.category_name,
            subDirection: [],
          };
          if (category.sub_categories[0]) {
            for (let subCategory of category.sub_categories) {
              const subObj = {
                id: subCategory.sub_category_id,
                title: subCategory.sub_category_name,
                isChecked: false,
              };
              obj.subDirection.push(subObj);
            }
          }
          array.push(obj);
        }

        setState(array);
      }
    })();
  }, []);

  return <Context.Provider value={{ state, setState }}>{children}</Context.Provider>;
}

export { Context, Provider };

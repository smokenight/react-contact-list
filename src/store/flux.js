const getState = ({ getStore, getActions, setStore }) => {
  return {
      store: {
          demo: [
              {
                  title: "FIRST",
                  background: "white",
                  initial: "white"
              },
              {
                  title: "SECOND",
                  background: "white",
                  initial: "white"
              }
          ],
          favorites: [],
      },
      actions: {
          
          exampleFunction: () => {
              getActions().changeColor(0, "green");
          },
          loadSomeData: () => {
          
          },
          toggleFavorite: (item) => {
              // Validate item structure
              if (!item || !item.uid || !item.name || !item.type) {
                  console.error("Invalid item passed to toggleFavorite", item);
                  return;
              }

              const store = getStore();
              const favorites = store.favorites;

            
              console.log("Current Favorites:", favorites);
              console.log("Item to Toggle:", item);

            
              const exists = favorites.some(fav => fav.uid === item.uid && fav.type === item.type);

              
              const newFavorites = exists
                  ? favorites.filter(fav => !(fav.uid === item.uid && fav.type === item.type))
                  : [...favorites, { uid: item.uid, name: item.name, type: item.type }];

              
              console.log("Updated Favorites:", newFavorites);

              
              setStore({ favorites: newFavorites });
          },
          changeColor: (index, color) => {
              const store = getStore();
              const demo = store.demo.map((elm, i) => {
                  if (i === index) elm.background = color;
                  return elm;
              });

              setStore({ demo: demo });
          }
      }
  };
};

export default getState;
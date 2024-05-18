import React, { useEffect, useReducer } from "react";
import Guitar from "./components/Guitar";
import Header from "./components/Header";
import { cartReducer, initialState } from "./reducers/cart-reducer";

function App() {
  // const [auth, setAuth] = useState(false);
  // const [total, setTotal] = useState(0);
  // const { clearCart } = useCart();
  const [state, dispatch] = useReducer(cartReducer, initialState);
  // console.log("state", state);
  // const [auth, setAuth] = useState(20);
  // setAuth(false);
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(state.cart));
  }, [state.cart]);

  return (
    <>
      <Header cart={state.cart} dispatch={dispatch} />

      <main className="container-xl mt-5">
        <h2 className="text-center">Nuestra Colección</h2>

        <div className="row mt-5">
          {state.data.map((guitar) => (
            <Guitar
              key={guitar.id}
              guitar={guitar}
              // setCart={setCart}
              // addToCart={addToCart}
              dispatch={dispatch}
            />
          ))}
        </div>
      </main>

      <footer className="bg-dark mt-5 py-5">
        <div className="container-xl">
          <p className="text-white text-center fs-4 mt-4 m-md-0">
            Guitars - Todos los derechos Reservados
          </p>
        </div>
      </footer>
    </>
  );
}

export default App;

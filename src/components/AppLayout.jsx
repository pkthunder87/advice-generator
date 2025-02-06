import { useEffect, useReducer } from "react";
import Attribution from "./Attribution";
import DiceButton from "./DiceButton";
import getURL from "./getUrl";

const initialState = { advice: "", adviceNum: "" };

function reducer(state, action) {
  switch (action.type) {
    case "clickDice":
      return {
        ...state,
        advice: action.payload.text,
        adviceNum: action.payload.id,
      };
    default:
      throw new Error("Unknown action");
  }
}

function AppLayout() {
  const [{ advice, adviceNum }, dispatch] = useReducer(reducer, initialState);

  async function getAdvice() {
    try {
      const data = await getURL("https://api.adviceslip.com/advice");

      dispatch({
        type: "clickDice",
        payload: {
          id: data.slip.id,
          text: data.slip.advice,
        },
      });
    } catch (err) {
      console.error(`There was an error! ${err}`);
    }
  }

  useEffect(() => {
    (async function () {
      await getAdvice();
    })();
  }, []);

  return (
    <main className="app-layout advice">
      <Attribution />
      <h2 className="advice__number">Advice #{adviceNum}</h2>
      <h2 className="advice__text">{advice}</h2>

      <picture>
        <source
          media="(min-width:465px)"
          srcSet="./assets/images/pattern-divider-desktop.svg"
        />
        <img
          src="./assets/images/pattern-divider-mobile.svg"
          alt="page divider"
        />
      </picture>
      <DiceButton getAdvice={getAdvice} />
    </main>
  );
}

export default AppLayout;

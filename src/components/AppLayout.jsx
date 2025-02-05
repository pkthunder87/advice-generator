import Attribution from "./Attribution";
import DiceButton from "./DiceButton";

function AppLayout() {
  return (
    <main className="app-layout advice">
      <Attribution />
      <h2 className="advice__number">Advice #117</h2>
      <h2 className="advice__text">
        &ldquo;It is easy to sit up and take notice, what&apos;s difficult is
        getting up and taking action.&rdquo;
      </h2>

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
      <DiceButton />
    </main>
  );
}

export default AppLayout;

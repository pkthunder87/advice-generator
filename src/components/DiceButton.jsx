function DiceButton({ getAdvice }) {
  async function handleClick() {
    await getAdvice();
  }

  return (
    <div onClick={handleClick} className="advice__dice">
      <img
        className="advice__dice--img"
        src="./assets/images/icon-dice.svg"
        alt="dice icon"
      />
    </div>
  );
}

export default DiceButton;

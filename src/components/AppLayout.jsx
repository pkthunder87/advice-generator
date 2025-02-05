function AppLayout({ children }) {
  return (
    <main className="app-layout advice">
      <h2 className="advice__number">Advice #117</h2>
      <h2 className="advice__text">
        &ldquo;It is easy to sit up and take notice, what&apos;s difficult is
        getting up and taking action.&rdquo;
      </h2>
      <img
        src="./assets/images/pattern-divider-mobile.svg"
        alt="page divider"
      />
    </main>
  );
}

export default AppLayout;

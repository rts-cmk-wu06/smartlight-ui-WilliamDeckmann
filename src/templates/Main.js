const Main = (props) => {
  return (
    <main className="Main w-full p-6 pb-8 relative rounded-t-3xl bg-container">
      {props.children}
    </main>
  );
};

export default Main;

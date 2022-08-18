const Header = (props) => {
  return (
    <header className="Header w-full px-6 pb-8 grid col-start-1 col-end-2 row-start-1 row-end-2">
      {props.children}
    </header>
  );
};

export default Header;

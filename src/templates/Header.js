const Header = (props) => {
    return (
        <header className="Header w-full px-6 pb-8">
            {props.children}
        </header>
    );
}
 
export default Header;
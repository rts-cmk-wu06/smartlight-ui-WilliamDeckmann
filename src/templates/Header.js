const Header = (props) => {
    return (
        <header className="Header w-full px-6 pb-8 flex flex-col gap-y-8">
            {props.children}
        </header>
    );
}
 
export default Header;
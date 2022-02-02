const Footer = (props) => {
    return (
        <footer className="Footer w-100 p-5 flex justify-center bg-white">
            {props.children}
        </footer>
    );
}
 
export default Footer;
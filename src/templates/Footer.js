const Footer = (props) => {
    return (
        <footer className="Footer w-full p-5 flex justify-center bg-footer">
            {props.children}
        </footer>
    );
}
 
export default Footer;
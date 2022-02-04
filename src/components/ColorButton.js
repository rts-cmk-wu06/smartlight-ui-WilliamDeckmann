const ColorButton = (props) => {
    return (
        <button className="Color-button h-7 w-7 rounded-full" style={{backgroundColor: props.color}} >
        </button>
    );
}
 
export default ColorButton;
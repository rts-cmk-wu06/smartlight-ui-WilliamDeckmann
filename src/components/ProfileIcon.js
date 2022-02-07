const ProfileIcon = (props) => {
    return (
        <figure className="Profile-icon h-14 w-14  grid grid-cols-1 grid-rows-1">
            <img className="Profile-icon__img col-start-1 col-end-2 row-start-1 row-end-2 border-2 rounded-full border-profileIcon-border" src={props.src} alt="profile icon" />
            {props.active && <div className="Profile-icon__notification h-3 w-3 rounded-full bg-profileIcon-notification col-start-1 col-end-2 row-start-1 row-end-2 justify-self-end"></div>}
        </figure>
    );
}
 
export default ProfileIcon;
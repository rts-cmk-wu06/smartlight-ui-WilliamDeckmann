const Main = (props) => {

    return (
        <main className="Main w-full p-6 flex flex-col gap-x-8 rounded-t-3xl bg-container">
            {props.children}
        </main>
    );
}
 
export default Main;
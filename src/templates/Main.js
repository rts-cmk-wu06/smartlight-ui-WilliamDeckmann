const Main = (props) => {

    return (
        <main className="Main w-full p-6 flex flex-col gap-8 rounded-t-3xl bg-slate-100">
            {props.children}
        </main>
    );
}
 
export default Main;
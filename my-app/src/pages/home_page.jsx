import { Outlet, Link } from "react-router-dom";

export default function Home() {

    function handleSubmit(){
        console.log("hi in submit now")
    }
    return (
        <>
            <h1>Home Page</h1>
            <form onSubmit={handleSubmit}>
                <label>
                    Name:
                    <input type="text"  />
                </label>
                <input type="submit" value="Submit" />
            </form>
        </>
    )
}
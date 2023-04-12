

export default function enter({ }) {




    return (
        <main>
            <div className="bg-white p-20 mx-auto my-20 w-2/5 h-2/5">
                <h1 className="text-center font-semibold text-xl">Login</h1>
                <form className="flex flex-col space-y-2">
                    <label>Email</label>
                    <input type="text" id="email"></input>
                    <label>Password</label>
                    <input type="password" id="password"></input>
                    <button type="submit" className="mx-auto my-20 bg-black text-white w-3/5 p-4 rounded">Login</button>
                </form>
            </div>
        </main>
    )
}
export default function AdminDashboard() {
    return (
        <div>
            <section className="flex justify-center flex-col items-center">
                <h1 className="text-2xl font-bold py-2">ADMIN</h1>
                <ul className="flex gap-5 pt-2 ">

                    <li className="flex flex-col items-center gap-2">
                        <a href="inbox"><img className="w-5 " src="images/inbox.png" /></a>
                        <p className="">inbox</p>
                    </li>
                    <li><a href="file-manager">File Manager</a></li>
                    <li><a href="post">Post</a></li>
                    <li><a href="chat">Chat</a></li>
                </ul>
            </section>
            <section>
                <div>

                </div>
            </section>
        </div>
    )
}
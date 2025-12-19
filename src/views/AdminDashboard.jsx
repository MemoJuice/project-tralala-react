import { Link } from "react-router";

export default function AdminDashboard() {
    return (
        <div>
            <section className="flex justify-center flex-col items-center">
                <h1 className="text-2xl font-bold py-2">ADMIN</h1>
                <ul className="flex gap-5 pt-2 ">

                    <li className="flex flex-col items-center gap-2">
                        <Link to=""><img className="w-5 " src="images/inbox.png" /></Link>
                        <p className="">inbox</p>
                    </li>
                    <li><Link href="">File Manager</Link></li>
                    <li><Link href="">Post</Link></li>
                    <li><Link href="">Chat</Link></li>
                </ul>
            </section>
            <section>
                <div>

                </div>
            </section>
        </div>
    )
}
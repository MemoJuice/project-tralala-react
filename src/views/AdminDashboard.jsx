import { Link } from "react-router";

export default function AdminDashboard() {
    return (

    <div className="sm:px-50">
        <section className = "sm:flex-row flex-col ">
            {/* แนบบาร์ */}
                    <p className="sm:font-bold sm:pt-10 sm:text-center sm:p-5 sm:text-4xl
                    text-center text-3xl font-bold p-5 text-center"
                    >ADMIN</p>
                    <div className=" sm:flex sm:justify-center
                    flex-col justify-center"
                    >
                        <ul className="sm:flex sm:font-bold sm:justify-center sm:gap-90
                                        flex font-bold justify-center gap-10"
                                        >
                        <li className="sm:flex sm:flex-col sm:items-center sm:gap-3 ">
                            <a href="inbox"><img className="sm:w-5" src="inbox.png" /></a>
                                <p className=" ">inbox</p>
                        </li>
                        <li className="sm:flex sm:flex-col sm:items-center sm:gap-3">
                            <a href="file-manager"><img className="sm:w-5 " src="file-manager.png" /></a>
                                <p className="">File Manager</p>
                            </li>
                            <li className="sm:flex sm:flex-col sm:items-center sm:gap-3">
                                <a href="post"><img className="sm:w-5 " src="post.png" /></a>
                            <p className=" ">Post</p>
                            </li>
                        <li className="sm:flex sm:flex-col sm:items-center sm:gap-3">
                                <a href="chat"><img className="w-5 " src="chat.png" /></a>
                            <p className="">Chat</p>
                        </li>
                        </ul>
                    </div>

                {/* ช่อง NewUser */}
                    <div className="sm:grid sm:grid-cols-4 sm:grid-rows-6 sm:gap-20 sm:pt-10 sm:px-5
                    px-9 pt-10 grid grid-cols-1 gap-10"
                     >
                         <div className="sm:col-span-2 sm:row-span-2
                         "
                         >
                            <div className="bg-pink-300 sm:w-155 sm:h-80 sm:rounded-2xl
                            w-80 h-50 rounded-2xl"
                            >
                            <p className="sm:p-4 sm:text-2xl sm:font-bold text-gray-900
                            p-4 text-lg"
                            >New user</p>
                            <p className="text-gray-900 sm:items-center sm:flex sm:justify-center sm:gap-20 sm:items-center sm:font-semibold sm:text-4xl sm:pt-6
                            flex justify-center gap-10 items-center text-lg pt-1"
                            >
                                <img className="sm:w-28 sm:pb-2 w-25 pb-2" src="https://static.vecteezy.com/system/resources/thumbnails/019/879/186/small/user-icon-on-transparent-background-free-png.png"/>
                                    9999
                                </p>
                            <div className="sm:pt-15 sm:px-10 px-5 pt-4 ">
                                <p className=" sm:flex rounded border-2 bg-gray-100 sm:justify-center text-lg text-gray-900 sm:py-4 font-bold
                                px-13 justify-center py-1 "
                                >
                                    View all customers
                                </p>
                            </div>
                        </div>
                    </div>
                {/* ช่อง Statistic */}

                <div className="sm:col-span-2 sm:row-span-2 sm:col-start-1 sm:row-start-4">
                    <div className="sm:flex-col bg-gray-900 sm:w-155 sm:h-80 rounded-2xl
                                    h-80"
                                    >
                        <p className="text-white sm:p-4 sm:text-2xl sm:font-bold
                        text-lg p-3"
                        >
                            Statistic
                        </p>



                        <div className="sm:flex">
                            <div className="w-auto px-15
                            sm:px-15"
                            >
                                <img className="w-50 " src="https://png.pngtree.com/png-vector/20240614/ourmid/pngtree-circular-graph-showing-the-color-vector-png-image_7034620.png"   alt="" />
                            </div>
                            <div className="w-auto text-center py-1 text-white
                             sm:py-15 sm:text-3xl"
                            >
                                <p>
                                    9999
                                <p>
                                    Revenue today
                                </p>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                    <div className="sm:col-span-2 sm:row-span-3 sm:col-start-3 sm:row-start-1
                                    "
                                    >
                        <div className=" sm:flex sm:gap-6 bg-gray-900 rounded-2xl sm:h-110 sm:w-155
                        flex gap-8 h-60 w-80">
                            <div className="sm:py-5 sm:px-5
                            py-7 px-5"
                            >
                                <img className="sm:w-100 w-100" src="https://images.vexels.com/media/users/3/130343/isolated/preview/617e25c481c3d5c6d536ad89260c99f7-flat-colorful-pie-chart.png" />
                            </div>
                            <div>
                                <p className="sm:text-2xl sm:font-bold text-white sm:pt-5 sm:p-1
                                text-lg p-4 "
                                >
                                    Daily Sales
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="sm:col-span-2 sm:row-span-3 sm:col-start-3 sm:row-start-4 pb-10 ">
                        <div className=" sm:flex-col bg-pink-300 sm:w-155 sm:h-110 rounded-2xl
                        w-80 "
                        >
                            <p className=" sm:px-40 sm:py-5 sm:font-bold sm:text-2xl text-gray-900
                             px-15 py-1 text-lg "
                            >
                                Realtime active users</p>
                            <div className="sm:flex-col sm:px-15 sm:pb-5
                            px-10 pb-5"
                            >
                             <img className="rounded-2xl" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSB6gi2p1rZGCWrCECYZQ1dqMl562afSu-fzA&s" width={550} />
                            </div>
                        </div>
                    </div>
                </div>
        </section>
        <Link to="/userdashboard">
							<button className="block mx-auto md:ml-[25%] mb-4 rounded-3xl bg-violet-200 px-6 py-2 text-xl font-semibold text-gray-800 outline-1 outline-violet-400 hover:cursor-pointer hover:bg-violet-500 hover:text-gray-100">บันทึก</button>
		</Link>

    </div>
    )};
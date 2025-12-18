export default function AdminDashboard() {
    return (
        <>
        <div className="bg-yellow-200 w-auto pt-5 flex flex-col gap-15">
            <section className="flex justify-center flex-col items-center ">
                <p className="text-2xl font-bold pt-3 text-4xl">ADMIN</p>
                <ul className="flex gap-6 pt-5 font-thin sm:flex sm:gap-50 sm:px-20">
                    <li className="flex flex-col items-center gap-3">
                        <a href="inbox"><img className="w-5 sm:hidden" src="inbox.png" /></a>
                        <p className="sm:bg-gray-100 sm:p-5 sm:w-50 sm:text-center sm:font-bold sm:rounded-lg">inbox</p>
                    </li>
                    <li className="flex flex-col items-center gap-3">
                        <a href="file-manager"><img className="w-5 sm:hidden" src="file-manager.png" /></a>
                        <p className="sm:bg-gray-100 sm:p-5 sm:w-50 sm:text-center sm:font-bold sm:rounded-lg">File Manager</p>
                    </li>
                    <li className="flex flex-col items-center gap-3">
                        <a href="post"><img className="w-5 sm:hidden" src="post.png" /></a>
                        <p className="sm:bg-gray-100 sm:p-5 sm:w-50 sm:text-center sm:font-bold sm:rounded-lg">Post</p>
                    </li>
                    <li className="flex flex-col items-center gap-3">
                        <a href="chat"><img className="w-5 sm:hidden" src="chat.png" /></a>
                        <p className="sm:bg-gray-100 sm:p-5 sm:w-50 sm:text-center sm:font-bold sm:rounded-lg">Chat</p>
                    </li>
                </ul>
            </section>
            <section className="flex flex-col justify-center text-center items-center sm:flex-row sm:pl-200 ">
                <div className="bg-gray-900 w-80 h-80 rounded-[5%] sm:w-300 sm:h-150 sm:mx-40 ">
                    <p className="text-white pt-5 font-bold  ">Daily Sales
                        <img className="rounded-[5%] sm:w-120 sm:h-100 " src="https://img.freepik.com/premium-vector/organic-products-main-components-circle-infographic-design-template-dark-theme_106317-35413.jpg?semt=ais_hybrid&w=740&q=80" />
                    </p>
                </div>
            </section>
            <section className="py-15 flex justify-center items-center flex flex-col bg-yellow-200 w-full sm:flex-row">
                <div className="bg-pink-300 w-80 h-50 rounded-2xl">
                    <p className="p-4 font-bold">New Users
                        <p className="px-28 py-8 text-3xl flex gap-5 text-gray-800">9999
                                                    <img src="https://static.vecteezy.com/system/resources/thumbnails/019/879/186/small/user-icon-on-transparent-background-free-png.png" />
                        </p>
                        <p className="flex justify-center items-center text-lg rounded border-2 bg-gray-100 text-gray-800">
                            View all customers</p>
                    </p>
                </div>
                <section className="flex justify-center bg-yellow-200 w-full pt-15  ">
                <div className="bg-gray-900 w-80 h-50 rounded-2xl flex justufy-start">
                    <p className="font-bold text-white p-4 ">
                        Statistic <img className="w-45" src="https://png.pngtree.com/png-vector/20240614/ourmid/pngtree-circular-graph-showing-the-color-vector-png-image_7034620.png" alt="" /> 
                        </p>
                    <p className="text-white flex flex-col text-xl font-bold pt-26 pl-10">9999
                        <p className="flex justify-center items-center" >Revenue today</p>
                    </p>
                </div>
            </section>
            </section>
            <section className="bg-yellow-200 pb-20 w-full h-50 flex flex-col justify-center items-center ">
                <div className="bg-pink-300 w-80 h-60 rounded-2xl">
                    <p className="p-4 font-bold pl-20">Realtime active users
                    </p>
                    <img className="w-100 px-10 py-5" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSB6gi2p1rZGCWrCECYZQ1dqMl562afSu-fzA&s"/>
                </div>
            </section>
        </div>
        </>
    )
}
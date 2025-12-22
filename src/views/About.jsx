import { Link } from "react-router";

export default function About() {
  return (
    <div>
      <section className="flex">
        <div className="flex flex-col items-center bg-white my-4 mx-auto w-[90%] rounded-[3rem] font-noto">
          <h1 className="text-center py-4 px-10 font-bold text-3xl">
            เกี่ยวกับเรา
          </h1>
          <div className="flex flex-col items-center pb-4">
            <h2 className="pb-4 text-2xl font-semibold text-indigo-900">Git Status Trala @JSD11</h2>
            <div className=" px-4 max-w-100">
              <img src="images/git_status_tralala_group.png" className="w-full rounded-3xl border-3 border-red-200" />
            </div>
            <p className="w-fit mt-6 mr-auto rounded-xl bg-sky-50 px-3 py-2 mx-auto text-base text-black">
              ร่าเริง แจ่มใส ใส่ใจ เพื่อนทุกคน
            </p>
          </div>
          <div>
            <Link to="/">
              <button className="block mx-auto mb-4 rounded-3xl bg-violet-200 px-3 py-2 text-xl font-semibold text-gray-800 outline-1 outline-violet-400 hover:cursor-pointer hover:bg-violet-500 hover:text-gray-100">กลับสู่หน้าหลัก</button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
export default function About() {
  return (
    <div>
      <section class="flex">
        <div class="flex flex-col items-center bg-white my-4 mx-auto w-[90%] rounded-[3rem] font-noto">
          <h1 class="text-center py-4 px-10 font-bold text-3xl">
            เกี่ยวกับเรา
          </h1>
          <div class="flex flex-col items-center pb-4">
            <h2 class="pb-4 text-2xl font-semibold text-indigo-900">Git Status Trala @JSD11</h2>
            <div class=" px-4 max-w-100">
              <img src="git_status_tralala_group.png" class="w-full rounded-3xl border-3 border-red-200" />
            </div>
            <p class="w-fit mt-6 mr-auto rounded-xl bg-sky-50 px-3 py-2 mx-auto text-base text-black">
              ร่าเริง แจ่มใส ใส่ใจ เพื่อนทุกคน
            </p>
          </div>
          <div>
            <a href="../index.html">
              <button class="block mx-auto mb-4 rounded-3xl bg-violet-200 px-3 py-2 text-xl font-semibold text-gray-800 outline-1 outline-violet-400 hover:cursor-pointer hover:bg-violet-500 hover:text-gray-100">กลับสู่หน้าหลัก</button>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
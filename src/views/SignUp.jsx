export default function SignUp(){
    return (
      <>
      <div className="flex items-center justify-center min-h-[calc(100vh-4rem)] p-4">
        <main className="bg-white rounded-3xl shadow-lg w-full max-w-md p-8">
            <h1 className="text-2xl font-bold text-center mb-8">สมัครสมาชิก</h1>

      <section>
        <form className="space-y-6">
          <div className="flex flex-col md:flex-row md:items-center md:gap-4">
            <label for="username" className="w-full md:w-1/3 text-gray-700">
              ชื่อผู้ใช้
            </label>
            <input
              id="username"
              name="username"
              type="text"
              placeholder="เบอร์โทรศัพท์/อีเมล"
              className="border-b border-gray-400 focus:border-black outline-none w-full py-2"
            />
          </div>
          <div className="flex flex-col md:flex-row md:items-center md:gap-4">
            <label for="password" className="w-full md:w-1/3 text-gray-700">
              รหัสผ่าน
            </label>

            <div className="relative w-full">
              <input
                id="password"
                name="password"
                type="password"
                 placeholder="******"
                className="border-b border-gray-400 focus:border-black outline-none w-full py-2"
              />
            </div>
          </div>
          <button
            type="submit"
            className="w-full bg-green-300 hover:bg-green-400 text-gray-800 py-3 rounded-lg font-medium mt-8"
          >
            เข้าสู่ระบบ
          </button>

          <button
            type="button"
            className="w-full border border-gray-300 rounded-lg py-3 flex justify-center items-center gap-2 hover:bg-gray-50"
          >
            <img src="https://www.google.com/favicon.ico" className="w-5" />
            เข้าสู่ระบบผ่าน Google
          </button>
        </form>
      </section>
      </main>
  </div>
  </>
    )
}
import { Link } from "react-router";

export default function Login() {
  return (
    <div className="h-[calc(100dvh-112px)] bg-[url(/images/senior_community_mobile.png)] sm:bg-[url(images/senior_community.png)] bg-cover bg-center">
      <div className="h-full flex items-center justify-center p-4 bg-linear-to-b from-[rgba(255,255,255,0.5)] to-pink-300">
        <div className="bg-white rounded-3xl shadow-lg w-full max-w-md p-6 md:max-w-xl md:p-10">
          <div className="text-center mb-8">
            <h1 className="text-xl md:text-2xl font-bold">ยินดีต้อนรับ</h1>
          </div>
          <form className="space-y-6">
            <div className="flex flex-col md:flex-row md:items-center md:gap-4">
              <label className="w-full md:w-1/3 text-gray-700">
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
              <label className="w-full md:w-1/3 text-gray-700">รหัสผ่าน</label>

              <div className="relative w-full">
                <input
                  id="password"
                  name="password"
                  type="password"
                  className="border-b border-gray-400 focus:border-black outline-none w-full py-2"
                />
              </div>
            </div>

            <div className="flex justify-between items-center text-sm">
              <label className="flex items-center gap-2">
                <input type="checkbox" />
                จดจำฉันไว้
              </label>

              <Link to="#" className="text-red-600">
                ลืมรหัสผ่าน?
              </Link>
            </div>

            <Link to="/userdashboard">
              <button
                type="submit"
                className="w-full bg-teal-300 hover:bg-teal-400 text-gray-800 py-2 rounded-lg"
              >
                เข้าสู่ระบบ
              </button>
            </Link>

            <Link to="/userdashboard">
              <button
                type="button"
                className="w-full border border-gray-300 rounded-lg py-2 flex justify-center items-center gap-2 mt-4"
              >
                <img src="https://www.google.com/favicon.ico" className="w-5" />
                เข้าสู่ระบบผ่าน Google
              </button>
            </Link>

            <div className="text-center text-sm mt-4">
              ไม่มีบัญชีผู้ใช้?
              <Link to="/signup" className="text-blue-600">
                ลงทะเบียน
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}



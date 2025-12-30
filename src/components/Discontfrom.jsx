export default function DiscontFrom (){
    return (
	<div className="rounded-xl p-4 bg-white shadow-sm">
		<h3 className="text-lg font-semibold mb-2">คูปองส่วนลด</h3>
		<form className="grid grid-cols-[1fr_auto] gap-2 mt-2">
			<input type="text" placeholder="เช่น: SAVE5" className="border rounded-lg px-3 py-2 text-sm bg-sky-50 focus:outline focus:outline-offset-1 focus:outline-indigo-600" />
			<button className="bg-pink-200 hover:bg-pink-600 text-black rounded px-4 py-2 font-bold hover:text-white hover:cursor-pointer">ใช้คูปอง</button>
		</form>
		<p className="text-gray-400 text-sm mt-2">ตัวอย่างส่วนลด 5% สำหรับรหัสที่ร่วมรายการ</p>
	</div>
    )
}
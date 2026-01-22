
export default function UserReview (){
    return (
      <div className="py-20">
      
        <div className="max-w-screen-xl mx-auto px-4 text-center">
          <h2 className="text-2xl text-gray-700 md:text-4xl font-bold">รีวิวจากผู้ใช้งาน</h2>
          <p className="text-gray-700 mt-2 mb-10">สิ่งที่ผู้ใช้งานชอบบริการเรา</p>

          <div className="grid md:grid-cols-3 gap-10">
              <div className="p-6 bg-white rounded-2xl shadow-md hover:shadow-lg pointer-events-auto">
                <div className="text-4xl hover:scale-125">👤</div>
                <h3 className="text-2xl font-semibold mt-3">มืออาชีพและปลอดภัย</h3>
                <p className="text-gray-700 mt-2">
                    ผู้ดูแลมีความเป็นมืออาชีพ ตรงเวลา ใส่ใจรายละเอียด และทำงานได้อย่างน่าเชื่อถือ
                </p>
            </div>

            <div className="p-6 bg-white rounded-2xl shadow-md hover:shadow-lg pointer-events-auto">
                <div className="text-4xl hover:scale-125">❤️</div>
                <h3 className="text-2xl font-semibold mt-3">ความใส่ใจ</h3>
                <p className="text-gray-700 mt-2">
                    ใส่ใจรายละเอียดเล็กๆน้อยๆของผู้สูงอายุ ทั้งร่างกาย และจิตใจ 
                </p>
            </div>

            <div className="p-6 bg-white rounded-2xl shadow-md hover:shadow-lg pointer-events-auto ">
                <div className="text-4xl hover:scale-125">🏠</div>
                <h3 className="text-2xl font-semibold mt-3">ดูแลเหมือนเป็นคนในบ้าน</h3>
                <p className="text-gray-700 mt-2">
                  ดูแลด้วยความจริงใจเหมือนคนในครอบครัว อบอุ่นและเป็นกันเอง
                </p>
            </div>

          </div>
        </div>
      </div>
    )
}
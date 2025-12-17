export default function UserProfile() {
  return (
    <>
      <div className="max-w-5xl mx-auto px-4 py-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Caregiver นานา จ๋าแม่
        </h2>

        <div className="grid md:grid-cols-2 gap-8 items-start">
          <img src="images/caregiver.png" className="rounded-xl" />

          <div>
            <h3 className="text-xl font-semibold mb-2">แนะนำตัว</h3>
            <p className="text-gray-600 leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in eros elementum tristique.Lorem ipsum
              dolor sit amet, consectetur adipiscing elit. Suspendisse varius
              enim in eros elementum tristique.Lorem ipsum dolor sit amet,
              consectetur adipiscing elit. Suspendisse varius enim in eros
              elementum tristique.Lorem ipsum dolor sit amet, consectetur
              adipiscing elit. Suspendisse varius enim in eros elementum
              tristique.Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in eros elementum tristique.Lorem ipsum
              dolor sit amet, consectetur adipiscing elit. Suspendisse varius
              enim in eros elementum tristique.Lorem ipsum dolor sit amet,
              consectetur adipiscing elit. Suspendisse varius enim in eros
              elementum tristique.Lorem ipsum dolor sit amet, consectetur
              adipiscing elit. Suspendisse varius enim in eros elementum
              tristique.Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in eros elementum tristique.
            </p>
          </div>
        </div>
      </div>

      {/* Latest Work */}
      <div className="max-w-5xl mx-auto px-4 py-12">
        <h3 className="text-2xl font-bold mb-2">งานครั้งล่าสุด</h3>
        <p className="text-gray-600 mb-6">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
          euismod nunc ut.
        </p>
        <div className="grid md:grid-cols-3 gap-6">
          <img
            src="images/caregiver-v1.png"
            className="max-w-sm w-full aspect-square rounded-xl"
          />
          <img
            src="images/caregiver-v2.png"
            className="max-w-sm w-full aspect-square rounded-xl"
          />
          <img
            src="images/caregiver-v3.png"
            className="max-w-sm w-full aspect-square rounded-xl"
          />
        </div>
      </div>

      {/* certificate */}
      <div className="max-w-5xl mx-auto px-4 py-12">
        <h3 className="text-2xl font-bold mb-4">หนังสือรับรอง</h3>
        <div className="space-y-10">
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-gray-700 font-semibold">2024</div>
            <div>
              <h4 className="font-semibold mb-1">หลักสูตรดูแลผู้สูงอายุ</h4>
              <p className="text-gray-600 text-sm">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </div>
            <img
              src="https://placehold.co/350x220"
              className="rounded-xl w-full"
            />
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-gray-700 font-semibold">2024</div>
            <div>
              <h4 className="font-semibold mb-1">หลักสูตรพยาบาล</h4>
              <p className="text-gray-600 text-sm">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </div>
            <img
              src="https://placehold.co/350x220"
              className="rounded-xl w-full"
            />
          </div>
        </div>
      </div>

      {/* All Projects */}
      <div className="max-w-5xl mx-auto px-4 py-12">
        <h3 className="text-2xl font-bold mb-6">งานทั้งหมด</h3>

        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <img
              src="https://placehold.co/400x250"
              className="rounded-xl w-full"
            />
            <div className="flex justify-between mt-2">
              <p className="font-semibold">งานที่ 1</p>
              <p className="text-gray-500">2025</p>
            </div>
          </div>

          <div>
            <img
              src="https://placehold.co/400x250"
              className="rounded-xl w-full"
            />
            <div className="flex justify-between mt-2">
              <p className="font-semibold">งานที่ 2</p>
              <p className="text-gray-500">2025</p>
            </div>
          </div>

          <div>
            <img
              src="https://placehold.co/400x250"
              className="rounded-xl w-full"
            />
            <div className="flex justify-between mt-2">
              <p className="font-semibold">งานที่ 3</p>
              <p className="text-gray-500">2025</p>
            </div>
          </div>

          <div>
            <img
              src="https://placehold.co/400x250"
              className="rounded-xl w-full"
            />
            <div className="flex justify-between mt-2">
              <p className="font-semibold">งานที่ 4</p>
              <p className="text-gray-500">2025</p>
            </div>
          </div>
        </div>
      </div>

      {/* Customer Reviews */}
      <div className="max-w-5xl mx-auto px-4 py-12 mb-20">
        <h3 className="text-2xl font-bold mb-6">รีวิวจากลูกค้า</h3>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white p-4 rounded-xl shadow text-center">
            <p className="font-semibold mb-2">สมศรี คนดี</p>
            <p className="text-gray-500 text-sm mb-3">★★★★☆</p>
            <p className="text-gray-600 text-sm">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>

          <div className="bg-white p-4 rounded-xl shadow text-center">
            <p className="font-semibold mb-2">นางนวล</p>
            <p className="text-gray-500 text-sm mb-3">★★★★★</p>
            <p className="text-gray-600 text-sm">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>

          <div className="bg-white p-4 rounded-xl shadow text-center">
            <p className="font-semibold mb-2">ยายแช่ม</p>
            <p className="text-gray-500 text-sm mb-3">★★★★☆</p>
            <p className="text-gray-600 text-sm">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

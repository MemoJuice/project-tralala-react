export default function TopCaregiver (){
    return (
		<div className="py-20 bg-sky-50 font-inter">
     	   <div className="max-w-screen-xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Top Caregiver</h2>

          <div className="grid md:grid-cols-2 gap-10 px-4 items-center">
            {/* <!-- Image --> */}

            <div>
              <img 
                src="https://www.isavta.co.il/content/migrated-a779904c62a810bcaef859555e16fdc2-592.jpg"
                className="rounded-2xl shadow-lg"
              />
            </div>

            {/* <!-- Text --> */}

            <div>
              <h3 className="text-2xl font-bold">Cameron Williamson</h3>
              <p className="text-sky-600 font-medium mb-3">Caregiver</p>

              <p className="text-gray-700 leading-relaxed">
                Known for exceptional compassion and excellent service.
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              </p>
            </div>
          </div>

        </div>
      </div>
)
}

export default function UserReview (){
    return (
      <div className="py-20">
      
        <div className="max-w-screen-xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold">Users Review</h2>
          <p className="text-gray-600 mt-2 mb-10">What our users say about us</p>

          <div className="grid md:grid-cols-3 gap-10">
              <div className="p-6 bg-white rounded-2xl shadow-md hover:shadow-lg pointer-events-auto">
                <div className="text-4xl">🏠</div>
                <h3 className="text-xl font-semibold mt-3">Feel Like Home</h3>
                <p className="text-gray-600 mt-2">
                    Caring team, warm atmosphere, trusted by families.
                </p>
            </div>

            <div className="p-6 bg-white rounded-2xl shadow-md hover:shadow-lg pointer-events-auto">
                <div className="text-4xl">👤</div>
                <h3 className="text-xl font-semibold mt-3">Professional</h3>
                <p className="text-gray-600 mt-2">
                  Skilled caregivers with experience and dedication.
                </p>
            </div>

            <div className="p-6 bg-white rounded-2xl shadow-md hover:shadow-lg pointer-events-auto">
                <div className="text-4xl">❤️</div>
                <h3 className="text-xl font-semibold mt-3">Lovely</h3>
                <p className="text-gray-600 mt-2">
                  Compassion and empathy in every service we deliver.
                </p>
            </div>

          </div>
        </div>
      </div>
    )
}
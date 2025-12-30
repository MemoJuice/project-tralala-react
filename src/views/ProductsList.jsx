import ProductslistCard from "@/components/Productslist-card"

export default function ProductsList (){
    return (
        <div className="min-h-full mx-4 md:mx-24 mt-16 mb-12 bg-white rounded-2xl shadow p-6">

                 {/* <!-- Heading --> */}

            <div className="mb-6">
                <h2 className="text-2xl font-bold">Our Cargivers</h2>
                <p className="text-gray-500">Discover a selection of caregiver, locally-sourced by care</p>
            </div>

                {/* <!-- Body --> */}
            <ProductslistCard />
        </div>
    )
}
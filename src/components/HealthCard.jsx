
export default function HealthCard({info}) {
  return (
    
    <div class="w-40 h-40  bg-white rounded-lg  text-sm font-medium shadow-sm mt-10  p-2 ">
      { info==="heartrate" && <h3>Heart Rate</h3>}
      { info==="bloodpressure" && <h3>Blood Pressure</h3>}
      { info==="bloodsugar" && <h3>Blood Sugar</h3>}

      { info==="heartrate" && <img
        src="/images/Heartrate.png"
        alt="Heart Rate"
        class="w-full mx-auto items-center py-2"
      />}
      {info==="bloodpressure" && <img
        src="/images/bloodpressure.png"
        alt="Blood Pressure"
        class="w-full mx-auto items-center py-2"
      />}
      {info==="bloodsugar" && <img
        src="/images/Bloodsugar.png"
        alt="Blood Sugar"
        class="w-full mx-auto items-center py-2"
      />}
    </div>
    
  )
}

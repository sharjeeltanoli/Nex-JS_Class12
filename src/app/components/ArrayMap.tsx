import Image from "next/image"
import alto from "/public/alto.png"
import civic from "/public/civic.png"
import city from "/public/city.png"
import corolla from "/public/corolla1.png"
const ArrayMap = () => {
  const Cars=[
    {CarName: "Suzuki Alto", price:250000, Reviews: 256, Img: <Image src={alto} alt="alto car image"/>  },
    {CarName: "Corolla", price:400000, Reviews: 130, Img: <Image src={corolla} alt="corolla car image"/>   },
    {CarName: "Civic", price:600000, Reviews: 190 , Img: <Image src={civic} alt="civic car image"/>  },
    {CarName: "Honda City", price:450000, Reviews: 300 , Img: <Image src={city} alt="city car image"/>  },

  ]

    return (
    <div className="md:flex">
{
Cars.map((Vehicle) =>{
    return(
 <div className="border rounded-lg h-64 w-1/1 md:w-1/2 lg:w-1/4 lg:h-72 bg-slate-200 my-2 mx-2 text-center ">
  <div className="w-full mt-4 px-2 h-36 object-center  ">            {Vehicle.Img}               </div>
  <div>
  <h3 className="text-2xl font-bold">  {Vehicle.CarName}         </h3>
  <h3 className="text-xl">            PKR {Vehicle.price}          </h3>
  <h3 className="text-lg">            {Vehicle.Reviews} Reviews     </h3>
  </div>  
 </div>  
    )
})
}


    </div>
  )
}

export default ArrayMap

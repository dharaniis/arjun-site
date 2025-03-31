import GetStartedBtn from "./GetStartedBtn"
import { PlanType } from '../../src/shared/types'
import PlanFeature from "./PlanFeature"



function PlanCard( { name, description, price, features }: PlanType) {
  return (
    <div className="font-sans w-md rounded-lg border shadow border-gray-600 bg-gray-950 transition-all duration-300 hover:scale-110">  
      <div className="m-10 flex flex-col gap-5 items-center justify-center ">        
              <h1 className="text-3xl text-red-600 goldman">{name}</h1>
              <p className="text-xl text-gray-500 font-light ">{description}</p>
              <div className="">
                  <span className="text-5xl font-extrabold">{price}</span>
                  <span className="goldman text-red-600">/month</span>
              </div>
              <ul className="h-72 flex flex-col justify-evenly gap-2 text-white text-left">
                {features.map((feature: string) => (
                  <PlanFeature
                    content = {feature}
                  />
                ))}
              </ul>
              <GetStartedBtn/>
      </div>        
    </div>
  )
}

export default PlanCard
import PlanCard from "../../components/PlanCard"
import { PlanType } from '../../shared/types'
type Props = {}

const PlansContent: Array<PlanType> = [
  {
    name: "Basic Plan",
    description: "Students looking for budget-friendly, self-paced learning without direct trainer interaction.",
    price: "$29", 
    features: ["Access to recorded workout sessions (3 per week)", "Monthly fitness challenges", "Access to a community forum for general Q&A and support", "Monthly fitness newsletter with tips and motivation", "Basic tracking tools (e.g., workout logs, online library and goal setting support)"],
  },
  {
    name: "Standard Plan",
    description: "Clients who want more structure and live sessions for motivation and accountability more specific results.",
    price: "$49", 
    features: ["All benefits of the Basic Plan", "Access to live group workout sessions (5 per week)", "Weekly progress tracking with feedback via email", "Nutrition tips and a monthly meal plan", "Nutrition tips and a monthly meal plans"],
  },
  {
    name: "Premium Plan",
    description: "Clients seeking personalized guidance and direct trainer interaction for quicker without direct trainer interaction.",
    price: "$119", 
    features: ["All benefits of the Standard Plan", "Personalized fitness plan tailored to individual goals", "1-on-1 virtual training sessions (2 per month)", "Exclusive Q&A sessions with the trainer", "Priority support via direct messaging. Personalized video feedback workout routines."],
  },
];

function Plans({}: Props) {
  return (
    <div className="flex flex-col items-center text-center" >
      <div className="my-24 max-w-screen-md">
          <h1 className="text-6xl text-red-600">Choose a plan thats right for you</h1>
          <p className="text-gray-400 text-xl font-sans font-light">These carefully designed pricing plans offer the perfect blend of flexibility, support, and personalization to cater to a wide range of fitness goals.</p>
        </div>
        <div className="w-full flex flex-row gap-10 justify-center">
            {PlansContent.map((plan: PlanType) => (
              <PlanCard
                key = {plan.name}
                name = {plan.name}
                description = {plan.description}
                price = {plan.price}
                features = {plan.features}
              />
            ))}
        </div>
  </div>
  )
}

export default Plans
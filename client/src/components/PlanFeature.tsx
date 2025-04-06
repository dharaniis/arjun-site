import { CheckIcon } from '@heroicons/react/24/solid'

type Props = {
    content: string,
}

const PlanFeature = ({content}: Props) => {
  return (
    <li className="flex space-x-2 text-sm md:text-[16px]"><CheckIcon className="size-8 text-green-700 flex-shrink-0"/><span>{content}</span></li>
  )
}

export default PlanFeature
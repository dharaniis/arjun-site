import { CheckIcon } from '@heroicons/react/24/solid'

type Props = {
    content: string,
}

const PlanFeature = ({content}: Props) => {
  return (
    <li className="flex space-x-2"><CheckIcon className="size-8 text-green-700 flex-shrink-0"/><span>{content}</span></li>
  )
}

export default PlanFeature
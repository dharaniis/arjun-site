import { ContactIconType } from "../shared/types"

type Props = {
    Icon: ContactIconType
}

function ContactIcons( { Icon } : Props) {
  const url = `${Icon}.svg`
  return (
    <div className="bg-white rounded-full p-[15px]">
        <img src={url} className="size-5"/>
    </div>
  )
}

export default ContactIcons
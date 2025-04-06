import { ContactIconType } from "../../shared/types"
import ContactIcons from "../../components/ContactIcons"
import ContactForm from "../../components/ContactForm";

type Props = {}

function ContactUs({}: Props) {
        
    return (
        <div id="ContactUs" className="flex justify-center items-center h-fit my-36"> 
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 font-sans w-84 md:w-[60rem]">
                <div className="flex flex-col gap-[50px]">
                    <div>
                        <h1 className="text-7xl text-red-600 goldman">Let's Talk</h1>
                        <p className="text-sm text-gray-500">Have some big idea or brand to develop and need help? Then reach out we'd love to hear about your project and provide help.</p>
                    </div>
                    <div className="space-y-3">
                        <h1 className="font-bold">Email</h1>
                        <div className="flex gap-5">
                        <ContactIcons Icon={ContactIconType.Mail}/>
                            <div>
                                <p>Mail</p>
                                <p className="font-bold">info@example.com</p>
                            </div>
                        </div>
                    </div>
                    <div className="space-y-3">
                        <h1 className="font-bold">Socials</h1>
                        <div className="flex gap-4">
                            <ContactIcons Icon={ContactIconType.Facebook}/>
                            <ContactIcons Icon={ContactIconType.Linkedin}/>
                            <ContactIcons Icon={ContactIconType.Instagram}/>
                        </div>
                    </div>
                </div>
                <div>
                    <ContactForm />
                </div>
            </div>
        </div>
    )
    }

export default ContactUs
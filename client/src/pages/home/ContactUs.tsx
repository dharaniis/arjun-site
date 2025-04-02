import { ContactIconType } from "../../shared/types"
import ContactIcons from "../../components/ContactIcons"
import { useForm } from "react-hook-form"

type Props = {}

function ContactUs({}: Props) {
    
    const {
        register,
        trigger,
        formState: { errors }, 
        } = useForm();

    const onSubmit = async (e: any) => {
        const isValid = await trigger();
        if (!isValid) {
            e.preventDefault();
        }};
    
    return (
        <div className="flex justify-center items-center h-fit my-36"> 
            <div className="grid grid-cols-2 gap-10 font-sans w-[60rem]">
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
                <div className="">
                    <form className="space-y-5"
                        target="_blank"
                        onSubmit={onSubmit}
                        action="/"
                        method="POST"            
                        >
                        <input 
                            type="text" 
                            className="rounded-md bg-gray-100 py-3 px-4 w-full text-gray-800" 
                            placeholder=" Name" 
                            {...register("name", {
                            required: true,
                            maxLength: 100,
                        })}/>
                        {errors.name && (
                            <p className="text-red-600 text-sm">
                            {errors.name.type === "required" && "This field is required."}
                            {errors.name.type === "maxLength" && "Max length is 100 char."}
                            </p>
                        )}
                        <input 
                            type="text" 
                            className="rounded-md bg-gray-100 py-3 px-4 w-full text-gray-800" 
                            placeholder="Email"
                            {...register("email", {
                                required: true,
                                pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                            })}
                        />
                        {errors.email && (
                            <p className="text-red-600 text-sm">
                            {errors.email.type === "required" &&
                                "This field is required."}
                            {errors.email.type === "pattern" && "Invalid email address."}
                            </p>
                        )}                    
                        <input 
                        type="text" 
                        className="rounded-md bg-gray-100 py-3 px-4 w-full text-gray-800" 
                        placeholder="Subject"
                        {...register("subject", {
                            required: true,
                            maxLength: 100,
                        })}
                        />
                        {errors.subject && (
                            <p className="text-red-600 text-sm">
                            {errors.subject.type === "required" && "This field is required."}
                            {errors.subject.type === "maxLength" && "Max length is 100 char."}
                            </p>
                        )}
                        <textarea rows="6" 
                            className="rounded-md bg-gray-100 py-3 px-4 w-full text-gray-800" 
                            placeholder="Message"
                            {...register("message", {
                                required: true,
                                maxLength: 2000,
                            })}
                        />
                        {errors.message && (
                            <p className="text-red-600 text-sm">
                            {errors.message.type === "required" &&
                                "This field is required."}
                            {errors.message.type === "maxLength" &&
                                "Max length is 2000 char."}
                            </p>
                        )}                    
                        <button type="submit" className="rounded-md w-full px-4 py-3 bg-red-600">Send</button>
                    </form>

                </div>
            </div>
        </div>
    )
    }

export default ContactUs
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import ContactForm from "../../components/ContactForm";

type Props = {}

function Contact({}: Props) {
    
    return (
        <div>
        <Navbar /> 
        <div className="mx-5 py-32 space-y-10">
            <div className="mx-auto space-y-2 text-center">
                <h1 className="text-6xl md:text-7xl text-red-600 ">Have a question?<br/>Shoot us an email</h1>
                <p className="text-[10px] md:text-base font-sans">We are an industry-leading publication that provides the latest news and insights about SEO, search, and how it impacts your business-and career.<br/>Have a question for us or feedback? Please click on the most appropriate category and fill out the form to reach us.</p>
            </div>
            <div className="mx-auto w-84 md:w-1/3">
                <ContactForm />
            </div>
        </div>
        <Footer />
    </div>
  )
}

export default Contact
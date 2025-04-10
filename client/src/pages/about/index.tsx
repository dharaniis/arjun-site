import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar"

type Props = {}

function About({}: Props) {
    return (
        <div>
            <Navbar />
            <div className="text-center px-12 py-36 space-y-10">
                <div>
                    <h1 className="text-7xl">ARJUN KUMAR</h1>
                    <p className="text-xl text-red-600">Fitness Coach, Fitness Youtuber, Self-made Athlete</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2">
                    <div className="mt-16 font-sans text-left basis-1/2">
                        <p>Hey! I am Tharun, a fitness science nerd, self-made athlete and a health coach. I trained 300+ people from across India to tone up, get lean abs, lose fat and build a body they feel great about.</p> ‍
                        <p> My fitness journey has been a rollercoaster ride. I was lean and weighed 47 kgs when I first began the workout to bulk up. I did gain muscles, but unnecessary fat too. Why? Because of the lack of the right kind of training and abundance of scattered, untrue information available on the internet.</p> ‍
                        <p>To get rid of fat and gain 6 packs, I started learning, experimenting and practising myself. In a couple of months, I lost 8 kgs of fat. It wasn't easy. I failed. I broke. I built it. I didn’t stop there. And I consider myself lucky because that's how I learnt the best of both worlds - lose fat and muscle gain.</p> ‍
                        <p>Because of all the pains I went through, I decided to launch the Fix-120. I know what it’s like to do all this alone. But you are not alone on this road, I am here to help you at every step.</p> ‍
                        <p>Over the years, I have researched the most effective workout strategies and created effective systematic training programs backed by scientific evidence and personal experience.</p> ‍
                        <p>I took the road to a healthy life in 2016 and since then, I never looked back to my tired and unfit self. I expertise in fat loss, muscle gain and being in shape. My current obsession is to help people build a strong body and craft a healthier life. Step by step.</p> ‍
                        <p>After launching several successful transformation stories on the planet, I started a Youtube channel with the sole purpose to help more people become fit. We are now trusted by 110k+ people as subscribers. I am excited to work with you in FitX-120.</p>
                    </div>
                    <div className="order-first md:order-none flex justify-center items-center">
                        <img className="w-[30rem] object-cover" src="saketabout.jpg"></img>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
    }

export default About
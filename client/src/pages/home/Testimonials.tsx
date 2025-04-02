import Testimonial from '@/components/Testimonial.tsx'
import { TestimonialType } from '../../shared/types'


type Props = {}

const TestimonialContent: Array<TestimonialType> = [
  {
    quote: "The best coach I’ve worked with!",
    longquote: "Arjun's personalized programs made all the difference in my fitness journey. His workouts are challenging yet enjoyable, and I could see real progress within weeks. Highly recommend!",
    name: "Ritika K",
    profession: "Developer at Open AI"
  },
  {
    quote: "Always motivating and supportive.",
    longquote: "Arjun not only provides effective workout plans but also keeps me motivated throughout. His constant check-ins and encouragement helped me stay on track even on tough days",
    name: "Pooja M",
    profession: "Lead designer at Dropbox"
  },
  {
    quote: "Incredible results in just 3 months!",
    longquote: "Arjun’s program completely changed my lifestyle. I lost 10kg and gained strength and confidence. He makes fitness feel easy to fit into a busy schedule.",
    name: "Rahul S",
    profession: "Software Engineer at Facebook"
  },
  {
    quote: "Perfect balance of fitness and nutrition.",
    longquote: "Arjun goes beyond workouts by offering insightful nutrition tips that complement his training perfectly. His holistic approach is exactly what I needed.",
    name: "Karan T",
    profession: "CTO at Google"
  }
]

function Testimonials({}: Props) {
  return (
    <div id="Testimonials" className="h-fit mx-10">
        <h1 className="my-24 text-7xl text-red-600 text-center">Success Stories</h1>
        <div className="grid grid-cols-2 gap-[100px] font-sans mx-16">
            {TestimonialContent.map((content:TestimonialType) => (
              <Testimonial
                quote = {content.quote}
                longquote = {content.longquote}
                name = {content.name}
                profession = {content.profession}
            />
            ))}
        </div>
    </div>
  )
}

export default Testimonials
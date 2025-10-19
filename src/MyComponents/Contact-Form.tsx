import { Mail, MapPin, PhoneCall } from "lucide-react"

function ContactForm() {
  return (
    <div className="w-full h-fit my-12 py-12 flex justify-center items-center flex-col gap-4">
        <strong className="text-2xl font-bold text-amber-600">Get In Touch</strong>
        <h1 className="font-bold text-5xl">For Any Query</h1>
        <div className="w-[80%] h-[80%] grid grid-cols-2 ">
            <div className="flex flex-col py-15 px-5 items-center justify-between gap-6 bg-gray-900">
                <div className="flex gap-4 border items-center border-gray-400 text-white p-2 w-full h-24">
                    <MapPin size={36} className="text-amber-500"/>
                    <div className="flex flex-col gap-2 "> 
                        <strong className="text-2xl font-bold text-amber-500">Location</strong>
                        <p  className="font-bol">123 Street, New York, USA</p>
                    </div>
                </div>
                <div className="flex gap-4 border items-center border-gray-400 text-white p-2 w-full h-24">
                    <PhoneCall  size={36} className="text-amber-500"/>
                    <div className="flex flex-col gap-2 "> 
                        <strong className="text-2xl font-bold text-amber-500">Phone</strong>
                        <p  className="font-bol">+93 795064649</p>
                    </div>
                </div>
                <div className="flex gap-4 border items-center border-gray-400 text-white p-2 w-full h-24">
                    <Mail size={36} className="text-amber-500"/>
                    <div className="flex flex-col gap-2 "> 
                        <strong className="text-2xl font-bold text-amber-500">Email</strong>
                        <p  className="font-bol">Banonazisharifi@gmail.com</p>
                    </div>
                </div>
            </div>
            {/* div one endded */}
            <form className="flex flex-col p-5 items-start justify-center gap-6 bg-amber-500">
                <input type="text" placeholder="Your Name" className="border outline-0 border-white w-full p-4" />
                <input type="text" placeholder="Your Email" className="border outline-0 border-white w-full p-4" />
                <input type="text" placeholder="Subject" className="border outline-0 border-white w-full p-4" />
                <textarea  placeholder="Subject" className="border outline-0 border-white w-full p-4 h-40" />
                <button className="px-5 py-4 bg-gray-900 hover:outline-1 outline-offset-2 outline-gray-900 transition-all duration-700 ease-linear text-amber-500 font-black">Send Messege</button>
            </form>
        </div>
    </div>
  )
}

export default ContactForm
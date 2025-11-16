import { Github, Mail, MapPin, PhoneCall } from "lucide-react"
import { useState } from "react"
import emailjs from '@emailjs/browser';
function ContactForm() {
    const [name,setName] = useState("");
    const [email,setEmail] = useState("");
    const [subject,setSubject] = useState("");
    const [Messege,setMessege] = useState("");
    function Handelclick(e:any){
        e.preventDefault();
        const publi_key = "dBf6x-D_GzZLr3gSr";
        const template_id = "template_r756xnc";
        const service_id = "service_ve0cr4c";
        const content= {
            from_name : name,
            from_email : email,
            subject : subject,
            to_name : "Nazi Sharifi",
            message: Messege
        };
    emailjs
      .send(service_id,template_id ,content, {
        publicKey: publi_key,
      })
   .then(() => {
    alert('SUCCESS!');
    setName("");
    setEmail("");
    setSubject("");
    setMessege("");
})
.catch((error) => {
     console.error(error); 
    alert('FAILED...');
});

    }
  return (
    <div className="w-full h-fit my-12 py-12 flex justify-center items-center flex-col gap-4">
        <strong className="text-2xl font-bold text-amber-600">Get In Touch</strong>
        <h1 className="font-bold text-5xl">For Any Query</h1>
        <div className="lg:w-[80%] w-[95%] h-[80%] grid lg:grid-cols-2 grid-cols-1 ">
            <div className="flex flex-col py-8 px-5 items-center justify-between gap-6 bg-gray-900">
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
                        <p  className="font-bol"><a href="tel:0093795064649">+93 795 064 649</a></p>
                    </div>
                </div>
                <div className="flex gap-4 border items-center border-gray-400 text-white p-2 w-full h-24">
                    <Mail size={36} className="text-amber-500"/>
                    <div className="flex flex-col gap-2 "> 
                        <strong className="text-2xl font-bold text-amber-500">Email</strong>
                        <p  className="font-bol">Banonazisharifi@gmail.com</p>
                    </div>
                </div>
                <div className="flex gap-4 border items-center border-gray-400 text-white p-2 w-full h-24">
                    <Github size={36} className="text-amber-500"/>
                    <div className="flex flex-col gap-2 "> 
                        <strong className="text-2xl font-bold text-amber-500">GitHub</strong>
                        <p  className="font-bol"><a href="https://github.com/nazisharifi2025">Nazisharifi2025</a></p>
                    </div>
                </div>
            </div>
            {/* div one endded */}
            <form onSubmit={Handelclick} className="flex flex-col p-5 items-start justify-center gap-6 bg-amber-500">
                <input value={name} onChange={(e)=> setName(e.target.value)} type="text" placeholder="Your Name" className="border outline-0 border-white w-full p-4" />
                <input value={email} onChange={(e)=> setEmail(e.target.value)}  type="text" placeholder="Your Email" className="border outline-0 border-white w-full p-4" />
                <input value={subject} onChange={(e)=> setSubject(e.target.value)}  type="text" placeholder="Subject" className="border outline-0 border-white w-full p-4" />
                <textarea  value={Messege} onChange={(e)=> setMessege(e.target.value)}  placeholder="Messege" className="border outline-0 border-white w-full p-4 h-40" />
                <button className="px-5 py-4 bg-gray-900 hover:outline-1 outline-offset-2 outline-gray-900 transition-all duration-700 ease-linear text-amber-500 font-black">Send Messege</button>
            </form>
        </div>
    </div>
  )
}

export default ContactForm
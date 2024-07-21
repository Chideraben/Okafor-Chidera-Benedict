import React ,{ useState }from 'react';
import emailjs from 'emailjs-com'
export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [message, setMessage] = useState("");

  

  const handleSubmit = (e)=>{
    e.preventDefault();

    const templateParems = {
      from_name: name,
      from_email: email,
      from_number: number,
      message: message,
    };

    emailjs.send('service_jx4uiw7',
      'template_tt5l4m3', templateParems, 'sp0HUXMg7kFba57Kd'
    )
    .then((response) => {
      console.log('SUCCESS!', response.status, response.text);
      alert("Message Sent!!");
    }, (err) => {
      console.log('FAILED...',err);
      alert(err)
    });

    //Clear the form after sending
    setName("");
    setEmail("");
    setMessage("");
    setNumber("");
  }

  return (
    <div className='flex flex-col justify-center items-center h-[100vh]' id='contact'>
          <h3 className=' font-bold text-2xl text-center text-[#001c4f] md:text-lg '>
            Contact Me
          </h3>
          
        <form className=' w-full   grid place-items-center py-10' onSubmit={handleSubmit}>
          <div className='flex justify-center items-center gap-3 flex-col px-3'>
            <div className='w-full flex gap-2 flex-wrap sm:flex sm:flex-nowrap md:flex md:flex-nowrap'>
              <input
                className='w-full outline-none h-[50px] border-2 font-semibold text-[#5f5b5b] text-sm bg-[transparent] border-[#BDBDBD] rounded px-4'
                placeholder='Your Name'
                type='text'
                value={name}
                onChange={(e)=>setName(e.target.value)}
                required
              />

              <input
                className='w-full outline-none h-[50px] border-2 font-semibold text-[#5f5b5b] text-sm bg-[transparent] border-[#BDBDBD] rounded px-4'
                placeholder='Your Email'
                value={email}
                type='email'
                onChange={(e)=>setEmail(e.target.value)}
                required
              />

              <input
                className='w-full outline-none h-[50px] border-2 text-sm font-semibold text-[#5f5b5b] bg-[transparent] border-[#BDBDBD] rounded px-4'
                placeholder='Your Phone Number'
                type='text'
                value={number}
                onChange={(e)=>setNumber(e.target.value)}
                required
              />
            </div>

           

            <div className='w-full'>
              <textarea
                className='w-full outline-none resize-none h-[222px] font-bold text-[#5f5b5b] bg-[transparent] text-base  text-start rounded border-2 border-[#BDBDBD] px-4 pt-3'
                placeholder='Message'
                value={message}
                onChange={(e)=>setMessage(e.target.value)}
                required
              />
            </div>

            <div className='w-full '>
              <button type='sumbit' className='bg-[#1C34FF] w-[120px] h-9 rounded hover:opacity-60 text-[#fdfdfd] text-base font-normal hover:bg-{#1C34FF}'>
                Send Message
              </button>
            </div>
          </div>
        </form>
    </div>
  )
}

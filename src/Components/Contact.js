import React ,{ useState }from 'react'
export default function Contact() {
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [number, setNumber] = React.useState("");
  const [message, setMessage] = React.useState("");

  const encode = (data)=>{
    return Object.keys(data)
    .map(
      (key)=> encodeURIComponent(key) + "=" + encodeURIComponent(data[key])

    ).join("&")
  }

  const handleSubmit = (e)=>{
    e.preventDefault();
    fetch("/",{
      method: "POST",
      headers: {"Content-Type": "application/x-www-form-urlencoded"},
      body: encode({"form-name": "contact", name, email, number, message})
    })
    .then(()=> alert("Message Sent!!"))
    .catch((error)=>alert(error))
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
                className='w-full h-[50px] border-2 font-semibold text-[#5f5b5b] text-sm bg-[transparent] border-[#BDBDBD] rounded px-4'
                placeholder='Your Name'
                type='text'
                name='name'
                onChange={(e)=>setName(e.target.value)}
              />

              <input
                className='w-full h-[50px] border-2 font-semibold text-[#5f5b5b] text-sm bg-[transparent] border-[#BDBDBD] rounded px-4'
                placeholder='Your Email'
                name='email'
                type='email'
                onChange={(e)=>setEmail(e.target.value)}

              />

              <input
                className='w-full h-[50px] border-2 text-sm font-semibold text-[#5f5b5b] bg-[transparent] border-[#BDBDBD] rounded px-4'
                placeholder='Your Phone Number'
                type='text'
                name='number'
                onChange={(e)=>setNumber(e.target.value)}

              />
            </div>

           

            <div className='w-full'>
              <textarea
                className='w-full resize-none h-[222px] font-bold text-[#5f5b5b] bg-[transparent] text-base  text-start rounded border-2 border-[#BDBDBD] px-4 pt-3'
                placeholder='Message'
                name='message'
                onChange={(e)=>setMessage(e.target.value)}

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

import { useState } from "react"

export default function Message() {
    const [values, setValues] = useState({
        name: '',
        email: '',
        message: '',
    })

    function handleInput(identifier, inputValue) {
        setValues(prevValues => ({
            ...prevValues,
            [identifier]: inputValue
        }))

    }
    function handleSendMail(e) {
        e.preventDefault()

        const fd = new FormData(e.target);
        const data = Object.fromEntries(fd.entries())
        console.log(data);        
    }
    return (
        <div className="w-[30%] mx-auto mt-[5rem]">
            {/* <h2>Send a message</h2> */}
            <form onSubmit={handleSendMail}>
                <div className="">
                    <label htmlFor="" className="block text-gray-700 font-medium mb-2">Name</label>
                    <input 
                    name="name"
                    type="text" 
                    required
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" 
                    value={values.name} 
                    onChange={(e) => handleInput('name', e.target.value)}
                    />
                </div>
                <div className="my-3">
                    <label htmlFor="" className="block text-gray-700 font-medium mb-2">Email</label>
                    <input 
                    name="email"
                    type="email" 
                    required
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" 
                    value={values.email} 
                    onChange={(e) => handleInput('email', e.target.value)}  
                    />
                </div>
                <div>
                    <label htmlFor="" className="block text-gray-700 font-medium mb-2">Message</label>
                    <textarea 
                    name="message" 
                    id="message" 
                    required
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" 
                    value={values.message} 
                    onChange={(e) => handleInput('message', e.target.value)}
                    >
                    </textarea>
                </div>
                <div className="flex justify-center mt-3">
                    <button className="rounded-lg bg-black text-white py-2 px-4 mr-3">Send</button>
                </div>
            </form>
        </div>
    )
}
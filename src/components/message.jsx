import { useState } from "react"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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

    const handleSendMail = async (e) => {
        e.preventDefault()
        
        try {
                const response = await fetch('https://getform.io/f/bxojkoma', {
                    method: 'POST',
                    headers: {
                        'Accept': 'application/json',
                        "Content-Type": "application/x-www-form-urlencoded"
                      },
                    body: new URLSearchParams(values).toString()
                })

                const data = await response.json()
                console.log(data);                

            if(response.ok) {
                toast.success('Message sent succesfully!');
                setValues({
                    name: '',
                    email: '',
                    message: '',
                })
            } else {
                toast.error('Failed to send your message. Please try again.');
                
            }
        } catch (error) {
            console.error('Error sending message.', error);
        }
           
    }

    return (
        <div className="w-[90%] md:w-[30%] mx-auto my-[5rem]">
            <ToastContainer position="top-center"/>
            <form onSubmit={handleSendMail}>
                <div>
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
import React, { useState } from 'react'

const Contact = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [phoneNumber, setPhonenNumber] = useState('')
    const [gender, setGender] = useState('')
    const [feedback, setFeedback] = useState('')

    // handle sumit

    const handleSubmit =  async (event) => {

        event.preventDefault();
        
        const formData = {firstName, lastName, email, phoneNumber, gender, feedback}

        try {
const response = await fetch ('/api/signup', formData);
alert('Form submitted successfully:' + response.data.message);
        } catch (error) {
            console.error ('Error submitting form')
            alert('Failed to submit form')
        }



    }
    return (
        <div className='h-auto p-[80px] bg-yellow-400 text-lg sm:bg-teal-500 md:bg-black md:px- lg:px-[250px] xl:bg-blue-500'>
            <div className='border p-[20px]'>
                <form onSubmit={handleSubmit}>
                    <div className='flex flex-col gap-[20px]'>
                        <div className='mb-5'>
                            <label className='block lg:text-white text mb-2'>First Name</label>
                            <input type='name'
                                value={firstName}
                                onChange={(event) => setFirstName(event.target.value)}
                                placeholder='first name'
                                className='p-2 rounded-md w-full'
                            />
                        </div>

                        <div className='gp-5'>
                            <label className='block mb-2'>Last Name</label>
                            < input
                                type='name'
                                value={lastName}
                                onChange={(event) => setLastName(event.target.value)}
                                placeholder='last name'
                                className='p-2 rounded-md w-[100%]'
                            />
                        </div>

                        <div>
                            <label className='block mb-2'>Email</label>
                            <input type='email'
                                value={email}
                                onChange={(event) => setEmail(event.target.value)}
                                placeholder='email'
                                className='p-2 rounded-md w-full'
                            />
                        </div>

                        <div>
                            <label className='block mb-2'>Phone Number</label>
                            <input type='tel'
                                value={phoneNumber}
                                onChange={(event) => setPhonenNumber(event.target.value)}
                                placeholder='phone'
                                className='p-2 w-full rounded-md' />
                        </div>
                        <div>
                            <label className='block mb-2'>Gender
                                <select
                                    value={gender}
                                    onChange={(event) => setGender(event.target.value)}
                                    className='p-2 w-full rounded-md'>
                                        <option>Select Gender</option>
                                    <option value= 'male'>Male</option>
                                    <option value= 'female'>Female</option>
                                </select>
                            </label>
                        </div>

                        <div>
                            <label className='block mb-2' >Feedback</label>
                            <textarea type='text'
                                value={feedback}
                                onChange={(event) => setFeedback(event.target.value)}
                                placeholder='give your feedback'
                                className='p-2 w-full rounded-md' />
                        </div>
                        <div className='flex justify-center items-center'>
                            <button className='p-2 rounded-md  bg-white'>Submit</button>
                        </div>
                    </div>
                </form>
            </div>





        </div>
    )
}

export default Contact
import React from "react";

const Contact = () => {


    return (
        <div className="bg-zinc-200 dark:bg-blacker mx-0 sm:mx-4 md:mx-10 sm:rounded-lg ">
            <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md ">
            <div className="">
            <h2 className="mb-4 text-6xl tracking-tight font-montserrat font-extrabold text-center text-zinc-700 dark:text-zinc-200 uppercase" id="contact">
                Get in touch
            </h2>
            <p className="mb-8 lg:mb-16 font-light text-center text-zinc-500 dark:text-gray-400 sm:text-md">
            I'd love to hear from you! If you have any questions, project inquiries, or would like to collaborate, 
            feel free to reach out. I'll get back to you as soon as I can.
            </p>
            </div>
            <div className="">
            <form action="https://getform.io/f/34e9ede6-3748-4b34-92f2-2bc5b6917711" method="POST" className="space-y-8 bg-teal-500 rounded p-10 dark:bg-teal-700">
                <div>
                <label htmlFor="email" className="block mb-2 text-sm font-medium text-zinc-700 dark:text-gray-300">
                    Your email
                </label>
                <input type="hidden" name="_gotcha" className='none'></input>
                <input
                    type="email"
                    name="email"
                    className="drop-shadow-md bg-gray-50 outline-teal-500 text-zinc-700 text-sm rounded-lg focus:ring-teal-500 focus:border-teal-500 block w-full p-2.5 dark:bg-black dark:placeholder-gray-200 dark:text-zinc-200 placeholder-zinc-600"
                    placeholder="name@domain.com"
                    required
                />
                </div>
                <div>
                <label htmlFor="subject" className="block mb-2 text-sm font-medium text-zinc-700 dark:text-gray-300 ">
                    Subject
                </label>
                <input
                    type="text"
                    name="subject"
                    className="block p-3 w-full text-sm text-zinc-700 bg-gray-50 rounded-lg  outline-teal-500 drop-shadow-md focus:ring-teal-500 focus:border-teal-500 dark:bg-black dark:placeholder-gray-200 dark:text-zinc-200 placeholder-zinc-600"
                    placeholder="How can I help you?"
                    required
                />
                </div>
            <div className="sm:col-span-2">
                <label htmlFor="message" className="block mb-2 text-sm font-medium text-zinc-700 dark:text-gray-300">
                    Your message
                </label>
                <textarea
                    name="message"
                    rows="6"
                    className="block p-2.5 w-full text-sm text-zinc-700 bg-gray-50 rounded-lg drop-shadow-md outline-teal-500 focus:ring-teal-500 focus:border-none dark:bg-black dark:placeholder-gray-200 dark:text-zinc-200 placeholder-zinc-600"
                    placeholder="Share your thoughts, ideas, or questions..."
                ></textarea>
            </div>
            <button
                type="submit"
                className="py-2.5 w-full sm:px-6 my-4 text-zinc-50 text-opacity-90 bg-teal-600 dark:bg-gradient-to-b dark:from-teal-500 dark:to-teal-600  text-md rounded-lg hover:scale-105 ease-in-out duration-300"
            >
                Send message
                </button>
            </form>
            </div>
            </div>
        </div>
    )
}

export default Contact;
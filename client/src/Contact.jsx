import React from "react";

const Contact = () => {


    return (
        <div className="bg-white dark:bg-blackest ">
            <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md ">
            <h2 className="mb-4 text-6xl tracking-tight font-montserrat font-extrabold text-center text-zinc-700 dark:text-white uppercase" id="contact">
                Get in touch
            </h2>
            <p className="mb-8 lg:mb-16 font-light text-center text-slate-800 dark:text-gray-400 sm:text-md">
            I'd love to hear from you! If you have any questions, project inquiries, or would like to collaborate, 
            feel free to reach out. I'll get back to you as soon as I can.
            </p>
            <form action="https://getform.io/f/34e9ede6-3748-4b34-92f2-2bc5b6917711" method="POST" className="space-y-8">
                <div>
                <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                    Your email
                </label>
                <input type="hidden" name="_gotcha" className='none'></input>
                <input
                    type="email"
                    name="email"
                    className="drop-shadow-md bg-gray-50 border border-gray-300 outline-indigo-500 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-black dark:border-darkBlack dark:placeholder-gray-200 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                    placeholder="name@domain.com"
                    required
                />
                </div>
                <div>
                <label htmlFor="subject" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300 ">
                    Subject
                </label>
                <input
                    type="text"
                    name="subject"
                    className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 outline-pink-500 drop-shadow-md focus:ring-pink-500 focus:border-primary-500 dark:bg-black dark:border-darkBlack dark:placeholder-gray-200 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                    placeholder="How can I help you?"
                    required
                />
                </div>
            <div className="sm:col-span-2">
                <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                    Your message
                </label>
                <textarea
                    name="message"
                    rows="6"
                    className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg drop-shadow-md border border-gray-300 outline-pink-500 focus:ring-primary-500 focus:border-none dark:bg-black dark:border-darkBlack dark:placeholder-gray-200 dark:text-white dark:focus:ring-primary-500 dark:focus:border-none"
                    placeholder="Share your thoughts, ideas, or questions..."
                ></textarea>
            </div>
            <button
                type="submit"
                className="py-2.5 px-4 my-4 text-zinc-700 bg-indigo-100 font-light text-sm rounded hover:scale-105 ease-in-out duration-300"
                // className="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-primary-700 sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
            >
                Send message
                </button>
            </form>
            </div>
        </div>
    )
}

export default Contact;
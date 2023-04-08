import React from "react";

const Contact = () => {

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission
      };

    return (
        <div className="bg-white dark:bg-blacker transform -skew-y-6">
            <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md transform skew-y-6">
            <h2 className="mb-4 text-4xl tracking-tight font-extrabold left text-black dark:text-white uppercase" id="contact">
                Get in touch
            </h2>
            <p className="mb-8 lg:mb-16 font-light text-left text-gray-500 dark:text-gray-400 sm:text-md">
            I'd love to hear from you! If you have any questions, project inquiries, or would like to collaborate, 
            feel free to reach out. I'll get back to you as soon as I can.
            </p>
            <form onSubmit={handleSubmit} className="space-y-8">
                <div>
                <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                    Your email
                </label>
                <input
                    type="email"
                    id="email"
                    className="drop-shadow-md bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
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
                    id="subject"
                    className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 drop-shadow-md focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                    placeholder="How can I help you?"
                    required
                />
                </div>
            <div className="sm:col-span-2">
                <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">
                    Your message
                </label>
                <textarea
                    id="message"
                    rows="6"
                    className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg drop-shadow-md border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                    placeholder="Share your thoughts, ideas, or questions..."
                ></textarea>
            </div>
            <button
                type="submit"
                className="py-2.5 px-4 my-4 text-neutral-50 bg-gradient-to-r from-pink-500 via-pink-500 to-pink-600 font-montserrat text-xs rounded hover:scale-105 ease-in-out duration-300"
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
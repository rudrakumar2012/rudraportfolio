import React from "react";

const Contact = () => {
  return (
    <div id="contact" className="max-w-[1040px] m-auto md:pl-20 p-4 py-16">
      <h1 className="py-4 text-4xl font-bold text-center text-[#001b5e]">
        Contact
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2">
        {/* Left side with text */}
        <div className="flex flex-col justify-center">
          <h2 className="text-2xl font-bold text-[#001b5e]">Get in Touch</h2>
          <p className="text-lg text-gray-700">
            Lets Work Together. Feel free to reach out to me for any project or
            collaboration.
          </p>
        </div>
        {/* Right side with form */}
        <div className="flex flex-col">
          <form
            action="https://getform.io/f/lejx2Bbj"
            method="POST"
            encType="multipart/form-data"
          >
            <div className="grid md:grid-cols-2 gap-4 w-full py-2">
              <div className="flex flex-col">
                <label className="uppercase text-sm py-2">Name</label>
                <input
                  className="border-2 rounded-lg p-3 flex border-gray-300"
                  type="text"
                  name="name"
                />
              </div>
              <div className="flex flex-col">
                <label className="uppercase text-sm py-2">Phone</label>
                <input
                  className="border-2 rounded-lg p-3 flex border-gray-300"
                  type="text"
                  name="phone"
                />
              </div>
            </div>
            <div className="flex flex-col py-2">
              <label className="uppercase text-sm py-2">Email</label>
              <input
                className="border-2 rounded-lg p-3 flex border-gray-300"
                type="email"
                name="email"
              />
            </div>
            <div className="flex flex-col py-2">
              <label className="uppercase text-sm py-2">Subject</label>
              <input
                className="border-2 rounded-lg p-3 flex border-gray-300"
                type="text"
                name="subject"
              />
            </div>
            <div className="flex flex-col py-2">
              <label className="uppercase text-sm py-2">Message</label>
              <textarea
                className="border-2 rounded-lg p-3 border-gray-300"
                name="message"
                rows="10"
              ></textarea>
            </div>
            <button className="bg-[#001b5e] text-gray-100 mt-4 w-full p-4 rounded-lg">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;

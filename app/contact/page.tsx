import React from "react";

const page = () => {
  return (
    <div className="min-h-dvh w-screen">
      <div className="h-full container mx-auto">
        <h1 className="text-s text-black/50 mt-12">
          Home <span>/</span>{" "}
          <span className="text-black font-semibold">Contact</span>{" "}
        </h1>

        <div className="mt-24 w-full h-fit flex flex-col lg:flex-row gap-2">
          <div className="w-full lg:w-1/4  h-fit flex flex-col items-center shadow-lg px-8 pt-8">
            <div className="h-fit pb-12 border-b border-black/30 w-full space-y-6">
              <div className="flex items-center gap-4">
                <h1 className="text-2xl font-semibold">Call To Us</h1>
              </div>
              <p>We are available 24/7</p>
              <p>Phone: +880 1234 5678</p>
            </div>
            <div className="h-fit  w-full py-12 space-y-6">
              <div className="flex items-center gap-4">
                <h1 className="text-2xl font-semibold">Write To Us</h1>
              </div>
              <p>Fill out our form and we will contact you within 24 hours.</p>
              <p>Emails: exclusive@gmail.com</p>
              <p>Emails: exclusive@gmail.com</p>
            </div>
          </div>
          <div className="w-full lg:w-3/4 min-h-[500px] shadow-lg py-8 px-8 overflow-hidden">
            <div className="h-full container mx-auto">
              <div className="w-full flex flex-col lg:flex-row gap-2 justify-between">
                <input
                  type=""
                  className="p-3 bg-[#f5f5f5]"
                  placeholder="Your Name"
                />
                <input
                  type=""
                  className="p-3 bg-[#f5f5f5]"
                  placeholder="Your Email"
                />
                <input
                  type=""
                  className="p-3 bg-[#f5f5f5]"
                  placeholder="Your Phone"
                />
              </div>
              <textarea
                name=""
                id=""
                className="w-full h-3/4 mt-5 p-1 bg-[#f5f5f5] border-none outline-none"
                placeholder="Your Message"
              ></textarea>
              <div className="flex justify-end mt-6">
                <button className="w-fit bg-red-500 py-2 px-12 rounded-lg text-white">
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;

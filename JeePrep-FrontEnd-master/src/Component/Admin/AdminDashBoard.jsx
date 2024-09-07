import React, { useState } from "react";

const AdminDashBoard = () => {
  const [file, setfile] = useState();
  const [filename, setfilename] = useState();
  const [filechoose, setfilechoosed] = useState(false);
  function handlefile(event) {
    event.preventDefault();
    setfile(event.target.files[0]);
    // if(file) alert("Plese select file")
    setfilename(event.target.files[0].name);
    setfilechoosed(true);
    console.log(event.target.files[0]);
  }
  function handlesubmifile() {}
  return (
    <div>
      <div className="flex items-center justify-center">
        <div className="mx-auto w-full max-w-[550px] bg-white">
          <form className="py-4 px-9">
            <div className="mb-5">
              <label
                htmlFor="subject"
                className="mb-3 block text-base font-medium text-[#07074D] mt-3"
              >
                Enter the subject Name:
              </label>
              <input
                type="text"
                name="subject"
                id="subject"
                required="true"
                placeholder="Enter the subject name"
                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
              />
              <label
                htmlFor="chapter-name"
                className="mb-3 block text-base font-medium text-[#07074D] mt-3"
              >
                Enter the Chapter Name:
              </label>
              <input
                type="text"
                required="true"
                name="chapter-name"
                id="chapter-name"
                placeholder="Enter the chapter name"
                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
              />
            </div>

            <div className="mb-6 pt-4">
              <label className="mb-5 block text-xl font-semibold text-[#07074D]">
                Upload Question File
              </label>

              <div className="mb-8">
                <input
                  type="file"
                  name="file"
                  id="file"
                  className="sr-only"
                  onChange={handlefile}
                  required="true"
                />
                <label
                  htmlFor="file"
                  className="relative flex min-h-[200px] items-center justify-center rounded-md border border-dashed border-[#e0e0e0] p-12 text-center"
                >
                  <div>
                    <span className="mb-2 block text-xl font-semibold text-[#07074D]">
                      Drop files here
                    </span>
                    <span className="mb-2 block text-base font-medium text-[#6B7280]">
                      Or
                    </span>
                    <span className="inline-flex rounded border border-[#e0e0e0] py-2 px-7 text-base font-medium text-[#07074D]">
                      Browse
                    </span>
                  </div>
                </label>
              </div>

              {filechoose && (
                <p className="bg-purple-300 px-2 py-2  rounded-md">
                  {filename}
                </p>
              )}
            </div>

            <div>
              <button
                className="hover:shadow-form w-full rounded-md bg-[#6A64F1] py-3 px-8 text-center text-base font-semibold text-white outline-none "
                onClick={handlesubmifile}
              >
                Send File
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AdminDashBoard;

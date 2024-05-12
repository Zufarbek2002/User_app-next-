"use client";
import React, { useState } from "react";
import { DataType, ModalType } from "@/types/modal.type";
import axios from "axios";

const AddModalComp = ({ open, setOpen, fetchData }: any) => {
  const [user, setUser] = useState({
    fName: "",
    lName: "",
    country: "Uzbekistan",
    birthday: "",
    position: "Junior",
    job: "UX/UI Designer",
    salary: "",
    isMarried: false,
  });
  const fetchAddUser = async (user: DataType) => {
    try {
      await axios.post("http://localhost:3000/api", user);
      fetchData();
    } catch (error) {
      console.log((error as Error).message);
    }
  };
  const handleClose = () => {
    setOpen(false);
  };
  const handleSubmit = (e: any) => {
    if (e.target.id !== "isMarried") {
      setUser({ ...user, [e.target.id]: e.target.value });
    } else {
      setUser({ ...user, isMarried: e.target.checked });
    }
  };
  const handleAdd = () => {
    fetchAddUser(user);
    setUser({
      fName: "",
      lName: "",
      country: "Uzbekistan",
      birthday: "",
      position: "Junior",
      job: "UX/UI Designer",
      salary: "",
      isMarried: false,
    });
    setOpen(false);
  };
  return (
    <div
      onClick={handleClose}
      className={`bg-black/40 overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 max-h-full ${
        open ? "" : "hidden"
      }`}
    >
      <div className="relative top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-md max-h-full">
        <div
          onClick={(e) => {
            e.stopPropagation();
          }}
          className="relative bg-white rounded-lg shadow"
        >
          <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t">
            <h3 className="text-lg font-semibold text-gray-900">Add User</h3>
            <button
              type="button"
              className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
              onClick={handleClose}
            >
              <svg
                className="w-3 h-3"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 14"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                />
              </svg>
              <span className="sr-only">Close modal</span>
            </button>
          </div>

          <form className="p-4 md:p-5" onChange={handleSubmit}>
            <div className="grid gap-4 mb-5 grid-cols-2">
              <div className="col-span-2">
                <label className="">
                  <span className="text-sm font-medium text-gray-900">
                    Firstname
                  </span>
                  <input
                    type="text"
                    name="fName"
                    id="fName"
                    className="mt-2 outline-none focus:ring-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
                    placeholder="Firstname"
                    required
                    value={user.fName}
                  />
                </label>
              </div>
              <div className="col-span-2">
                <label className="">
                  <span className="text-sm font-medium text-gray-900">
                    Lastname
                  </span>
                  <input
                    type="text"
                    name="lName"
                    id="lName"
                    className="mt-2 outline-none focus:ring-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
                    placeholder="Lastname"
                    required
                    value={user.lName}
                  />
                </label>
              </div>
              <div className="col-span-2">
                <label className="">
                  <span className="text-sm font-medium text-gray-900">
                    Select your country
                  </span>
                  <select
                    value={user.country}
                    id="country"
                    className="mt-2  outline-none focus:ring-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5"
                  >
                    <option value="Uzbekistan">Uzbekistan</option>
                    <option value="Germany">Germany</option>
                    <option value="USA">USA</option>
                    <option value="Malaysia">Malaysia</option>
                    <option value="Canada">Canada</option>
                  </select>
                </label>
              </div>
              <div className="col-span-2 sm:col-span-1">
                <label
                  htmlFor="salary"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Salary($)
                </label>
                <input
                  value={user.salary}
                  type="number"
                  name="salary"
                  id="salary"
                  className=" outline-none focus:ring-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                />
              </div>
              <div className="col-span-2 sm:col-span-1">
                <label
                  htmlFor="position"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Level
                </label>
                <select
                  value={user.position}
                  id="position"
                  className=" outline-none focus:ring-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5"
                >
                  <option value="Junior">Junior</option>
                  <option value="Middle">Middle</option>
                  <option value="Senior">Senior</option>
                </select>
              </div>
              <div className="col-span-2 sm:col-span-1">
                <label
                  htmlFor="birthday"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Birthday
                </label>
                <input
                  value={user.birthday}
                  type="date"
                  name="birthday"
                  id="birthday"
                  className=" outline-none focus:ring-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                />
              </div>
              <div className="col-span-2 sm:col-span-1">
                <label
                  htmlFor="job"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Jobs
                </label>
                <select
                  value={user.job}
                  id="job"
                  className="outline-none focus:ring-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5"
                >
                  <option value="ui">UX/UI Designer</option>
                  <option value="Frontend">Frontend</option>
                  <option value="Backend">Backend</option>
                  <option value="Fullstack">Fullstack</option>
                </select>
              </div>
              <div className="col-span-2 flex items-center gap-2">
                <input
                  checked={user.isMarried}
                  type="checkbox"
                  name="isMarried"
                  id="isMarried"
                />
                <label htmlFor="isMarried">isMarried</label>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <button
                type="submit"
                className="text-white inline-flex items-center bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                onClick={handleAdd}
              >
                <svg
                  className="me-1 -ms-1 w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
                Add new User
              </button>
              <button
                className="text-white inline-flex items-center bg-gray-700 hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                onClick={(e) => {
                  handleClose();
                  e.preventDefault();
                }}
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddModalComp;

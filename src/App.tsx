import React, { useState, useEffect } from 'react';
import axios from "axios"

function App() {
  const [data, setData] = useState<any>('');
  const [count, setCount] = useState<number>(0);
  const [orderName, setOrderName] = useState<any>("ASC");
  const [orderUserName, setOrderUserName] = useState<any>("ASC");
  const [orderPhone, setOrderPhone] = useState<any>("ASC");
  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/users")
      .then(res => {
        setData(res?.data)
      })
  }, [count])

  // Data Filter Name Username Phone Website
  const requestSearch = (searchVal: any) => {
    if (searchVal) {
      const filteredRows = data.filter((row: any) => {
        return row.name.toLowerCase().includes(searchVal.toLowerCase()) ||
          row.username.toLowerCase().includes(searchVal?.toLowerCase()) ||
          row.phone.toLowerCase().includes(searchVal?.toLowerCase()) ||
          row.website.toLowerCase().includes(searchVal?.toLowerCase())
      })
      setData(filteredRows)
    } else {
      setCount(count + 1)
    }
  }
  // Data Soring By Name Username Phone
  const sorting = (col: any) => {
    // NAME
    if (col === "name") {
      if (orderName === "ASC") {
        const sorted = [...data].sort((a: any, b: any) =>
          a[col].toLowerCase() > b[col].toLowerCase() ? 1 : -1
        )
        setData(sorted)
        setOrderName("DSC")
      }
      if (orderName === "DSC") {
        const sorted = [...data].sort((a: any, b: any) =>
          a[col].toLowerCase() < b[col].toLowerCase() ? 1 : -1
        )
        setData(sorted)
        setOrderName("ASC")
      }
    }
    // USER NAME
    if (col === "username") {
      if (orderUserName === "ASC") {
        const sorted = [...data].sort((a: any, b: any) =>
          a[col].toLowerCase() > b[col].toLowerCase() ? 1 : -1
        )
        setData(sorted)
        setOrderUserName("DSC")
      }
      if (orderUserName === "DSC") {
        const sorted = [...data].sort((a: any, b: any) =>
          a[col].toLowerCase() < b[col].toLowerCase() ? 1 : -1
        )
        setData(sorted)
        setOrderUserName("ASC")
      }
    }
    // PHONE
    if (col === "phone") {
      if (orderPhone === "ASC") {
        const sorted = [...data].sort((a: any, b: any) =>
          a[col].toLowerCase() > b[col].toLowerCase() ? 1 : -1
        )
        setData(sorted)
        setOrderPhone("DSC")
      }
      if (orderPhone === "DSC") {
        const sorted = [...data].sort((a: any, b: any) =>
          a[col].toLowerCase() < b[col].toLowerCase() ? 1 : -1
        )
        setData(sorted)
        setOrderPhone("ASC")
      }
    }
  }
  console.log(data)
  return (
    <div className="App">
      <div className="flex flex-col">
        <div className="overflow-x-auto">
          <div className="py-3 pl-2">
            <div className="relative max-w-xs ">
              <label htmlFor="hs-table-search" className="sr-only">
                Search
              </label>
              <input
                type="text"
                name="hs-table-search"
                onChange={(searchVal) => requestSearch(searchVal.target.value)}
                id="hs-table-search"
                className="block w-full p-3 pl-10 text-sm border-gray-200 rounded-md focus:border-blue-500 focus:ring-blue-500 bg-[#1f2937] dark:border-gray-700 dark:text-gray-400"
                placeholder="Search..."
              />
              <div className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none">
                <svg
                  className="h-3.5 w-3.5 text-gray-400"
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                </svg>
              </div>
            </div>
          </div>

          <div className="p-1.5 w-full inline-block align-middle">
            <div className="relative overflow-scroll m-auto bg-white rounded-lg shadow overflow-y-auto relative w-full">
              <table className="border-collapse table-auto w-full whitespace-no-wrap bg-white table-striped relative">
                <thead className="dark:bg-gray-900 bg-[#1f2937]">
                  <tr>
                    <th
                      scope="col"
                      className="px-6 py-3 text-xs  font-bold text-left text-white uppercase "
                    // className="py-2 px-1 sticky top-0 left-0 border-b border-gray-200 bg-gray-100 w-16 text-center z-10"
                    >
                      ID
                    </th>
                    <th
                      scope="col"
                      onClick={() => sorting("name")}
                      className=" px-6 py-3 sticky bg-[#1f2937] top-0 left-0 dark:bg-gray-900 z-10 text-xs font-bold text-left text-white uppercase bg-gray-50 "
                    >
                      <span className="inline-flex items-center">
                        Name
                        <span>
                          {orderName === "ASC" ? <>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="w-4 h-4"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                              strokeWidth={2}
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M7 11l5-5m0 0l5 5m-5-5v12"
                              />
                            </svg>
                          </> : <>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="w-4 h-4"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                              strokeWidth={2}
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M17 13l-5 5m0 0l-5-5m5 5V6"
                              />
                            </svg>
                          </>}
                        </span>
                      </span>
                    </th>
                    <th
                      scope="col"
                      onClick={() => sorting("username")}
                      className="px-6 py-3 text-xs font-bold text-left text-white uppercase "
                    >
                      <span className="inline-flex items-center">
                        User Name
                        <span>
                          {orderUserName === "ASC" ? <>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="w-4 h-4"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                              strokeWidth={2}
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M7 11l5-5m0 0l5 5m-5-5v12"
                              />
                            </svg>
                          </> : <>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="w-4 h-4"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                              strokeWidth={2}
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M17 13l-5 5m0 0l-5-5m5 5V6"
                              />
                            </svg>
                          </>}
                        </span>
                      </span>
                    </th>
                    <th
                      scope="col"
                      className="flex items-center px-6 py-3 text-xs font-bold text-left text-white uppercase "
                      onClick={() => sorting("phone")}
                    >
                      Phone
                      <span>
                        {orderPhone === "ASC" ? <>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-4 h-4"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={2}
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M7 11l5-5m0 0l5 5m-5-5v12"
                            />
                          </svg>
                        </> : <>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-4 h-4"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={2}
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M17 13l-5 5m0 0l-5-5m5 5V6"
                            />
                          </svg>
                        </>}
                      </span>
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-xs font-bold text-left text-white uppercase "
                    >
                      Website
                    </th>
                  </tr>
                </thead>
                {data.length > 0 ? <>
                  <tbody className="divide-y divide-gray-200">
                    {data?.map((person: any) => (
                      <tr key={person?.id}>
                        <td className="px-4 py-2 text-sm font-medium text-gray-800 whitespace-nowrap">
                        <div className="flex items-center">
                            <div className="h-2.5 w-2.5 rounded-full bg-red-400 mr-2"></div>
                            {person?.id}
                          </div>
                        </td>
                        <td className="max-[600px]:bg-white px-6 py-4 text-sm font-medium border-gray-200  sticky left-0 z-1 text-gray-800 whitespace-nowrap">
                          {person?.name}
                        </td>
                        <td className="px-4 py-2 text-sm text-gray-800 whitespace-nowrap">
                          {person?.username}
                        </td>
                        <td className="px-4 py-2 text-sm text-gray-800 whitespace-nowrap">
                          {person?.phone}
                        </td>
                        <td className="px-4 py-2 text-sm text-gray-800 whitespace-nowrap">
                          <div className="flex items-center">
                            <div className="h-2.5 w-2.5 rounded-full bg-green-400 mr-2"></div>
                            {person?.website}
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </> : <></>}
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

import { Select, Option, Input, Button } from "@material-tailwind/react";



const App = () => {

  const handler = (e) => {
    console.log(e.target.value);

  }

  return (
    <div className=" p-3 ">

      {/* Hero */}
      <section >
        <div className="filters flex gap-5 justify-around items-center">
          <Input type="Date" label="Date" />
          <Select size="md" label="Branch" onChange={(e) => handler(e.target.value)} >
            <Option value="A">0002</Option>
            <Option >5542</Option>
          </Select>
          <Select size="md" label="District">
            <Option> South </Option>
            <Option> East </Option>
          </Select>
          <Select size="md" label="Cluster">
            <Option>South</Option>
            <Option>East</Option>
          </Select>
          <div className="btn">
            <Button>Apply</Button>
          </div>
        </div>
        <br />
        <div className="flex gap-2 justify-start">
          <div className="main rounded-lg bg-blue-50 w-3/6 shadow-sm">
            <div className="branchDate py-3 px-5">
              <p ><span className="font-semibold">Date:</span> 02 May, 2023</p>
              <p ><span className="font-semibold">Branch:</span> Gulshan-e-Iqbal , Block 2, Karachi</p>

            </div>
          </div>

          <div className="main rounded-lg bg-blue-50 w-3/6 shadow-sm">
            <div className="branchDate py-3 px-5">
              <p className="mt-1"><span className="font-semibold">District:</span> Karachi East District</p>
              <p className="mt-1"><span className="font-semibold">Cluster:</span> 0024</p>
            </div>
          </div>
        </div>
      </section>
      <br />

      <section>
        <table className="w-full text-left text-gray-500">
          <thead className="text-xs text-gray-700 uppercase bg-blue-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-2 py-3 bg-blue-500 text-white">
                Branch Head Count (U-Connect)
              </th>
              <th scope="col" className="px-6 py-3">
                OPS Officer
              </th>
              <th scope="col" className="px-2 py-3">
                BSO
              </th>
              <th scope="col" className="px-2 py-3">
                BSS
              </th>
              <th scope="col" className="px-2 py-3">
                BOM
              </th>
              <th scope="col" className="px-2 py-3">
                Total
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-white border-b">
              <th scope="row" className="px-2 py-4 font-medium text-green-500  ">

              </th>
              <td className="px-6 py-4">
                1
              </td>
              <td className="px-6 py-4">
                3
              </td>
              <td className="px-6 py-4">
                1
              </td>
              <td className="px-6 py-4">
                0
              </td>
              <td className="px-6 py-4">
                5
              </td>
            </tr>

          </tbody>
        </table>
      </section>

      <br />
      {/* Section Table */}
      <section >
        <div className="grid grid-cols-2 gap-2 rounded">
          <div className="relative overflow-x-auto">
            <table className="w-full text-left text-gray-500">
              <thead className="text-xs text-gray-700 uppercase bg-blue-50 ">
                <tr>
                  <th scope="col" className="px-2 py-3 bg-green-500 text-white">
                    EQ Ticket Issued
                  </th>
                  <th scope="col" className="px-6 py-3">
                    ACCT_Nature
                  </th>
                  <th scope="col" className="px-2 py-3">
                    Transaction
                  </th>
                  <th scope="col" className="px-2 py-3">
                    Amount
                  </th>
                  <th scope="col" className="px-2 py-3">
                    Ticket Size
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                  <th scope="row" className="px-2 py-4 font-medium text-green-500  ">

                  </th>
                  <td className="px-6 py-4">
                    Cash Deposit Customer
                  </td>
                  <td className="px-6 py-4">
                    28
                  </td>
                  <td className="px-6 py-4">
                    625,900
                  </td>
                  <td className="px-6 py-4">
                    223,559
                  </td>
                </tr>
                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                  <th scope="row" className="px-2 py-4 font-medium text-green-500  ">

                  </th>
                  <td className="px-6 py-4">
                    Cash WithDrawal Customer
                  </td>
                  <td className="px-6 py-4">
                    28
                  </td>
                  <td className="px-6 py-4">
                    625,900
                  </td>
                  <td className="px-6 py-4">
                    223,559
                  </td>
                </tr>
                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                  <th scope="row" className="px-2 py-4 font-medium text-green-500  ">

                  </th>
                  <td className="px-6 py-4">
                    Transfer Others
                  </td>
                  <td className="px-6 py-4">
                    28
                  </td>
                  <td className="px-6 py-4">
                    625,900
                  </td>
                  <td className="px-6 py-4">
                    223,559
                  </td>
                </tr>
                <tr className="bg-green-500 text-white">
                  <td className="px-6 py-4 text-center" colSpan={2}>
                    Total - EQ Ticket Issued
                  </td>
                  <td className="px-6 py-4">
                    177
                  </td>
                  <td className="px-6 py-4">
                    439,997
                  </td>
                  <td className="px-6 py-4">
                    248,559
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="relative overflow-x-auto">
            <table className="w-full  text-left text-gray-500">
              <thead className="text-xs text-gray-700 uppercase bg-blue-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                  <th scope="col" className="px-2 py-3 bg-red-500 text-white">
                    EQ Ticket Not Issued
                  </th>
                  <th scope="col" className="px-6 py-3">
                    ACCT_Nature
                  </th>
                  <th scope="col" className="px-2 py-3">
                    Transaction
                  </th>
                  <th scope="col" className="px-2 py-3">
                    Amount
                  </th>
                  <th scope="col" className="px-2 py-3">
                    Ticket Size
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                  <th scope="row" className="px-2 py-4 font-medium text-green-500  ">

                  </th>
                  <td className="px-6 py-4">
                    Cash Deposit Customer
                  </td>
                  <td className="px-6 py-4">
                    28
                  </td>
                  <td className="px-6 py-4">
                    625,900
                  </td>
                  <td className="px-6 py-4">
                    223,559
                  </td>
                </tr>
                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                  <th scope="row" className="px-2 py-4 font-medium text-green-500  ">

                  </th>
                  <td className="px-6 py-4">
                    Cash WithDrawal Customer
                  </td>
                  <td className="px-6 py-4">
                    28
                  </td>
                  <td className="px-6 py-4">
                    625,900
                  </td>
                  <td className="px-6 py-4">
                    223,559
                  </td>
                </tr>
                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                  <th scope="row" className="px-2 py-4 font-medium text-green-500  ">

                  </th>
                  <td className="px-6 py-4">
                    Transfer Others
                  </td>
                  <td className="px-6 py-4">
                    28
                  </td>
                  <td className="px-6 py-4">
                    625,900
                  </td>
                  <td className="px-6 py-4">
                    223,559
                  </td>
                </tr>
                <tr className="bg-red-500 text-white">
                  <td className="px-6 py-4 text-center" colSpan={2}>
                    Total - EQ Ticket Not Issued
                  </td>
                  <td className="px-6 py-4">
                    177
                  </td>
                  <td className="px-6 py-4">
                    439,997
                  </td>
                  <td className="px-6 py-4">
                    248,559
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <br />
        <div className="total flex gap-20 justify-center items-center">
          <h1 className="text-xl">Total Transaction: <span className="text-green-500 font-bold">177</span></h1>
          <p className="text-gray-700 text-2xl">|</p>
          <h1 className="text-xl">Total Transaction Amt: <span className="text-red-500 font-bold">89,162,998</span></h1>
        </div>
      </section>

      <br />
      <section>
        <div className="relative overflow-x-auto">
          <table className="w-full text-left text-gray-500">
            <thead className="text-xs text-gray-700 uppercase bg-blue-50 ">
              <tr>
                <th scope="col" className="px-6 py-3">
                  Counter
                </th>
                <th scope="col" className="px-2 py-3">
                  Transaction
                </th>
                <th scope="col" className="px-2 py-3">
                  Total Amount
                </th>
                <th scope="col" className="px-2 py-3">
                  Wait Time
                </th>
                <th scope="col" className="px-6 py-3">
                  Service Time
                </th>
                <th scope="col" className="px-2 py-3">
                  # of Tickets
                </th>
                <th scope="col" className="px-2 py-3">
                  Cash Deposit Customer
                </th>
                <th scope="col" className="px-2 py-3">
                  Cash Withdrawal
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-white border-b">
                <th scope="row" className="px-6 py-4 font-medium text-green-500  ">
                  1
                </th>
                <td className="px-2 py-4">
                  98
                </td>
                <td className="px-2 py-4">
                  28,582,791
                </td>
                <td className="px-2 py-4">
                  00:13:29
                </td>
                <td className="px-2 py-4">
                  00:01:30
                </td>
                <td className="px-2 py-4">
                  49
                </td>
                <td className="px-2 py-4">
                  423,245,22
                </td>
                <td className="px-2 py-4">
                  53,301,200
                </td>

              </tr>
              <tr className="bg-white border-b">
                <th scope="row" className="px-6 py-4 font-medium text-green-500  ">
                  1
                </th>
                <td className="px-2 py-4">
                  98
                </td>
                <td className="px-2 py-4">
                  28,582,791
                </td>
                <td className="px-2 py-4">
                  00:13:29
                </td>
                <td className="px-2 py-4">
                  00:01:30
                </td>
                <td className="px-2 py-4">
                  49
                </td>
                <td className="px-2 py-4">
                  423,245,22
                </td>
                <td className="px-2 py-4">
                  53,301,200
                </td>

              </tr>
              <tr className="bg-white border-b">
                <th scope="row" className="px-6 py-4 font-medium text-green-500  ">
                  1
                </th>
                <td className="px-2 py-4">
                  98
                </td>
                <td className="px-2 py-4">
                  28,582,791
                </td>
                <td className="px-2 py-4">
                  00:13:29
                </td>
                <td className="px-2 py-4">
                  00:01:30
                </td>
                <td className="px-2 py-4">
                  49
                </td>
                <td className="px-2 py-4">
                  423,245,22
                </td>
                <td className="px-2 py-4">
                  53,301,200
                </td>

              </tr>

              {/* No need to Map below Rows */}
              <tr className="bg-white border-b">
                <th scope="row" className="px-6 py-2 bg-green-500 text-white  ">
                  Counter Total
                </th>
                <td className="px-2 py-2  bg-green-500 text-white">
                  177
                </td>
                <td className="px-2 py-2 bg-green-500 text-white">
                  28,582,791
                </td>
              </tr>
              <tr className="bg-white border-b">
                <th scope="row" className="px-6 py-2 bg-red-500 text-white  ">
                  Non EQ
                </th>
                <td className="px-2 py-2  bg-red-500 text-white">
                  177
                </td>
                <td className="px-2 py-2 bg-red-500 text-white">
                  28,582,791
                </td>
              </tr>
              <tr className="bg-white border-b">
                <th scope="row" className="px-6 py-2 bg-blue-500 text-white  ">
                  Total
                </th>
                <td className="px-2 py-2  bg-blue-500 text-white">
                  275
                </td>
                <td className="px-2 py-2 bg-blue-500 text-white">
                  89,582,791
                </td>
              </tr>

            </tbody>
          </table>
        </div>
      </section>
      <br />
      <section>
        <div className="flex justify-center items-center gap-5">
          <div className="flex justify-center items-center flex-col gap-2 p-8 bg-blue-50 rounded font-semibold shadow-md">
            <p>Tickets Served</p>
            <p>113</p>
          </div>
          <div className="flex justify-center items-center flex-col gap-2 p-8 bg-blue-50 rounded font-semibold shadow-md">
            <p>Waste Tickets</p>
            <p>96</p>
          </div>
          <div className="flex justify-center items-center flex-col gap-2 p-8 bg-blue-50 rounded font-semibold shadow-md">
            <p>Issued Tickets</p>
            <p>209</p>
          </div>
        </div>
      </section>
      <br />
      <section>
        <div className="flex gap-5 justify-center">
          <div className="average rounded-t">
            <table className="w-full text-left">
              <thead className="text-xs uppercase bg-blue-500 text-white ">
                <tr>
                  <th className="text-center p-3 px-14 font-semibold" colSpan={2}>
                    Average-EQ
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-blue-100">
                  <th className="py-1 px-4">
                    Wait Time
                  </th>
                  <th className="py-1 px-4">
                    Service Time
                  </th>
                </tr>
                <tr className="bg-blue-50 text-center">
                  <td className="py-1 px-4 ">
                    00:15:18
                  </td>
                  <td className="py-1 px-4 ">
                    00:01:27
                  </td>
                </tr>

              </tbody>
            </table>
          </div>
          <div className="service-time">
            <table className="w-full text-left">
              <thead className="text-xs uppercase bg-blue-500 text-white ">
                <tr>
                  <th className="text-center p-3 px-14 font-semibold" colSpan={2}>
                    Service Time (Non-EQ)
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-blue-100">
                  <td className="py-1 px-4">
                    00:04:38
                  </td>
                  <td className="py-1 px-4">
                    *Standardized
                  </td>
                </tr>


              </tbody>
            </table>
          </div>
          <div className="service-time">
            <table className="w-full text-left">
              <thead className="text-xs uppercase bg-blue-500 text-white ">
                <tr>
                  <th className="text-center p-3 px-14 font-semibold" colSpan={2}>
                    Actual Service Time
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-blue-100">
                  <td className="py-1 px-4 text-center">
                    00:04:38
                  </td>

                </tr>


              </tbody>
            </table>
          </div>
          <div className="ticket-Percentage">
            <table className="w-full text-left">

              <tbody>
                <tr className="bg-blue-500 text-white">
                  <th className="py-2 px-4">
                    Ticket Issued
                  </th>
                  <th className="py-2 px-4">
                    Ticket Not Issued
                  </th>
                </tr>
                <tr className=" text-center">
                  <td className="py-1 px-4 bg-green-100">
                    64%
                  </td>
                  <td className="py-1 px-4 bg-red-100">
                    36%
                  </td>
                </tr>

              </tbody>
            </table>
          </div>
        </div>
      </section>
      <br />
      <section>
        <div className="heading flex justify-center items-center">
          {/* <h1 className="text-3xl font-semibold text-gray-600">Total Tickets Comparision</h1> */}
        </div>
        <br />
        <div className="grid grid-cols-2 gap-5">
          {/* <!-- Bar Chart --> */}
          <div className="p-5">

          </div>

        </div>
      </section>

    </div>
  )
}

export default App








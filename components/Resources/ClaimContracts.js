import React from "react";
import {  Collapse } from "antd";
import { claimInsuranceItems } from "@/data/faqs/claim-insurance";

const ClaimContracts = ({color}) => {

  let contacts = [
    {id:1,suppliers:"IA", contact:"1-877-700-7778"},
    {id:2,suppliers:"Empire Life", contact:"1 800 561-1268"},
    {id:3,suppliers:"UV assurance", contact:"1-800-567-0988"},
    {id:4,suppliers:"RBC", contact:"1-800-769-2523"},
    {id:5,suppliers:"BMO", contact:"1-855-587-8995"},
    {id:6,suppliers:"Desjardin", contact:"1 800 463-7843"},
    {id:7,suppliers:"Manulife", contact:"1 877 841-8822"},
    {id:8,suppliers:"Beneva", contact:"1 877 841-8822"},
    {id:9,suppliers:"Equitale", contact:"1.800.265.4556"},
    {id:10,suppliers:"Canada Protection Plan", contact:"1-800-828-1540"},
    {id:11,suppliers:"Forester", contact:"1 800 828 1540"},
    {id:12,suppliers:"Humania", contact:"1-877-987-3076"},
    {id:13,suppliers:"Sunlife", contact:"1-877-786-5433"},
    {id:14,suppliers:"Assumption", contact:"506-853-6040"},
    {id:15,suppliers:"Cumis", contact:"1-800-263-9120"},
    {id:16,suppliers:"IVARI", contact:"1-800-846-5970"},
    {id:17,suppliers:"Canada Life", contact:"1-888-252-1847"},
    {id:18,suppliers:"Specialty Life", contact:"1 888-721-1461"},
    {id:19,suppliers:"Scotia Insurance", contact:"1-800-387-9844"},
    {id:20,suppliers:"Wawanesa Life", contact:"1-844929-2637"},
  ]
  return (
    <>
      <div
        id="critical-insurance"
        className="p-4"
        style={{ minHeight: "100vh", background: `${color}` }}
      >
        <h1 className="text-white font-bold text-2xl">
          Claim Contracts
        </h1>

        <div>
        <div className="mt-8 flow-root">
          <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
              <table className="min-w-full divide-y divide-gray-300">
                <thead>
                  <tr>
                    <th scope="col" className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-white sm:pl-0">
                      Serial
                    </th>
                    <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-white">
                      Suppliers
                    </th>
                    <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-white">
                      Claim Contact
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {contacts.map((item) => (
                    <tr key={item.id}>
                      <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-white sm:pl-0">
                        {item.id}
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-white">{item.suppliers}</td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-white">{item.contact}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
    </div>

      </div>
    </>
  );
};

export default ClaimContracts;

import React, { useState } from "react";
import { Radio } from "antd";
import { PencilIcon } from "@heroicons/react/24/outline";
import { Select } from "antd";

const Sidebar = () => {
  const [preMedical, setPreMedical] = useState("No");

  const handleChange = (e) => {
    console.log(e);
  };
  return (
    <>
      <div className="col-span-2 ">

        <div className="bg-[#f6f8fd] p-3">
          <div className="border border-gray-300 rounded-md p-5 text-sm text-gray-600 ">
            <div className="flex items-center gap-3">
              <p className="text-center">
                Super Visa Insurance for{" "}
                <span className="font-semibold text-gray-600">
                  Single Person
                </span>{" "}
                (age <span className="font-semibold text-gray-600">60 yrs</span>
                ) for{" "}
                <span className="font-semibold text-gray-600">365 days</span>,
                excluding coverage for pre-existing medical conditions
              </p>
              <button className="p-3 rounded-full hover:border">
                <PencilIcon width={20} />
              </button>
            </div>

            <div className="mt-5 pb-5">
              <div className="mb-6">
                <label className="text-sm font-semibold">
                  Would you like to cover pre-existing medical conditions?
                </label>
              </div>

              <Radio.Group
                onChange={(e) => setPreMedical(e.target.value)}
                value={preMedical}
              >
                <Radio value={"No"}>No</Radio>
                <Radio value={"Yes"}>Yes</Radio>
              </Radio.Group>
            </div>
          </div>

          <div className="space-y-5 pb-5">
            <div>
              <div>
                <label htmlFor={"deductible"}>Deductible</label>
              </div>
              <Select
                size="large"
                style={{ width: "100%" }}
                name={"deductible"}
                id={"deductible"}
                defaultValue={0}
                onChange={handleChange}
                options={[
                  { value: 0, label: "0" },
                  { value: 100, label: "100" },
                  { value: 250, label: "250" },
                  { value: 500, label: "500" },
                  { value: 1000, label: "1000" },
                  { value: 2500, label: "2500" },
                  { value: 5000, label: "5000" },
                  { value: 10000, label: "10000" },
                ]}
              />
            </div>
            <div>
              <div>
                <label htmlFor={"coverage"}>Coverage</label>
              </div>
              <Select
                size="large"
                style={{ width: "100%" }}
                name={"coverage"}
                id={"coverage"}
                defaultValue={"100000"}
                onChange={handleChange}
                options={[
                  { value: "100000", label: "100,000" },
                  { value: "150000", label: "150,000" },
                  { value: "200000", label: "200,000" },
                  { value: "300000", label: "300,000" },
                  { value: "500000", label: "500,000" },
                  { value: "1000000", label: "1,000,000" },
                ]}
              />
            </div>
          </div>
        </div>

      </div>
    </>
  );
};

export default Sidebar;

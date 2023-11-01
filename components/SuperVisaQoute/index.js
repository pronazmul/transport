import React, { useState } from "react";
import { Formik } from "formik";
import { Radio } from "antd";
import dayjs from "dayjs";
import DateOfBirth from "./DateOfBirth";
import Coverage from "./Coverage";
import { MinusIcon, PlusIcon } from "@heroicons/react/24/outline";
import StartEndDay from "./StartEndDay";

import axios from "axios";
import { baseURL } from "@/utils/helper";
import { toast } from "react-toastify";
import PlanCard from "./PlanCard";
import Sidebar from "./Sidebar";

const dateFormat = "DD/MM/YYYY";

const SuperVisaQoute = () => {
  const [allCoverage, setAllCoverage] = useState(false);
  const [perApplicant, setPerApplicant] = useState(false);
  const [qoutes, setQoutes] = useState([]);
  const [loading, setLoading] = useState(false);

  const getQoute = async (values) => {
    setLoading(true);
    let url = "";
    if (values.type === "SINGLE") {
      url = `/single?age=${values.age1}&coverage=${values.coverage1}&preExistingMedicalConditions=${values.preExistingMedicalConditions1}`;
    }

    if (values.type === "DOUBLE") {
      url = `/couple?age1=${values.age1}&age2=${values.age2}&coverage1=${values.coverage1}&coverage2=${values.coverage2}&preExistingMedicalConditions1=${values.preExistingMedicalConditions}&preExistingMedicalConditions2=${values.preExistingMedicalConditions1}`;
    }

    console.log({ url });
    const res = await axios.get(`${baseURL}/qoutes/superVisa${url}`);
    if (res.status === 200) {
      toast.success("Qoute founded.");
      setQoutes(res.data);
      setLoading(false);
    } else {
      toast.error("Something error");
    }
    setLoading(false);
  };

  return qoutes?.length > 0 ? (
    <div className="container mx-auto">
      <div className="grid grid-cols-5 gap-5">
        <Sidebar />
        <div className="col-span-3">
          {qoutes.map((qoute) => (
            <PlanCard key={qoute._id} qoute={qoute} />
          ))}
        </div>
      </div>
    </div>
  ) : (
    <div className="mx-auto max-w-xl">
      <p className="text-sm mb-3">
        Get Supervisa Insurance quotes. Enter details and click the Get Quote
        button.
      </p>
      <Formik
        initialValues={{
          dob1: "",
          age1: 40,
          start_date1: dayjs(new Date()).format(dateFormat),
          start_date2: dayjs(new Date()).format(dateFormat),
          end_date1: dayjs(new Date())
            .add(1, "year")
            .add(-1, "days")
            .format(dateFormat),
          end_date2: dayjs(new Date())
            .add(1, "year")
            .add(-1, "days")
            .format(dateFormat),
          days1: 365,
          days2: 365,
          coverage1: "100000",
          coverage2: "100000",
          preExistingMedicalConditions: "No",
          preExistingMedicalConditions1: "No",

          type: "SINGLE",
          dob2: "",
          age2: 40,
        }}
        onSubmit={(values, actions) => {
          console.log(values);
          getQoute(values);
        }}
      >
        {({ handleSubmit, values, setFieldValue }) => (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <div className="py-2">
                <label>What type of policy do you want?</label>
              </div>
              <Radio.Group
                onChange={(e) => setFieldValue("type", e.target.value)}
                value={values.type}
              >
                <Radio value={"SINGLE"}>Single Coverage</Radio>
                <Radio value={"DOUBLE"}>Double Coverage</Radio>
              </Radio.Group>
            </div>

            <DateOfBirth
              value={values.dob1}
              ageName={"age1"}
              name="dob2"
              setFieldValue={setFieldValue}
              ageValue={values.age1}
            />

            {values.type === "DOUBLE" && (
              <DateOfBirth
                value={values.dob2}
                ageName={"age2"}
                name="dob2"
                setFieldValue={setFieldValue}
                ageValue={values.age2}
              />
            )}
            <StartEndDay
              start_date={"start_date1"}
              start_value={values.start_date1}
              end_date={"end_date1"}
              end_value={values.end_date1}
              daysName="days1"
              daysValue={values.days1}
              setFieldValue={setFieldValue}
            />
            {perApplicant && (
              <StartEndDay
                start_date={"start_date2"}
                start_value={values.start_date2}
                end_date={"end_date2"}
                end_value={values.end_date2}
                daysName="days2"
                daysValue={values.days2}
                setFieldValue={setFieldValue}
              />
            )}

            {values.type === "DOUBLE" && (
              <p
                className="text-sm flex items-center gap-1 cursor-pointer"
                onClick={() => setPerApplicant(!perApplicant)}
              >
                <span className="border rounded-full">
                  {!perApplicant ? (
                    <PlusIcon width={18} />
                  ) : (
                    <MinusIcon width={18} />
                  )}
                </span>
                <span className="uderline">
                  Enter different dates per applicant
                </span>
              </p>
            )}

            <Coverage
              name={"coverage1"}
              value={values.coverage1}
              setFieldValue={setFieldValue}
            />
            {allCoverage && (
              <Coverage
                name={"coverage2"}
                value={values.coverage2}
                setFieldValue={setFieldValue}
              />
            )}
            {values.type === "DOUBLE" && (
              <p
                className="text-sm flex items-center gap-1 cursor-pointer"
                onClick={() => setAllCoverage(!allCoverage)}
              >
                <span className="border rounded-full">
                  {!allCoverage ? (
                    <PlusIcon width={18} />
                  ) : (
                    <MinusIcon width={18} />
                  )}
                </span>
                <span className="uderline">
                  Make coverage amount same for all applicants
                </span>
              </p>
            )}

            <div className="">
              <div className="mt-10">
                <label>
                  Would you like to cover pre-existing medical conditions?
                </label>
              </div>
              <Radio.Group
                onChange={(e) =>
                  setFieldValue("preExistingMedicalConditions", e.target.value)
                }
                value={values.preExistingMedicalConditions}
              >
                <Radio value={"No"}>No</Radio>
                <Radio value={"Yes"}>Yes</Radio>
              </Radio.Group>
            </div>

            {values.type === "DOUBLE" && (
              <div>
                <div>
                  <label>
                    Would you like to cover pre-existing medical conditions?
                  </label>
                </div>
                <Radio.Group
                  onChange={(e) =>
                    setFieldValue(
                      "preExistingMedicalConditions1",
                      e.target.value
                    )
                  }
                  value={values.preExistingMedicalConditions1}
                >
                  <Radio value={"No"}>No</Radio>
                  <Radio value={"Yes"}>Yes</Radio>
                </Radio.Group>
              </div>
            )}

            <button
              disabled={loading}
              className="uppercase border px-5 py-2 rounded-md bg-blue-500/50"
              type="submit"
            >
              Get Quote
            </button>
          </form>
        )}
      </Formik>
    </div>
  );
};

export default SuperVisaQoute;

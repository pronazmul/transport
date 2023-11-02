import React, { useState } from "react";
import { Formik } from "formik";
import { Radio, Select } from "antd";
import dayjs from "dayjs";
import DateOfBirth from "../QouteForm/DateOfBirth";
import Coverage from "../QouteForm/Coverage";
import { MinusIcon, PlusIcon } from "@heroicons/react/24/outline";
import StartEndDay from "../QouteForm/StartEndDay";

const dateFormat = "DD/MM/YYYY";

const durations = [
  { value: 4, label: 4 },
  { value: 8, label: 8 },
  { value: 10, label: 10 },
  { value: 15, label: 15 },
  { value: 16, label: 16 },
  { value: 30, label: 30 },
  { value: 32, label: 32 },
  { value: 35, label: 35 },
  { value: 60, label: 60 },
  { value: 125, label: 125 },
];
const dependents = [
  { value: 0, label: 0 },
  { value: 1, label: 1 },
  { value: 2, label: 2 },
  { value: 3, label: 3 },
  { value: 4, label: 4 },
  { value: 5, label: 5 },
  { value: 6, label: 6 },
  { value: 7, label: 7 },
  { value: 8, label: 8 },
  { value: 9, label: 9 },
];

const QouteForm = ({ loading, getQoute, insuranceType, multiTrip }) => {
  const [allCoverage, setAllCoverage] = useState(false);
  const [perApplicant, setPerApplicant] = useState(false);

  return (
    <div className="mx-auto max-w-4xl border p-10 rounded-md">
      {insuranceType === "supervisa" && (
        <p className="text-sm mb-3">
          Get Supervisa Insurance quotes. Enter details and click the Get Quote
          button.
        </p>
      )}
      <Formik
        initialValues={{
          dob1:
            insuranceType === "supervisa"
              ? ""
              : dayjs(new Date()).format(dateFormat),
          age1: insuranceType === "supervisa" ? 40 : 25,
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
          dependents: 0,
          dob2:
            insuranceType === "supervisa"
              ? ""
              : dayjs(new Date()).format(dateFormat),
          age2: insuranceType === "supervisa" ? 40 : 25,
          trip: "SINGLE",
          travelling: "USA",
          tripDuration: 8,
        }}
        onSubmit={(values, actions) => {
          getQoute(values);
        }}
      >
        {({ handleSubmit, values, setFieldValue }) => (
          <form onSubmit={handleSubmit} className="space-y-4">
            {insuranceType === "travel" && (
              <div>
                <div>
                  <div className="py-2">
                    <label htmlFor="trip">Trip type</label>
                  </div>
                  <Radio.Group
                    id="trip"
                    name="trip"
                    onChange={(e) => setFieldValue("trip", e.target.value)}
                    value={values.trip}
                  >
                    <Radio value={"SINGLE"}>Single Trip</Radio>
                    <Radio value={"MULTI"}>Multi Trip</Radio>
                  </Radio.Group>
                </div>
                {values.trip !== "MULTI" && (
                  <div>
                    <div className="py-2">
                      <label htmlFor="travelling">Traveling to</label>
                    </div>
                    <Radio.Group
                      id="travelling"
                      name="travelling"
                      onChange={(e) =>
                        setFieldValue("travelling", e.target.value)
                      }
                      value={values.travelling}
                    >
                      <Radio value={"USA"}>USA</Radio>
                      <Radio value={"worldwide"}>Worldwide (No-USA)</Radio>
                      <Radio value={"Within Canada"}>Within Canada</Radio>
                    </Radio.Group>
                  </div>
                )}
              </div>
            )}

            <div>
              <div className="py-2">
                <label>What type of policy do you want?</label>
              </div>
              <Radio.Group
                onChange={(e) => setFieldValue("type", e.target.value)}
                value={values.type}
              >
                <Radio value={"SINGLE"}>Single Coverage</Radio>
                {values.trip !== "MULTI" && (
                  <Radio value={"DOUBLE"}>Couple Policy</Radio>
                )}
                {(insuranceType === "student" ||
                  insuranceType === "travel") && (
                  <Radio value={"FAMILY"}>Family Policy</Radio>
                )}
              </Radio.Group>
            </div>

            {values.trip === "MULTI" && (
              <div>
                <div>
                  <label className="" htmlFor="tripDuration">
                    Trip Duration
                  </label>
                </div>
                <Select
                  size="large"
                  style={{ width: 120 }}
                  name={"tripDuration"}
                  id={"tripDuration"}
                  defaultValue={values.tripDuration}
                  onChange={(e) => setFieldValue("tripDuration", e)}
                  options={durations}
                />
              </div>
            )}

            <DateOfBirth
              ownerField="Applicant"
              insuranceType={insuranceType}
              value={values.dob1}
              ageName={"age1"}
              name="dob2"
              setFieldValue={setFieldValue}
              ageValue={values.age1}
            />

            {(values.type === "DOUBLE" || values.type === "FAMILY") && (
              <DateOfBirth
                ownerField="Spouse"
                insuranceType={insuranceType}
                value={values.dob2}
                ageName={"age2"}
                name="dob2"
                setFieldValue={setFieldValue}
                ageValue={values.age2}
              />
            )}

            {values.type === "FAMILY" && (
              <div>
                <div>
                  <label className="" htmlFor="dependents">
                    No of dependents
                  </label>
                </div>
                <Select
                  size="large"
                  style={{ width: 120 }}
                  name={"dependents"}
                  id={"dependents"}
                  defaultValue={values.dependents}
                  onChange={(e) => setFieldValue("dependents", e)}
                  options={dependents}
                />
              </div>
            )}

          {values.trip !== "MULTI" &&  <StartEndDay
              insuranceType={insuranceType}
              start_date={"start_date1"}
              start_value={values.start_date1}
              end_date={"end_date1"}
              end_value={values.end_date1}
              daysName="days1"
              daysValue={values.days1}
              setFieldValue={setFieldValue}
            />}
            {insuranceType === "supervisa" && perApplicant && (
              <StartEndDay
                insuranceType={insuranceType}
                start_date={"start_date2"}
                start_value={values.start_date2}
                end_date={"end_date2"}
                end_value={values.end_date2}
                daysName="days2"
                daysValue={values.days2}
                setFieldValue={setFieldValue}
                disabled={insuranceType === "supervisa"}
              />
            )}

            {insuranceType === "supervisa" && values.type === "DOUBLE" && (
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

            {insuranceType === "supervisa" && (
              <Coverage
                name={"coverage1"}
                value={values.coverage1}
                setFieldValue={setFieldValue}
              />
            )}
            {insuranceType === "supervisa" && allCoverage && (
              <Coverage
                name={"coverage2"}
                value={values.coverage2}
                setFieldValue={setFieldValue}
              />
            )}
            {insuranceType === "supervisa" && values.type === "DOUBLE" && (
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

            {insuranceType === "supervisa" && (
              <div className="">
                <div className="mt-10">
                  <label>
                    Would you like to cover pre-existing medical conditions?
                  </label>
                </div>
                <Radio.Group
                  onChange={(e) =>
                    setFieldValue(
                      "preExistingMedicalConditions",
                      e.target.value
                    )
                  }
                  value={values.preExistingMedicalConditions}
                >
                  <Radio value={"No"}>No</Radio>
                  <Radio value={"Yes"}>Yes</Radio>
                </Radio.Group>
              </div>
            )}

            {insuranceType === "supervisa" && values.type === "DOUBLE" && (
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
              {loading ? "Loading..." : "Get Quote"}
            </button>
          </form>
        )}
      </Formik>
    </div>
  );
};

export default QouteForm;

import React from "react";
import { DatePicker, InputNumber } from "antd";
import dayjs from "dayjs";
import { toast } from "react-toastify";
const dateFormat = "DD/MM/YYYY";
const DateOfBirth = ({
  
  name,
  ageName,
  ageValue,
  value,
  setFieldValue,
  ownerField,
  insuranceType
}) => {


  return (
    <>
      <div className="flex items-center gap-3">
        <div>
          <div>
            <label className="" htmlFor="dob">
             {insuranceType === "supervisa" ? "" : ownerField} Date of Birth or Age
            </label>
          </div>
          <DatePicker
            format={dateFormat}
            size="large"
            className={insuranceType === "supervisa" ? "" : "w-72"}
            name={name}
            id={name}
            placeholder="Date of Birth"
            value={value ? dayjs(value, dateFormat) : ""}
            onChange={(date, dateString) => {
              console.log(dateString)
              const year = dayjs(new Date()).diff(
                dayjs(dateString, dateFormat),
                "year"
              );
              
              if ( insuranceType === "supervisa" && 40 > year) {
                toast.warning("Your are selected under age!!");
                return;
              }
              setFieldValue(name, dateString);
              setFieldValue(ageName, year);
            }}
          />
        </div>
        <span className="mt-4">or</span>
        <div>
          <div>
            <label className="" htmlFor="age">
              Age
            </label>
          </div>
          <InputNumber
            id={ageName}
            name={ageName}
            size="large"
            min={ insuranceType=== "supervisa" ? 40 : 0}
            max={90}
            value={ageValue}
            defaultValue={40}
            onChange={(e) => setFieldValue(ageName, e)}
          />
        </div>
      </div>
    </>
  );
};

export default DateOfBirth;

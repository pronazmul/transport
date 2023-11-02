import React from "react";
import { Select } from "antd";

const Coverage = ({ name, label, value, setFieldValue }) => {
  return (
    <>
      <div>
        <div>
          <label htmlFor={name}>Coverage</label>
        </div>
        <Select
          size="large"
          style={{ width: 200 }}
          name={name}
          id={name}
          defaultValue={value}
          onChange={(e) => setFieldValue(name, e)}
          options={[
            { value: "100000", label: "100,000 (min. requirement)" },
            { value: "150000", label: "150,000" },
            { value: "200000", label: "200,000" },
            { value: "300000", label: "300,000" },
            { value: "500000", label: "500,000" },
            { value: "1000000", label: "1,000,000" },
          ]}
        />
      </div>
    </>
  );
};

export default Coverage;

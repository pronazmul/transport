import React, { useState } from "react";


import axios from "axios";
import { baseURL } from "@/utils/helper";
import { toast } from "react-toastify";
import PlanCard from "../QouteForm/PlanCard";
import Sidebar from "./Sidebar";
import QouteForm from "../QouteForm/QouteForm";

const StudentInsuranceQoute = () => {
  const [qoutes, setQoutes] = useState([]);
  const [loading, setLoading] = useState(false);

  const getQoute = async (values) => {
    setLoading(true);
    let url = "";
    if (values.type === "SINGLE") {
      url = `/single?age1=${values.age1}&days1=${values.days1}`;
    }

    if (values.type === "DOUBLE") {
      url = `/couple?age1=${values.age1}&age2=${values.age2}&days1=${values.days1}`;
    }
    if(values.type === "FAMILY"){
      url = `/family?age1=${values.age1}&age2=${values.age2}&days1=${values.days1}&noOfDependents=${values.dependents}`;

    }


    const res = await axios.get(`${baseURL}/qoutes/student${url}`);

    if (res.status === 200) {
      if (!res.data.length) {
        toast.warning("Qoute not found!. Try to change date");
        setLoading(false);
        return;
      }
      toast.success("Qoute founded.");
      setQoutes(res.data);
      setLoading(false);
    } else {
      toast.error("Something error");
      setLoading(false);
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
    <QouteForm
      getQoute={getQoute}
      loading={loading}
      insuranceType={"student"}
    />
  );
};

export default StudentInsuranceQoute;

import React from "react";
import SingleSubscription from "../components/SingleSubscription";

export default function Subscriptions() {
  const plans = [
    {
      id: 2,
      plan: "Career",
      feature1: "Stand out and get in touch with hiring managers",
      feature2: "See how you compare to other applicants",
      feature3: "Learn new skills to advance your career",
      version: "Popular",
      amount: 24,
    },
    {
      id: 3,
      plan: "Business",
      feature1: "Find leads and accounts in your target market",
      feature2: "Get real-time insights for warm outreach",
      feature3: "Learn new skills to enhance your professional brand",
      version: "Advanced",
      amount: 50,
    },
  ];
  return (
    <div>
      <header className="mx-auto max-w-fit">
        <h3 className="text-4xl text-center font-semibold">Flexible Plans</h3>
        <p className="text-center my-2">Choose a plan that works best for you.</p>
      </header>
      <div className="flex items-center justify-center gap-7 mt-16">
        {plans.map((item) => (
          <SingleSubscription item={item} key={item.id} />
        ))}
      </div>
    </div>
  );
}

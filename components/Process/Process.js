import React, { useState } from "react";
import ProcessBox from "./ProcessBox";

const Process = () => {

  return (
    <div className="relative py-20 bg-[#684300c2]">
    <div className="">
    <div className="px-3 py-5 pb-10">
      <div className="flex flex-col md:items-center max-w-7xl m-auto">
        <h2
          className="text-white p-[0.40rem] mb-2 text-center text-4xl font-bold
     "
        >
          <span className=" relative after:absolute after:w-full after:h-[2px] after:rounded-full after:bg-orange-500 after:left-0 after:-bottom-1">
          Our Process
          </span>
        </h2>
        <div className=" flex justify-center mt-6 max-w-xl mx-auto">
          <h4 className=" font-bold text-2xl leading-tight text-white text-center">
          Personalized, cost-effective coverage that matches your needs and
          financial goals.
          </h4>
        </div>
       
        <div className="flex lg:flex-row flex-col justify-center  mt-3 gap-4 w-full">
          <div className="flex flex-col mt-10 gap-6 w-full sm:w-3/4">
            <ProcessBox
              text1={" Analyize numerious insurance documents"}
              text2={
                "At InsuranceBuzz, our process begins with a meticulous analysis of the numerous insurance documents in the market. We understand that the insurance landscape can be overwhelming, filled with complex policies and intricate details. That's why our team of dedicated experts is here to decipher the fine print for you. We dive deep into the world of insurance documents, breaking down the jargon and sifting through the details, ensuring that you have a clear understanding of your options. Our commitment to you is to simplify the process. We believe that knowledge is power, and by carefully examining these documents, we empower you to make informed decisions about your insurance needs. Whether you're a business owner, a homeowner, or an individual seeking coverage, InsuranceBuzz has got you covered. Our thorough analysis ensures that no stone is left unturned, helping you navigate the insurance landscape with confidence."
              }
            />
            <ProcessBox
              text1={"Identify ideal policy that suits your needs"}
              text2={
                "nsurance is not a one-size-fits-all solution. That's why the next step in the InsuranceBuzz process is to dentify the ideal policy tailored to your unique needs. We understand that your life, your assets, and your goals are distinct from anyone else's. That's why our team takes the time to get to know you personally. We consider your lifestyle, your family, your business, and your dreams to create a customized insurance plan that provides precisely the coverage you need. Our goal is to be your insurance partner, guiding you through the process of finding the right policy. We'll assess your risk profile, your budget, and your future plans to recommend insurance solutions that align perfectly with your life. Whether you're seeking protection for your family's future, your business assets, or any other aspect of your life, InsuranceBuzz is here to ensure that you have a policy that suits you like a glove. With us, it's not just about insurance; it's about tailored protection that gives you peace of mind."
              }
              diff
            />
            <ProcessBox
              text1={"Get the most competitive rates"}
              text2={
                "At InsuranceBuzz, we know that getting the most competitive insurance rates is crucial. Your financial security matters, and we're committed to helping you maximize your budget. Our process includes shopping the market for you, leveraging our industry expertise and strong relationships with reputable insurance providers to secure the best rates available. We understand that affordability is essential, but we never compromise on the quality of coverage. Our goal is to find a cost-effective solution that meets your needs without cutting corners. We'll work closely with you to assess your unique circumstances and budget, ensuring that you receive not just coverage but the best value for your investment. With our dedication to securing competitive rates, you can have confidence that your insurance plan from InsuranceBuzz aligns with your financial goals."
              }
            />
             <ProcessBox
              text1={"Get the most competitive rates"}
              text2={
                "The final step in the InsuranceBuzz process is to simplify the paperwork for you. We know that dealing with insurance forms can be a time-consuming and daunting task. That's why we're here to streamline the process. Our team will assist you in filling out all the necessary insurance forms, ensuring that every detail is accurate and complete. We take the hassle out of paperwork, so you can focus on what truly matters. Whether you're applying for a new policy or updating an existing one, our experts will guide you through the process, making it as smooth and straightforward as possible. We're here to save you time and effort, ensuring that your insurance journey with InsuranceBuzz is hassle-free from start to finish. Your peace of mind is our priority, and that includes simplifying the administrative aspects of insurance for you."
              }
            />
          </div>

        
        </div>
      </div>
    </div>
  </div>
    </div>
  );
};

export default Process;

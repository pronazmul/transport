import Link from "next/link";
import React from "react";

const ImportantLinks = ({color}) => {
  return (
    <>
      <div
        id="important-links"
        className="p-4"
        style={{ minHeight: "100vh", background: `${color}` }}
      >
        <div className=" container mx-auto">
          <h2 className="text-3xl font-bold text-white">Important Links</h2>
        </div>

        <div className="mt-8 container mx-auto flex flex-col gap-4">
          <Link
            target="_blank"
            className="text-sm text-white underline"
            href={
              "https://www.canada.ca/en/revenue-agency/services/tax/international-non-residents/individuals-leaving-entering-canada-non-residents/newcomers-canada-immigrants.html"
            }
          >
            Newcomers to Canada
          </Link>
          <Link
            target="_blank"
            className="text-sm text-white underline"
            href={
              "https://www.canada.ca/en/immigration-refugees-citizenship/services/new-immigrants.html"
            }
          >
            Services and information for new Immigrants{" "}
          </Link>
          <Link
            target="_blank"
            className="text-sm text-white underline"
            href={"https://www.ontario.ca/page/apply-ohip-and-get-health-card"}
          >
            Apply for OHIP and get a health card
          </Link>
          <Link
            target="_blank"
            className="text-sm text-white underline"
            href={
              "https://www.canada.ca/en/immigration-refugees-citizenship/services/application/medical-police/medical-exams.html"
            }
          >
            Medical Examination
          </Link>
          <Link
            target="_blank"
            className="text-sm text-white underline"
            href={
              "https://www.canada.ca/en/immigration-refugees-citizenship/services/visit- canada/parent-grandparent-super-visa/eligibility.html"
            }
          >
            Eligibility for Super visa
          </Link>
          <Link
            target="_blank"
            className="text-sm text-white underline"
            href={
              "https://www.canada.ca/en/immigration-refugees-citizenship/services/application/application-forms-guides/guide-5256-applying-visitor-visa-temporary-resident-visa.html#incometables"
            }
          >
            Income Requirements for super visa
          </Link>
          <Link
            target="_blank"
            href={
              "https://www.canada.ca/en/immigration-refugees-citizenship/services/application/check-processing-times.html"
            }
            className="text-sm text-white underline"
          >
            Super visa processing time
          </Link>
        </div>
      </div>
    </>
  );
};

export default ImportantLinks;

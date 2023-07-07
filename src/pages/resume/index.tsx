import { useEffect, useState } from "react";

import { getResumeInfo } from "@/lib/resume";

const Page = () => {
  const resumeData = getResumeInfo();

  return (
    <div className="m-6 space-y-6 w-1/2">
      <h1 className="text-5xl mt-8">{resumeData.basics.name}</h1>
      <div>
        {resumeData.basics.location.city} | {resumeData.basics.profiles[1].url}{" "}
        | {resumeData.basics.email} | {resumeData.basics.phone}
      </div>
      <h1 className="text-4xl mt-8">Education</h1>
      <div className="flex justify-between">
        <div>{resumeData.education[0].institution}</div>
        <div>Grad {resumeData.education[0].endDate}</div>
      </div>
    </div>
  );
};

export default Page;

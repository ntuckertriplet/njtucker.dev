import { getResumeInfo } from "@/lib/resume";

const formatResumeDate = (d: string) => {
  if (!d) return "Current";
  const _d = new Date(d);
  const month = _d.toLocaleString("default", { month: "long" });

  return `${month} ${_d.getFullYear()}`;
};

const Page = () => {
  const resumeData = getResumeInfo();

  return (
    <div className="m-6 lg:w-3/4 xl:w-1/2">
      <div
        className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative text-center"
        role="alert"
      >
        <div className="block sm:inline">
          While the blog is undergoing maintenance, blog links temporarily go
          here. Feel free to browse my resume in the interim!
        </div>
      </div>
      <h1 className="text-5xl mt-8">{resumeData.basics.name}</h1>
      <div>
        {resumeData.basics.location.city} | {resumeData.basics.profiles[1].url}{" "}
        | {resumeData.basics.profiles[0].url} | {resumeData.basics.email}
      </div>
      <h1 className="text-4xl mt-8 text-center">Education</h1>
      <div className="flex justify-between">
        <div className="font-bold">{resumeData.education[0].institution}</div>
        <div>Grad {formatResumeDate(resumeData.education[0].endDate)}</div>
      </div>
      <div>
        {resumeData.education[0].studyType}, {resumeData.education[0].area},{" "}
        {resumeData.education[0].gpa} GPA
      </div>
      <h1 className="text-4xl mt-8 mb-4 text-center">Technical Experience</h1>
      <div className="space-y-4">
        {resumeData.work.map((w) => {
          return (
            <div>
              <div className="flex justify-between">
                <div className="font-bold text-xl">
                  {w.position} at{" "}
                  <a href={w.website} rel="noopener noreferrer">
                    {w.company}
                  </a>
                </div>
                <div>
                  {formatResumeDate(w.startDate)} -{" "}
                  {formatResumeDate(w.endDate)}
                </div>
              </div>
              <ul className="list-disc list-inside">
                {w.highlights.map((h) => {
                  return <li>{h}</li>;
                })}
              </ul>
            </div>
          );
        })}
      </div>
      <h1 className="text-4xl mt-8 mb-4 text-center">Projects</h1>
      <div className="space-y-4">
        {resumeData.projects.map((p) => {
          return (
            <div>
              <div className="flex justify-between">
                <div className="font-bold text-xl">{p.name}</div>
                <div>{p.type}</div>
              </div>
              <ul className="list-disc list-inside">
                {p.highlights.map((h) => {
                  return <li>{h}</li>;
                })}
              </ul>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Page;

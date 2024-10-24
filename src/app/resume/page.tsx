import { getResumeInfo } from "@/lib/resume";

const formatResumeDate = (d: string) => {
  if (!d) return "Current";
  const _d = new Date(d);
  const month = _d.toLocaleString("default", { month: "long" });

  return `${month} ${_d.getFullYear()}`;
};

export default function Page() {
  const resumeData = getResumeInfo();

  return (
    <div className="m-6 lg:w-3/4 xl:w-1/2">
      <h1 className="text-5xl mt-8">{resumeData.basics.name}</h1>
      <div>
        <a
          className="hover:underline"
          href={resumeData.basics.profiles[1].url}
          rel="noopener noreferrer"
        >
          {resumeData.basics.profiles[1].url}
        </a>{" "}
        |{" "}
        <a
          className="hover:underline"
          href={resumeData.basics.profiles[0].url}
          rel="noopener noreferrer"
        >
          {resumeData.basics.profiles[0].url}
        </a>{" "}
        |{" "}
        <a
          className="hover:underline"
          href={`mailto:${resumeData.basics.email}`}
          rel="noopener noreferrer"
        >
          {resumeData.basics.email}
        </a>
      </div>
      <h1 className="text-4xl mt-8 text-center">Education</h1>
      {resumeData.education.map((e) => {
        return (
          <div className="mb-2">
            <div className="flex justify-between">
              <div className="font-bold">{e.institution}</div>
              <div>Grad {formatResumeDate(e.endDate)}</div>
            </div>
            <div>
              {e.studyType}, {e.area}, {e.gpa} GPA
            </div>
          </div>
        );
      })}
      <h1 className="text-4xl mt-8 mb-4 text-center">Technical Experience</h1>
      <div className="space-y-4">
        {resumeData.work.map((w) => {
          return (
            <div>
              <div className="flex justify-between">
                <div className="font-bold text-xl">
                  {w.position},{" "}
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
              <div className="mt-1">
                <strong className="font-bold">Technologies Used</strong>:{" "}
                {p.technologies.join(", ")}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

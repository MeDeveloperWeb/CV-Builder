export default function Experience({ experienceDetails }) {
  return (
    <section
      className="resume-experience resume-section"
      title="Resume Experience Details"
    >
      <h3>Experience</h3>
      <ul>
        {experienceDetails.map((each) => (
          <li key={each.id}>
            <div className="resume-exp-firm">
              <h6>
                <span className="job-position emphasize">{each.position}</span>
                <span className="timespan">
                  {each.start + ' - ' + each.end}
                </span>
              </h6>
              <div className="firm-details">
                <span className="firm-name">{each.firm}</span>
                <span className="firm-address">{each.address}</span>
              </div>
              <ul className="job-details">
                {each.job_details.map((val, i) => (
                  <li key={i}>{val}</li>
                ))}
              </ul>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}

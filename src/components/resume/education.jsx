export default function Education({ educationDetails }) {
  return (
    <section
      className="resume-education resume-section"
      title="Resume Education Details"
    >
      <h3>Education</h3>
      <ul>
        {educationDetails.map((each) => (
          <li key={each.id}>
            <div className="resume-edu-firm">
              <h6>
                <span className="degree emphasize">{each.degree}</span>
                <span className="timespan">{each.end}</span>
              </h6>
              <div className="firm-details">
                <span className="firm-name">{each.institution}</span>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}

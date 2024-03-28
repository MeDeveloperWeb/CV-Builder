export default function Interests({ interestList }) {
  return (
    <section
      className="resume-interests resume-section"
      title="Resume Interests Details"
    >
      <h3>Interests</h3>
      <ul>
        {interestList.map((val) => (
          <li key={val}>{val}</li>
        ))}
      </ul>
    </section>
  );
}

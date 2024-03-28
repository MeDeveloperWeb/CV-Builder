export default function Skills({ skillList }) {
  return (
    <section
      className="resume-skills resume-section"
      title="Resume Skills Details"
    >
      <h3>Skills</h3>
      <ul>
        {skillList.map((val) => (
          <li key={val}>{val}</li>
        ))}
      </ul>
    </section>
  );
}

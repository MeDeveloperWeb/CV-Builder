export default function Contact({ personalDetails }) {
  return (
    <section
      className="resume-contact resume-section"
      title="Resume Contact Details"
    >
      <h3>Contact</h3>
      {Object.entries(personalDetails).map(
        ([key, value]) =>
          key !== 'name' &&
          key !== 'niche' &&
          key !== 'profile' && (
            <div key={key} className={'resume-' + key}>
              {value}
            </div>
          )
      )}
    </section>
  );
}

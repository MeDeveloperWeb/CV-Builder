export default function Profile({ personalDetails }) {
  return (
    <section className="resume-profile resume-section" title="Resume Profile">
      <h3>Profile</h3>
      <div className="resume-profile-details">{personalDetails.profile}</div>
    </section>
  );
}

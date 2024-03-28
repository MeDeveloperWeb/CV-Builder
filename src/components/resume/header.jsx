export default function Header({ personalDetails }) {
  return (
    <section className="resume-header" title="Resume Header">
      <span className="resume-name">{personalDetails.name}</span>
      <br />
      <span className="resume-niche">{personalDetails.niche}</span>
    </section>
  );
}

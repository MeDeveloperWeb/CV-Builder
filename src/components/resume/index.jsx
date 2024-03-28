import Contact from './contact';
import Education from './education';
import Experience from './experience';
import Header from './header';
import Interests from './interests';
import Profile from './profile';
import Skills from './skills';
import './style.css';
import './layout1.css';

export default function Resume({ data }) {
  return (
    <div className="resume-cont">
      <section className="resume layout1" title="Resume">
        <Header {...data} />
        <Contact {...data} />
        <Education {...data} />
        <Skills {...data} />
        <Interests {...data} />
        <Profile {...data} />
        <Experience {...data} />
      </section>
    </div>
  );
}

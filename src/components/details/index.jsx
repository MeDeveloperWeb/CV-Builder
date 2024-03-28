import EducationDetails from './education';
import ExperienceDetails from './experience';
import PersonalDetails from './personal';
import './style.css';
import EditableList from './editable-list';

export default function Details({
  data: {
    personalDetails,
    educationDetails,
    skillList,
    interestList,
    experienceDetails
  },
  setters: {
    setPersonalDetails,
    setEducationDetails,
    setSkillList,
    setInterestList,
    setExperienceDetails
  }
}) {
  return (
    <section title="Details Form" className="details-cont">
      <PersonalDetails data={personalDetails} setData={setPersonalDetails} />
      <EducationDetails data={educationDetails} setData={setEducationDetails} />
      <ExperienceDetails
        data={experienceDetails}
        setData={setExperienceDetails}
      />
      <EditableList data={skillList} setData={setSkillList} name="Skills" />
      <EditableList
        data={interestList}
        setData={setInterestList}
        name="Interests"
      />
    </section>
  );
}

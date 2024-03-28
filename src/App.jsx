import { useState } from 'react';
import './reset.css';
import './App.css';
import Details from './components/details';
import Resume from './components/resume';
import {
  eduInfo,
  experience,
  interests,
  personalInfo,
  skills
} from './sample-data';

function App() {
  const [personalDetails, setPersonalDetails] = useState(personalInfo);
  const [educationDetails, setEducationDetails] = useState(eduInfo);
  const [skillList, setSkillList] = useState(skills);
  const [interestList, setInterestList] = useState(interests);
  const [experienceDetails, setExperienceDetails] = useState(experience);

  return (
    <div className="main-cont">
      <Details
        data={{
          personalDetails,
          educationDetails,
          skillList,
          interestList,
          experienceDetails
        }}
        setters={{
          setPersonalDetails,
          setEducationDetails,
          setSkillList,
          setInterestList,
          setExperienceDetails
        }}
      />
      <Resume
        data={{
          personalDetails,
          educationDetails,
          skillList,
          interestList,
          experienceDetails
        }}
      />
    </div>
  );
}

export default App;

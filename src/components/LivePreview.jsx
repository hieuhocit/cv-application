import PersonalInfo from './personal-info/PeronalInfo';
import EducationInfo from './education/EducationInfo';
import ExperienceInfo from './experience/ExperienceInfo';

import '../styles/LivePreview.css';

export default function LivePreview({ layout ,profile }) {
  return (
    <div className={'live-preview ' + layout}>
      <PersonalInfo profile={profile} />
      <div>
        <EducationInfo educations={profile.educations.filter((education) => education.show)} />
        <ExperienceInfo experiences={profile.experiences.filter((experience) => experience.show)} />
      </div>
    </div>
  );
}

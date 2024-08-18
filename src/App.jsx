import { useState } from 'react';
import './styles/App.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import { faTwitter, faFontAwesome } from '@fortawesome/free-brands-svg-icons';
library.add(fas, far, faTwitter, faFontAwesome);

import Sidebar from './components/Sidebar';
import Form from './components/form/Form';
import CustomizeSection from './components/customize/CustomizeSection';
import LivePreview from './components/LivePreview';

import makeACopy from './utils/makeACopy';
import hexToRgb from './utils/hexToRgb';
import calculateLuminance from './utils/calculateLuminance';
import example from './data';

function App() {
  const [profile, setProfile] = useState(makeACopy(example));
  const [page, setPage] = useState('content');

  // Navigation
  const handleChangePage = (page) => {
    setPage(page);
  };

  // Clear and Loader
  const handleClearResume = () => {
    setProfile({
      name: '',
      email: '',
      phoneNumber: '',
      address: '',
      custom: {
        font: 'serif',
        layout: 'top',
        color: '#0e374e',
        headerColor: '#ffffff',
        sectionBgc: '#0e374e12',
      },
      educations: [],
      experiences: [],
    });
  };

  const handleLoadExample = () => {
    setProfile(makeACopy(example));
  };

  // Personal
  const handleChangePersonal = (e) => {
    setProfile({
      ...profile,
      [e.target.name]: e.target.value,
    });
  };

  // Education
  const handleChangeEducation = (e, index) => {
    const newEducations = [...profile.educations];
    const property = e.target.name;
    if (property === 'start' || property === 'end') {
      const value = e.target.value;
      if (!value.match(/^\d{4}-\d{2}-\d{2}$/)) return;
      newEducations[index][property] = new Date(value);
    } else {
      newEducations[index][property] = e.target.value;
    }
    setProfile({
      ...profile,
      educations: newEducations,
    });
  };

  const handleDeleteEducation = (index) => {
    const newEducations = makeACopy(profile.educations);
    newEducations.splice(index, 1);
    setProfile({
      ...profile,
      educations: newEducations,
    });
  };

  const handleCancelEducation = (prevEducations) => {
    setProfile({
      ...profile,
      educations: prevEducations,
    });
  };

  const handleChangeShowEducation = (index, value) => {
    const newEducations = makeACopy(profile.educations);
    newEducations[index].show = value;
    setProfile({
      ...profile,
      educations: newEducations,
    });
  };

  const handleAddEducation = (newEducation) => {
    setProfile((prevEducations) => {
      const newEducations = makeACopy(prevEducations.educations);
      newEducations.push(newEducation);
      return { ...profile, educations: newEducations };
    });
  };

  // Experience
  const handleChangeExperience = (e, index) => {
    const newExperiences = [...profile.experiences];
    const property = e.target.name;
    if (property === 'start' || property === 'end') {
      const value = e.target.value;
      if (!value.match(/^\d{4}-\d{2}-\d{2}$/)) return;
      newExperiences[index][property] = new Date(value);
    } else {
      newExperiences[index][property] = e.target.value;
    }
    setProfile({
      ...profile,
      experiences: newExperiences,
    });
  };

  const handleDeleteExperience = (index) => {
    const newExperiences = makeACopy(profile.experiences);
    newExperiences.splice(index, 1);
    setProfile({
      ...profile,
      experiences: newExperiences,
    });
  };

  const handleCancelExperience = (prevExperiences) => {
    setProfile({
      ...profile,
      experiences: prevExperiences,
    });
  };

  const handleChangeShowExperience = (index, value) => {
    const newExperiences = makeACopy(profile.experiences);
    newExperiences[index].show = value;
    setProfile({
      ...profile,
      experiences: newExperiences,
    });
  };

  const handleAddExperience = (newExperience) => {
    setProfile((prevExperiences) => {
      const newExperiences = makeACopy(prevExperiences.experiences);
      newExperiences.push(newExperience);
      return { ...profile, experiences: newExperiences };
    });
  };

  // Custom
  const handleChangeColor = (e) => {
    const newColor = e.target.value;
    const rgbColor = hexToRgb(newColor);
    const luminance = calculateLuminance(rgbColor);

    const bgColor = luminance > 128 ? '#000000' : '#FFFFFF';
    const newSectionBgc = luminance > 128 ? '#000000' : '#0e374e12';

    setProfile({
      ...profile,
      custom: {
        ...profile.custom,
        color: newColor,
        headerColor: bgColor,
        sectionBgc: newSectionBgc,
      },
    });
  };

  const handleChangeFont = (newFont) => {
    setProfile({
      ...profile,
      custom: {
        ...profile.custom,
        font: newFont,
      },
    });
  };

  const handleChangeLayout = (newLayout) => {
    setProfile({
      ...profile,
      custom: {
        ...profile.custom,
        layout: newLayout,
      },
    });
  };

  return (
    <div
      className='app'
      style={{
        '--resume-font': profile.custom.font,
        '--accent-color': profile.custom.color,
        '--header-resume-color': profile.custom.headerColor,
        '--section-resume-bg': profile.custom.sectionBgc,
      }}
    >
      <div className='edit-container'>
        <Sidebar
          page={page}
          onChangePage={handleChangePage}
        />
        {page === 'content' && (
          <Form
            profile={profile}
            onClearResume={handleClearResume}
            onLoadExample={handleLoadExample}
            onChangePersonal={handleChangePersonal}
            onChangeEducation={handleChangeEducation}
            onDeleteEducation={handleDeleteEducation}
            onCancelEducation={handleCancelEducation}
            onChangeShowEducation={handleChangeShowEducation}
            onAddEducation={handleAddEducation}
            onChangeExperience={handleChangeExperience}
            onDeleteExperience={handleDeleteExperience}
            onCancelExperience={handleCancelExperience}
            onChangeShowExperience={handleChangeShowExperience}
            onAddExperience={handleAddExperience}
          />
        )}
        {page === 'customize' && (
          <CustomizeSection
            onClearResume={handleClearResume}
            onLoadExample={handleLoadExample}
            custom={profile.custom}
            onChangeColor={handleChangeColor}
            onChangeFont={handleChangeFont}
            onChangeLayout={handleChangeLayout}
          />
        )}
      </div>
      <div className='cv-container'>
        <LivePreview
          profile={profile}
          layout={profile.custom.layout}
        />
      </div>
    </div>
  );
}

export default App;

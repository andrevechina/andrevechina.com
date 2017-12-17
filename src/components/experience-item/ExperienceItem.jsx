import React from 'react'
import PropTypes from 'prop-types'
import './experience-item.scss'

export default function ExperienceItem (props) {
  const {
    company, jobTitle, startDate, endDate, descriptions, skills
  } = props
  return (
    <div className="experience-item">
      <div>
        <span className="role">{jobTitle}</span>
        <span className="company">{company}</span>
        <span>{startDate} - {endDate}</span>
      </div>
      {
        descriptions.length &&
        <ul className="descriptions">
          {descriptions.map(descriptionEntry => <li key={descriptionEntry}>{descriptionEntry}</li>)}
        </ul>
      }
      <div className="skills">
        {
          skills.map(skill => (<span className="skill" key={skill}>{skill}</span>))
        }
      </div>
    </div>
  )
}

ExperienceItem.propTypes = {
  company: PropTypes.string.isRequired,
  jobTitle: PropTypes.string.isRequired,
  startDate: PropTypes.string.isRequired,
  endDate: PropTypes.string.isRequired,
  descriptions: PropTypes.arrayOf(PropTypes.string).isRequired,
  skills: PropTypes.arrayOf(PropTypes.string).isRequired
}

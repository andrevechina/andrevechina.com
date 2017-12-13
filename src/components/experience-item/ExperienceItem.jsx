import React from 'react'
import PropTypes from 'prop-types'
import './experience-item.scss'

export default function ExperienceItem (props) {
  const {
    company, jobTitle, startDate, endDate, descriptions
  } = props
  return (
    <div className="experience-item">
      <div>
        <span className="company">{company}</span>
        <span className="role"> | {jobTitle}</span>
      </div>
      <div>
        <span>{startDate} - {endDate}</span>
      </div>
      {
        descriptions.length &&
        <ul className="descriptions">
          {descriptions.map(descriptionEntry => <li key={descriptionEntry}>{descriptionEntry}</li>)}
        </ul>
      }
    </div>
  )
}

ExperienceItem.propTypes = {
  company: PropTypes.string.isRequired,
  jobTitle: PropTypes.string.isRequired,
  startDate: PropTypes.string.isRequired,
  endDate: PropTypes.string.isRequired,
  descriptions: PropTypes.arrayOf(PropTypes.string).isRequired
}

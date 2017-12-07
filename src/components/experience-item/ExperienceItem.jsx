import React from 'react'
import PropTypes from 'prop-types'
import './experience-item.scss'

export default function ExperienceItem (props) {
  const { company, jobTitle } = props
  return (
    <div className="experience-item">
      <span className="company">{company}</span>
      <span className="job-title">{jobTitle}</span>
    </div>
  )
}

ExperienceItem.propTypes = {
  company: PropTypes.string.isRequired,
  jobTitle: PropTypes.string.isRequired
}

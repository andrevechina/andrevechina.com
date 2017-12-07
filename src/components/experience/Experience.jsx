import React from 'react'
import './experience.scss'
import experience from '../../resources/experience.json'
import ExperienceItem from '../experience-item/ExperienceItem'

export default function Experience () {
  return (
    <div className="experience-container">
      <div className="title">Experience</div>
      <div>
        {
          experience.map(experienceItem => (
            <ExperienceItem
              company={experienceItem.company}
              jobTitle={experienceItem.jobTitle}
            />
          ))
        }
      </div>
    </div>
  )
}

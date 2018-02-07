import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { RaisedButton } from 'material-ui'
import './experience-item.scss'
import companyLogoHelper from '../../helpers/companyLogoHelper'

export default class ExperienceItem extends Component {
  constructor (props) {
    super()
    this.state = {
      descriptionCollapsed: true,
      logo: companyLogoHelper(props.company)
    }

    this.toggleDescription = this.toggleDescription.bind(this)
  }

  toggleDescription () {
    this.setState({
      descriptionCollapsed: !this.state.descriptionCollapsed
    })
  }

  render () {
    const {
      role, company, location, startDate, endDate, descriptions, skills
    } = this.props
    const { descriptionCollapsed, logo } = this.state
    return (
      <div className="experience-item">
        <div>
          {
            logo &&
            <div className="logo">
              <logo />
            </div>
          }
          <div>
            <span className="role">{role}</span>
            <span className="company-location">
              <span className="company">{company}</span>
              <span className="location">{location}</span>
            </span>
            <span className="dates">{startDate} - {endDate}</span>
          </div>
          <div className="skills">
            {
              skills.map(skill => (<span className="skill" key={skill}>{skill}</span>))
            }
          </div>
          {
            !descriptionCollapsed && descriptions.length &&
            <ul className="descriptions">
              {descriptions.map(descriptionEntry =>
                <li key={descriptionEntry}>{descriptionEntry}</li>)}
            </ul>
          }
          <div className="description-opts">
            <RaisedButton
              label={`${descriptionCollapsed ? 'Show' : 'Hide'} description`}
              onClick={this.toggleDescription}
            />
          </div>
        </div>
      </div>
    )
  }
}

ExperienceItem.propTypes = {
  role: PropTypes.string.isRequired,
  company: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  startDate: PropTypes.string.isRequired,
  endDate: PropTypes.string.isRequired,
  descriptions: PropTypes.arrayOf(PropTypes.string).isRequired,
  skills: PropTypes.arrayOf(PropTypes.string).isRequired
}

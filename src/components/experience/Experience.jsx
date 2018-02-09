import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { get } from 'lodash'
import { connect } from 'react-redux'
import './experience.scss'
import ExperienceItem from '../experience-item/ExperienceItem'
import { fetchExperience } from '../../actions/experienceActions'

class Experience extends Component {
  static propTypes = {
    fetchExperience: PropTypes.func.isRequired,
    experience: PropTypes.arrayOf(
      PropTypes.shape({
        company: PropTypes.string,
        role: PropTypes.string
      })
    ).isRequired
  }

  componentDidMount() {
    this.props.fetchExperience()
  }

  render() {
    const { experience } = this.props
    return (
      experience.length && (
        <div className="experience-container">
          <div className="title">Experience</div>
          <hr className="section-rule" />
          <div>
            {experience.map(experienceItem => (
              <ExperienceItem
                key={experienceItem.from}
                role={experienceItem.role}
                company={experienceItem.company}
                location={experienceItem.location}
                startDate={experienceItem.from}
                endDate={experienceItem.to}
                descriptions={experienceItem.descriptions}
                skills={experienceItem.skills}
              />
            ))}
          </div>
        </div>
      )
    )
  }
}

function mapStateToProps(state) {
  const experience = get(state, 'experience', [])
  return {
    experience
  }
}

function mapDispatchToProps(dispatch) {
  return {
    fetchExperience() {
      dispatch(fetchExperience())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Experience)

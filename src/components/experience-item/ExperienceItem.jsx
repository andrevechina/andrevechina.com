import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './experience-item.scss'

export default class ExperienceItem extends Component {
    static propTypes = {
        company: PropTypes.string.isRequired,
        jobTitle: PropTypes.string.isRequired
    }

    render () {
        const { company, jobTitle } = this.props
        return (
            <div className="experience-item">
                <span className="company">{company}</span>
                <span className="job-title">{jobTitle}</span>
            </div>
        )
    }
}

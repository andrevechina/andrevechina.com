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
                <div className="company">{company}</div>
                <div className="job-title">{jobTitle}</div>
            </div>
        )
    }
}

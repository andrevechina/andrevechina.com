/* eslint-disable import/prefer-default-export */
import { get } from 'lodash'
import { RECEIVE_EXPERIENCE } from './actionTypes'

function getTextContent (dom) {
  return get(dom, 'textContent', '').trim()
}

export function fetchExperience () {
  return {
    type: RECEIVE_EXPERIENCE,
    async payload () {
      const res = await fetch('https://raw.githubusercontent.com/andrevechina/andre-vechina-resume/master/andre-vechina-resume.html')
      const text = await res.text()
      const parser = new DOMParser()
      const dom = parser.parseFromString(text, 'text/html')

      const jobItems = [...dom.getElementsByClassName('experience-item')]
      return jobItems.map((jobItem) => {
        const company = getTextContent(jobItem.getElementsByClassName('company')[0])
        const role = getTextContent(jobItem.getElementsByClassName('role')[0])
        const from = getTextContent(jobItem.getElementsByClassName('from')[0])
        const to = getTextContent(jobItem.getElementsByClassName('to')[0])
        const location = getTextContent(jobItem.getElementsByClassName('where')[0])
        const descriptions = [...jobItem.getElementsByTagName('li')].map(getTextContent)
        const skillRows = jobItem.querySelector('p:last-child').innerHTML.split('<br>')
        const skills = skillRows.map(skillRow => skillRow.split('⋅').map(skill => skill.trim()))

        return {
          company,
          role,
          from,
          to,
          location,
          descriptions,
          skills
        }
      })
    }
  }
}

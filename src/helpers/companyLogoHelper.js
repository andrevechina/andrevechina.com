import varidentImg from '../images/varident.svg'

export default function getLogo (companyName) {
  const caseInsCompanyName = companyName.toLowerCase()
  switch (caseInsCompanyName) {
    case 'varident':
      return varidentImg
    default:
      return null
  }
}

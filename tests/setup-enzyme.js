import Enzyme, { configure } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

configure({ adapter: new Adapter() })

console.log(1, Enzyme.configure === configure)
console.log(2, Object.keys(Enzyme))

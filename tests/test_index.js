import Enzyme from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

Enzyme.configure({ adapter: new Adapter() })

// require all modules ending in "-test" from the
// current directory and all subdirectories
var testsContext = require.context('.', true, /-test$/)
testsContext.keys().forEach(testsContext)

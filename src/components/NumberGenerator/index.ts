import NumberGenerator from './NumberGenerator'
import { withNumberGenerator } from './withNumberGenerator'

const ConnectedNumberGenerator = withNumberGenerator(NumberGenerator)

export { ConnectedNumberGenerator as NumberGenerator }

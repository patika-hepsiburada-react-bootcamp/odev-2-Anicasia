import React from 'react'
import {
  Human,
  Head,
  Neck,
  Arm,
  Hand,
  Corpus,
  Leg,
  Chest,
  Foot,
  Dead,
} from './styled'

const VisibilitySetter = ({ visible, component: Component, ...rest }) =>
  visible ? <Component {...rest} /> : null

  // Homemaid human per wrong answer

export default ({ failedLetterCount }) => (
  <Human>
    <VisibilitySetter visible={failedLetterCount >= 1} component={Head}>
    </VisibilitySetter>
    <VisibilitySetter visible={failedLetterCount >= 2} component={Neck} />
    <VisibilitySetter visible={failedLetterCount >= 2} component={Corpus}>
      <VisibilitySetter visible={failedLetterCount >= 2} component={Chest}>
        <VisibilitySetter visible={failedLetterCount >= 3} component={Arm}>
          <VisibilitySetter visible={failedLetterCount >= 3} component={Hand} />
        </VisibilitySetter>
        <VisibilitySetter visible={failedLetterCount >= 4} component={Leg}>
          <VisibilitySetter
            visible={failedLetterCount >= 4}
            component={Foot}
          />
        </VisibilitySetter>
      </VisibilitySetter>
      <VisibilitySetter
        visible={failedLetterCount >= 2}
        component={Chest}
        right
      >
        <VisibilitySetter
          visible={failedLetterCount >= 3}
          component={Arm}
          right
        >
          <VisibilitySetter visible={failedLetterCount >= 3} component={Hand} />
        </VisibilitySetter>
        <VisibilitySetter
          visible={failedLetterCount >= 4}
          component={Leg}
          right
        >
          <VisibilitySetter
            visible={failedLetterCount >= 4}
            component={Foot}
            right
          />
        </VisibilitySetter>
      </VisibilitySetter>
    </VisibilitySetter>
    <VisibilitySetter
            visible={failedLetterCount >= 5}
            component={Dead}
            right
            />
  </Human>
)

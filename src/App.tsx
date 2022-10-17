import { useState } from 'react'
import cn from 'classnames'

import CarouselPage from 'pages/CarouselPage'
import PassengersPage from 'pages/PassengersPage'
import { FlexContainer } from 'components'

import 'styles/global.scss'
import styles from 'styles/app.module.scss'

type StepList = 1 | 2

function App() {
  const [step, setStep] = useState<StepList>(2)

  const handleChangeStep = (step: StepList) => () => {
    setStep(step)
  }

  return (
    <>
      <FlexContainer className={styles.header} direction="row" justify="center" gap="large">
        <button
          type="button"
          className={cn(styles.button, { [styles.focus]: step === 1 })}
          onClick={handleChangeStep(1)}
        >
          <p>🦖</p>
          <p>Step 1</p>
        </button>

        <button
          type="button"
          className={cn(styles.button, { [styles.focus]: step === 2 })}
          onClick={handleChangeStep(2)}
        >
          <p>🦕</p>
          <p>Step 2</p>
        </button>
      </FlexContainer>

      {step === 1 && <PassengersPage />}
      {step === 2 && <CarouselPage />}
    </>
  )
}

export default App

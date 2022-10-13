import { useState } from 'react'
import { Counter, ToolTip } from 'components'

import styles from './styles.module.scss'

function PassengersPages() {
  const [count, setCount] = useState(0)

  const handleChangeCount = (value: number) => {
    setCount(Number(value))
  }

  return (
    <article className={styles.pagePassengers}>
      <h1 className={styles.title} tabIndex={1}>
        승객 선택
      </h1>

      <label className={styles.label}>
        성인
        <ToolTip text="최대 인원수는 3명까지만 가능합니다." align="right" tabIndex={2}>
          <div className={styles.tip}>?</div>
        </ToolTip>
      </label>

      <div role="status" className={styles.screenReaderOnly}>
        성인 승객 {count}명 입력됨
      </div>

      <Counter
        min={0}
        max={3}
        value={count}
        onChange={handleChangeCount}
        aria-label="성인 탑승자"
      />
    </article>
  )
}

export default PassengersPages

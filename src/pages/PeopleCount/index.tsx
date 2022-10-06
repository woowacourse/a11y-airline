import { Counter, ToolTip } from 'components'
import { useState } from 'react'

import styles from './styles.module.scss'

function PeopleCount() {
  const [count, setCount] = useState(0)

  const handleChangeCount = (value: number) => {
    setCount(Number(value))
  }

  return (
    <section className={styles.pagePeopleCount}>
      <h1 className={styles.title}>승객 선택</h1>

      <h4 className={styles.label}>
        성인
        <ToolTip text="최대 인원수는 3명까지만 가능합니다." align="right">
          <div className={styles.tip}>?</div>
        </ToolTip>
      </h4>

      <Counter
        min={0}
        max={3}
        value={count}
        onChange={handleChangeCount}
        aria-label="성인 탑승자"
      />
    </section>
  )
}

export default PeopleCount

import cn from 'classnames'
import { ChangeEvent, HTMLAttributes } from 'react'
import isNumber from 'utils/isNumber'

import styles from './styles.module.scss'

export interface CounterProps extends Omit<HTMLAttributes<HTMLDivElement>, 'onChange'> {
  min?: number
  max?: number
  length?: number
  value: number
  onChange?: (value: number) => void
}

function Counter({
  className,
  min,
  max,
  value = 0,
  placeholder = '0',
  onChange,
  ...args
}: CounterProps) {
  const visibleNumber = String(value).replace(/(^[0]+)/, '')

  const handleChangeCount = (value: number) => {
    if (!onChange) return

    if (isNumber(min) && min > value) return
    if (isNumber(max) && max < value) return

    onChange(Number(value))
  }

  const handleChangeInput = ({ target }: ChangeEvent<HTMLInputElement>) => {
    const updatedValue = target.value === '' ? 0 : Number(target.value)

    if (updatedValue !== 0 && !/^[0-9]+/.test(target.value)) {
      return
    }

    handleChangeCount(updatedValue)
  }

  return (
    <div className={cn(styles.componentCounter, className)} {...args}>
      <button
        type="button"
        className={styles.button}
        onClick={() => handleChangeCount(value - 1)}
        aria-label={`${args['aria-label']} 줄이기`}
      >
        <span className={styles.innerText}>-</span>
      </button>

      <input
        type="number"
        className={styles.input}
        min={min}
        max={max}
        pattern="^[0-9]{1}$"
        value={visibleNumber}
        placeholder={placeholder}
        aria-label={`${args['aria-label']} 숫자 직접 입력란`}
        onChange={handleChangeInput}
      />

      <button
        type="button"
        className={styles.button}
        onClick={() => handleChangeCount(value + 1)}
        aria-label={`${args['aria-label']} 올리기`}
      >
        <span className={styles.innerText}>+</span>
      </button>
    </div>
  )
}

export default Counter

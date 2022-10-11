import cn from 'classnames'

import styles from './styles.module.scss'

export interface ToolTipProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string
  text: string
  align: 'top' | 'bottom' | 'left' | 'right'
  disabled: boolean
  children: React.ReactNode
}

function ToolTip({ className, text, align, disabled, children, ...args }: ToolTipProps) {
  const toolTipBoxClassNames = cn(styles.tooltipBox, styles[`align-${align}`], {
    [styles.disabled]: disabled,
  })

  return (
    <div className={cn(styles.componentTooltip, className)}>
      <div id="tooltipBox" role="tooltip" className={toolTipBoxClassNames} aria-label={text}>
        {text}
      </div>
      <div role="button" aria-describedby="tooltipBox" {...args}>
        <span aria-hidden>{children}</span>
      </div>
    </div>
  )
}

ToolTip.defaultProps = {
  disabled: false,
  align: 'top',
}

export default ToolTip

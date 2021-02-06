import styles from './Stack.module.css'
import cn from 'classnames'

export default function Stack({
  direction = 'column',
  align = 'center',
  justify = 'center',
  fullWidth = true,
  fullHeight = false,
  fullScreen = false,
  pad = 0,
  children,
  className,
  ...rest
}) {
  return (
    <div 
      className={cn(
        className,
        styles.stack, {
          [styles.column]: direction == 'column',
          [styles.row]: direction == 'row',
          [styles.fullWidth]: fullWidth || fullScreen,
          [styles.fullHeight]: fullHeight || fullScreen,
          [styles.alignCenter]: align == 'center',
          [styles.alignStretch]: align == 'stretch',
          [styles.alignStart]: align == 'start',
          [styles.alignEnd]: align == 'end',
          [styles.justifyStart]: justify == 'start',
          [styles.justifyEnd]: justify == 'end',
          [styles.justifyCenter]: justify == 'center',
          [styles.justifyAround]: justify == 'around',
          [styles.justifyBetween]: justify == 'between',
          [styles.justifyEven]: justify == 'even',
        },
        styles[`pad${pad}`],
      )}
      {...rest}
    >
      { children }
    </div>
  )
}
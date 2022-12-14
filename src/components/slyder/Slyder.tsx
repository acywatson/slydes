import * as React from 'react'
import './styles.css'

interface Props {
  /* A label describing the input. Required for accessibility */
  label: string
  /* An id for the input. Required for accessibility */
  id: string
  /* The maximum value of the input. Used as the maxLabel if maxLabel is not defined. */
  max: number
  /* The minimum value of the input. Used as the minLabel if minLabel is not defined. */
  min: number
  /* The amount to increment the value by when receiving user input. */
  step: number
  /* Space-separated CSS class names that will be applied to the component */
  className?: string
  /* Fires each time the input value changes without waiting for a mouseup event. */
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
  /* The label to be used for the maximum value of the range. */
  maxLabel?: string
  /* The label to be used for the minimum value of the range. */
  minLabel?: string
  /* The initial value for the input. If set, the input will be treated as uncontrolled. */
  initialValue?: number
  /* The value of the input. If set, the input will be treated as controlled. */
  value?: number
  /* Whether or not to disable the input. */
  disabled?: boolean
  /* Function governing how to render the value below the input. Defaults to the value itself. */
  renderValue?: (value: number) => JSX.Element | null
}

export default function Slyder({
  label,
  id,
  max,
  min,
  step,
  className,
  onChange,
  maxLabel,
  minLabel,
  value,
  initialValue,
  disabled = false,
  renderValue,
}: Props): JSX.Element {
  const [currentValue, setCurrentValue] = React.useState<number | undefined>(initialValue)
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    if (initialValue !== undefined) {
      setCurrentValue(parseInt(e.target.value))
    }
    if (onChange !== undefined) {
      onChange(e)
    }
  }

  const getValue = (): JSX.Element | null => {
    const val = currentValue ?? value
    if (val === undefined) {
      return null
    }
    return renderValue != null ? renderValue(val) : <>val</>
  }

  return (
    <div className={`slider-container ${className ?? ''}`}>
      <div className="slider-label">
        <label htmlFor={id}>{label}</label>
      </div>
      <div className="slider-input-container">
        <div className="slider-min-label">{minLabel !== undefined ? minLabel : min}</div>
        <div className="slider-input">
          {initialValue !== undefined ? (
            <input
              id={id}
              type="range"
              max={max}
              min={min}
              step={step}
              onChange={handleChange}
              defaultValue={initialValue}
              disabled={disabled}
            />
          ) : (
            <input
              id={id}
              type="range"
              max={max}
              min={min}
              step={step}
              onChange={handleChange}
              value={value}
              disabled={disabled}
            />
          )}
        </div>
        <div className="slider-max-label">{maxLabel !== undefined ? maxLabel : max}</div>
      </div>
      <div className="slider-value">
        <output htmlFor={id}>{getValue()}</output>
      </div>
    </div>
  )
}

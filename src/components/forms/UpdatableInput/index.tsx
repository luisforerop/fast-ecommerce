import type { FC, MouseEventHandler } from 'react'
import { useRef, useState } from 'react'

type UpdatableInputProps = {
  onChange?: (value: string) => void
  onRemove?: () => void
  onClick?: MouseEventHandler<HTMLDivElement>
  placeholder?: string
  value: string
  isCurrent?: boolean
}

export const UpdatableInput: FC<UpdatableInputProps> = ({
  onChange,
  onClick,
  onRemove,
  placeholder,
  value,
  isCurrent,
}) => {
  const [currentValue, setCurrentValue] = useState<string>(value)
  const [inputValue, setInputValue] = useState(value)
  const [isFocus, setIsFocus] = useState(!value)
  const inputRef = useRef<HTMLInputElement>(null)

  return (
    <div
      onClick={onClick}
      style={{
        border: isCurrent ? '1px solid' : 'none',
        display: 'flex',
        gap: '8px',
      }}
    >
      <span
        style={{
          display: !isFocus ? 'block' : 'none',
          width: '100%',
        }}
      >
        {currentValue}
      </span>
      <input
        style={{
          display: isFocus ? 'block' : 'none',
          width: '100%',
        }}
        ref={inputRef}
        type="text"
        value={inputValue}
        placeholder={placeholder}
        onChange={(evt) => setInputValue(evt.target.value)}
        onBlur={() => {
          const newValue = inputValue || currentValue
          setCurrentValue(newValue)
          onChange && onChange(newValue)
          setIsFocus(false)
        }}
      />
      <button
        style={{
          display: !isFocus ? 'block' : 'none',
        }}
        onClick={() => {
          setIsFocus(true)
          setTimeout(() => {
            inputRef.current?.focus()
          }, 100)
        }}
      >
        Editar
      </button>
      {onRemove && <button onClick={onRemove}>Remover</button>}
    </div>
  )
}

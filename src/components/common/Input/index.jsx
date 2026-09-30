import { useId } from 'react'
import cn from '../../../utils/cn.js'
import './Input.css'

/**
 * Text-like input with label, hint and error support.
 * Extra props (`type`, `placeholder`, `value`, `onChange`, ...) are forwarded
 * to the native input so it works with any form library later.
 */
export default function Input({
  label,
  hint,
  error,
  className,
  wrapperClassName,
  id,
  ...rest
}) {
  const generatedId = useId()
  const inputId = id ?? generatedId
  const hintId = hint ? `${inputId}-hint` : undefined
  const errorId = error ? `${inputId}-error` : undefined

  return (
    <div className={cn('field', error && 'field--invalid', wrapperClassName)}>
      {label && (
        <label className="field__label" htmlFor={inputId}>
          {label}
        </label>
      )}

      <input
        id={inputId}
        className={cn('field__control', className)}
        aria-invalid={error ? 'true' : undefined}
        aria-describedby={[errorId, hintId].filter(Boolean).join(' ') || undefined}
        {...rest}
      />

      {error && (
        <p className="field__error" id={errorId}>
          {error}
        </p>
      )}
      {!error && hint && (
        <p className="field__hint" id={hintId}>
          {hint}
        </p>
      )}
    </div>
  )
}
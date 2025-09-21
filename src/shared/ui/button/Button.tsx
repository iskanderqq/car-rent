import React, {
	ButtonHTMLAttributes,
	cloneElement,
	ElementType,
	FC,
	ReactElement,
	ReactNode,
	ReactSVGElement,
	RefObject,
} from 'react'

import styles from './Button.module.scss'
import clsx from 'clsx'

interface ButtonProps<E extends ElementType = ElementType>
	extends ButtonHTMLAttributes<HTMLButtonElement> {
	label?: string
	iconAlign?: 'left' | 'right'
	iconOnly?: boolean
	disabled?: boolean
	buttonType?: 'primary' | 'secondary' | 'minimal'
	size?: 'small' | 'medium' | 'large'
	as?: E
	ref?: RefObject<E>
	icon?: ReactNode
}

const DEFAULT_ELEMENT: ElementType = 'button'

function Button({
	as,
	label,
	buttonType = 'primary',
	size = 'medium',
	disabled = false,
	ref,
	icon,
	iconAlign = 'left',
	onClick,
	iconOnly = false,
	...props
}: ButtonProps): ReactNode {
	const Element = as || DEFAULT_ELEMENT

	return (
		<Element
			className={clsx(
				styles.reset,
				styles.button,
				{ [styles.disabled]: disabled, [styles.iconOnly]: iconOnly },
				styles[buttonType],
				styles[size]
			)}
			onClick={disabled ? () => {} : onClick}
			ref={ref}
			{...props}
		>
			{icon && iconAlign === 'left' ? (
				<div className={clsx(styles.icon, styles[size])}>{icon}</div>
			) : null}
			{!iconOnly && label}
			{icon && iconAlign === 'right' ? (
				<div className={clsx(styles.icon, styles[size])}>{icon}</div>
			) : null}
		</Element>
	)
}

export default Button

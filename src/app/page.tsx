'use client'
import Image from 'next/image'
import styles from './page.module.css'
import Button from '@/shared/ui/button/Button'
import SMSLinear from '@/shared/ui/icon/LinearSms'
import Link from 'next/link'

export default function Home() {
	return (
		<div>
			<Button
				onClick={() => console.info(123)}
				size='small'
				iconAlign='right'
				iconOnly
				label='Label'
				buttonType='secondary'
				icon={<SMSLinear />}
			/>
			<Button icon={<SMSLinear />} size='medium' label='Label' />
			<br />
			<br />
			<Button
				onClick={() => console.info(123)}
				size='medium'
				iconAlign='right'
				iconOnly
				label='Label'
				buttonType='secondary'
				icon={<SMSLinear />}
			/>

			<Button
				onClick={() => console.info(123)}
				disabled
				size='medium'
				label='Label'
				buttonType='secondary'
			/>
			<br />
			<br />
			<Button
				onClick={() => console.info(123)}
				size='large'
				iconAlign='right'
				iconOnly
				label='Label'
				buttonType='primary'
				icon={<SMSLinear />}
			/>
			<Button disabled size='medium' label='Label' buttonType='minimal' />
		</div>
	)
}

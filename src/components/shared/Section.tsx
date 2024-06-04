import classNames from 'classnames'
import React from 'react'
import styles from './Section.module.scss'

const cx = classNames.bind(styles)

const Section = ({ children }: { children: React.ReactNode }) => {
  return <section className={cx('container')}>{children}</section>
}

export default Section;

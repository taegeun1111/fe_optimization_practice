import classNames from 'classnames/bind'
import Section from '@shared/Section'
import styles from './Heading.module.scss'

const cx = classNames.bind(styles)

const Heading = () => {
  return (
    <Section className={cx('container')}>
      <div className={cx('text-date')}>23.08.12</div>
      <div className={cx('text-day')}>SATURDAY</div>
    </Section>
  )
}

export default Heading

import classNames from 'classnames/bind'
import Section from '@shared/Section'
import styles from './Heading.module.scss'
import { format, getDay, parseISO } from 'date-fns'

const cx = classNames.bind(styles)

const DAYS = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
]

const Heading = ({ date }: { date: string }) => {
  const weddingDate = parseISO(date)

  return (
    <Section className={cx('container')}>
      <div className={cx('text-date')}>{format(weddingDate, 'yy.MM.dd')}</div>
      <div className={cx('text-day')}>{DAYS[getDay(weddingDate)]}</div>
    </Section>
  )
}

export default Heading

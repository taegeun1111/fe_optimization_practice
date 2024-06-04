import styles from './FullScreenMessage.module.scss'
import classNames from 'classnames/bind'

const cx = classNames.bind(styles)

interface FullScreenMessageProps {
  type: 'loading' | 'error'
}

function FullScreenMessage({ type }: FullScreenMessageProps) {
  return (
    <div className={cx('container')}>
      {type === 'loading' ? <Heart /> : <Error />}
    </div>
  )
}

function Heart() {
  return (
    <svg
      className={cx('ico-heart')}
      version="1.1"
      viewBox="0 0 512 512"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="_x31_66_x2C__Heart_x2C__Love_x2C__Like_x2C__Twitter">
        <g>
          <path d="M365.4,59.628c60.56,0,109.6,49.03,109.6,109.47c0,109.47-109.6,171.8-219.06,281.271    C146.47,340.898,37,278.568,37,169.099c0-60.44,49.04-109.47,109.47-109.47c54.73,0,82.1,27.37,109.47,82.1    C283.3,86.999,310.67,59.628,365.4,59.628z" />
        </g>
      </g>
      <g id="Layer_1" />
    </svg>
  )
}

function Error() {
  return (
    <svg
      className={cx('ico-error')}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12,23 C5.92486775,23 1,18.0751322 1,12 C1,5.92486775 5.92486775,1 12,1 C18.0751322,1 23,5.92486775 23,12 C23,18.0751322 18.0751322,23 12,23 Z M12,21 C16.9705627,21 21,16.9705627 21,12 C21,7.02943725 16.9705627,3 12,3 C7.02943725,3 3,7.02943725 3,12 C3,16.9705627 7.02943725,21 12,21 Z M12.0003283,17.9983464 C11.4478622,17.9983464 11,17.5506311 11,16.9983464 C11,16.4460616 11.4478622,15.9983464 12.0003283,15.9983464 C12.5527943,15.9983464 13.0006565,16.4460616 13.0006565,16.9983464 C13.0006565,17.5506311 12.5527943,17.9983464 12.0003283,17.9983464 Z M11.0029544,5.99834639 L13.0036109,5.99834639 L13.0036109,13.9983464 L11.0029544,13.9983464 L11.0029544,5.99834639 Z"
        fill-rule="evenodd"
      />
    </svg>
  )
}

export default FullScreenMessage

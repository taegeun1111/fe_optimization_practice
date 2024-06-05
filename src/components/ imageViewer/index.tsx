import classNames from 'classnames/bind'
import { Swiper, SwiperSlide } from 'swiper/react'

import 'swiper/css'
import './swiper.css'

import styles from './ImageViewer.module.scss'

const cx = classNames.bind(styles)

const ImageViewer = ({
  images,
  open = false,
  selectedIndex,
  onClose,
}: {
  images: string[]
  open: boolean
  selectedIndex: number
  onClose: () => void
}) => {
  if (open === false) {
    return null
  }
  return (
    <div className={cx('dimmed')}>
      <CloseButton onClose={onClose} className={cx('icon-close')} />
      <Swiper spaceBetween={20} slidesPerView={1} initialSlide={selectedIndex}>
        {images.map((src, index) => {
          return (
            <SwiperSlide key={index}>
              <img src={src} alt="이미지 뷰어" />
            </SwiperSlide>
          )
        })}
      </Swiper>
    </div>
  )
}

const CloseButton = ({
  onClose,
  className,
}: {
  onClose: () => void
  className: string
}) => {
  return (
    <svg
      className={className}
      viewBox="0 0 32 32"
      xmlns="http://www.w3.org/2000/svg"
      onClick={onClose}
    >
      <g data-name="Layer 2" id="Layer_2">
        <path d="M16,29A13,13,0,1,1,29,16,13,13,0,0,1,16,29ZM16,5A11,11,0,1,0,27,16,11,11,0,0,0,16,5Z" />
        <path d="M11.76,21.24a1,1,0,0,1-.71-.29,1,1,0,0,1,0-1.41l8.49-8.49A1,1,0,0,1,21,12.46L12.46,21A1,1,0,0,1,11.76,21.24Z" />
        <path d="M20.24,21.24a1,1,0,0,1-.7-.29l-8.49-8.49a1,1,0,0,1,1.41-1.41L21,19.54A1,1,0,0,1,21,21,1,1,0,0,1,20.24,21.24Z" />
      </g>
    </svg>
  )
}

export default ImageViewer

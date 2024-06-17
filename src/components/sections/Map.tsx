import styles from './Map.module.scss'
import classNames from 'classnames/bind'
import Section from '@shared/Section'
import { useEffect, useRef } from 'react'
import { Location } from '@/models/wedding'

const cx = classNames.bind(styles)

declare global {
  interface Window {
    kakao: any
  }
}

const Map = ({ location }: { location: Location }) => {
  const mapContainer = useRef(null)
  useEffect(() => {
    const script = document.createElement('script')
    script.src = `https://dapi.kakao.com/v2/maps/sdk.js?appkey=${process.env.REACT_APP_KAKAO_APP_KEY}&autoload=false`
    script.async = true

    document.head.appendChild(script)

    script.onload = () => {
      window.kakao.maps.load(() => {
        const position = new window.kakao.maps.LatLng(
          location.lat,
          location.lng,
        )

        const options = {
          center: position,
          level: 3,
        }

        const market = new window.kakao.maps.Marker({
          position,
        })

        const map = new window.kakao.maps.Map(mapContainer.current, options)
        market.setMap(map)
      })
    }
  }, [])

  return (
    <Section
      title={
        <div className={cx('wrap-header')}>
          <span className={cx('txt-title')}>오시는길</span>
          <span className={cx('txt-subtitle')}>{location.name}</span>
          <span className={cx('txt-subtitle')}>{location.address}</span>
        </div>
      }
    >
      <div className={cx('map-wrap')}>
        <div className={cx('map')} ref={mapContainer}></div>
        <a
          className={cx('btn-find-way')}
          href={location.link}
          target="_black"
          rel="noreferrer"
        >
          길찾기
        </a>
      </div>

      <div>
        <WayToCome label="버스" list={location.waytocome.bus} />
        <WayToCome label="지하철" list={location.waytocome.metro} />
      </div>
    </Section>
  )
}

const WayToCome = ({
  label,
  list,
}: {
  label: React.ReactNode
  list: string[]
}) => {
  return (
    <div className={cx('wrap-waytocome')}>
      <div className={cx('text-label')}>{label}</div>
      <ul>
        {list.map((waytocome) => (
          <li key={waytocome}>{waytocome}</li>
        ))}
      </ul>
    </div>
  )
}

export default Map

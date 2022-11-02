import { FaSpinner } from 'react-icons/fa'
import './Loading.scss'

export function Loading() {
  return (
    <div className="loading">
      <div className="spinner">
        <FaSpinner className="spinner__spinning" size={60} />
      </div>
    </div>
  )
}

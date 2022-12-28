import { FaArrowLeft } from 'react-icons/fa'
import { Link } from 'react-router-dom'

export default function BackButton(props) {
  return (
    <Link
      to={props.route}
      className="flex items-center gap-3 mt-4 font-medium text-celadon-blue"
    >
      <FaArrowLeft />
      { props.message }
    </Link>
  );
}

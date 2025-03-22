import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar as faStarSolid } from '@fortawesome/free-solid-svg-icons'
import { faStar as faStarRegular } from '@fortawesome/free-regular-svg-icons'

export default function StarRating({ vote = 3 }) {  // vote predefinito a 3

    const renderStars = () => {
        return [1, 2, 3, 4, 5].map((num) => (
            <FontAwesomeIcon
                key={num}
                icon={num <= vote ? faStarSolid : faStarRegular} // Stelle piene o vuote
                className="text-yellow-500 text-2xl mx-1"
            />
        ));
    };

    return (
        <span className="flex justify-center">
            {renderStars()}
        </span>
    );
}

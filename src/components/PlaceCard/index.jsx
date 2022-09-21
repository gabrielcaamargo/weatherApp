import PropTypes from 'prop-types';

import { TrashSimple, CloudSun } from 'phosphor-react';
import { Container } from './styles';

export default function PlaceCard({ cityName, cityWeather }) {
  return (
    <Container>
      <div>
        <h3>
          {cityName}
          <CloudSun size={28} />
        </h3>
        <p>{cityWeather}</p>
      </div>

      <button type="button" className="delete">
        <TrashSimple color="#F00" size={22} />
      </button>
    </Container>
  );
}

PlaceCard.propTypes = {
  cityName: PropTypes.string.isRequired,
  cityWeather: PropTypes.string.isRequired,
};

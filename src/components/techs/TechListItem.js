import React from 'react';
import PropTypes from 'prop-types';
import M from 'materialize-css/dist/js/materialize.min.js';

const TechListItem = ({ tech: { id, firstName, lastName } }) => {

    return (
        <li className='collection-item'>
            <div>
                {firstName} {lastName}
                <a href='#!' className='secondary-content' onClick={onDelete}>
                    <i className='material-icons red-text'>delete</i>
                </a>
            </div>
        </li>
    );
};

TechListItem.propTypes = {
  tech: PropTypes.object.isRequired,
};

export default TechListItem
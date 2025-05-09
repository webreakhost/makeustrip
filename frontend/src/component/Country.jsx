import React from 'react';
import { Modal } from 'react-bootstrap';

const Country = ({ show, onClose }) => {
  const suggestedCountries = [
    { name: 'United States', currency: 'United States Dollar', flag: '/assets/img/flag/united-states.png' },
    { name: 'United Kingdom', currency: 'Pound Sterling', flag: '/assets/img/flag/united-kingdom.png' },
    { name: 'India', currency: 'Indian Rupees', flag: '/assets/img/flag/flag.png' },
    { name: 'Belgium', currency: 'Euro', flag: '/assets/img/flag/belgium.png' },
    { name: 'Brazil', currency: 'Australian Dollar', flag: '///assets/img/flag/brazil.png' },
    { name: 'China', currency: 'Thai Baht', flag: '/assets/img/flag/china.png' },
  ];

  const allCountries = [
    { name: 'United States', currency: 'United States Dollar', flag: '/assets/img/flag/united-states.png' },
    { name: 'Vietnam', currency: 'Property Currency', flag: '/assets/img/flag/vietnam.png' },
    { name: 'Turkey', currency: 'Argentine Peso', flag: '/assets/img/flag/turkey.png' },
    { name: 'Spain', currency: 'Azerbaijani Manat', flag: '/assets/img/flag/spain.png' },
    { name: 'Japan', currency: 'Australian Dollar', flag: '/assets/img/flag/japan.png' },
    { name: 'Portugal', currency: 'Brazilian Real', flag: '/assets/img/flag/portugal.png' },
  ];

  const handleCountrySelect = (country) => {
    console.log(`Selected country: ${country.name}, currency: ${country.currency}`);
    onClose(); // Close the modal
  };

  return (
    <Modal show={show} onHide={onClose} size="lg" centered>
      <div className="modal-content">
        <div className="modal-header">
          <h4 className="modal-title fs-6">Select Your Country</h4>
          <button
            type="button"
            className="btn-close"
            aria-label="Close"
            onClick={onClose}
          ></button>
        </div>
        <div className="modal-body">
          <div className="allCountrieslist">
            {/* Suggested Countries */}
            <div className="suggestedCurrencylist-wrap mb-4">
              <div className="ps-3 mb-2">
                <h5 className="fs-6 fw-bold">Suggested Countries For You</h5>
              </div>
              <ul className="row gy-2 gx-3">
                {suggestedCountries.map((country, index) => (
                  <li className="col-6 col-md-4" key={index}>
                    <a
                      href="#"
                      className="selectCountry d-block"
                      onClick={(e) => {
                        e.preventDefault();
                        handleCountrySelect(country);
                      }}
                    >
                      <div className="d-inline-block">
                        <img src={country.flag} className="img-fluid circle" width="35" alt={country.name} />
                      </div>
                      <div className="text-dark text-md fw-medium ps-2">{country.name}</div>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* All Countries */}
            <div className="suggestedCurrencylist-wrap">
              <div className="ps-3 mb-2">
                <h5 className="fs-6 fw-bold">All Countries</h5>
              </div>
              <ul className="row gy-2 gx-3">
                {allCountries.map((country, index) => (
                  <li className="col-6 col-md-4" key={index}>
                    <a
                      href="#"
                      className="selectCountry d-block"
                      onClick={(e) => {
                        e.preventDefault();
                        handleCountrySelect(country);
                      }}
                    >
                      <div className="d-inline-block">
                        <img src={country.flag} className="img-fluid circle" width="35" alt={country.name} />
                      </div>
                      <div className="text-dark text-md fw-medium ps-2">{country.name}</div>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default Country;

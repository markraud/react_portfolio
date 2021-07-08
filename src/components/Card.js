import React from 'react';

import paws from '../..assets/images/paws-4-yall.png';

export default function Card() {
  return (
    <div>
      <div className="row">
        <div className="col s12 m8 l8 offset-l2 offset-m2">
          <div className="card center-align">
            <div className="card-image">
              <img src={paws} alt='dogs' />
            </div>
            <div className="card-content grey lighten-2">
              <span className="card-title">Paws 4 Y'all</span>
              <p>This website was created to facilitate dog adoption. Users are able to view profiles for dogs that have
                been put up for adoption. Users can also create an account(or login with and existing account) and
                create new posts for dog
                adoption. Posts include basic information about the dog along with a picture(stored in Cloudinary with
                the URL saved in a MySQL database) </p>
            </div>
            <div className="card-action">
              <a className="blue-text" href="https://paws4yall.herokuapp.com/">Website</a>
              <a className="blue-text" href="https://github.com/markraud/pet-adoption">GitHub Repo</a>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}

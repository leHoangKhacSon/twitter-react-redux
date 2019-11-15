import React from 'react';

function InfoCard() {
  return (
    <div className="info-card">
      <div className="info-card-header">
        <div className="information">
          <div className="information-avatar">

          </div>
          <p className="information-name">
            <span className="information-name-text">
              name
            </span>
            <span className="information-name-icon">
              <i className="far fa-heart"></i>
            </span>
          </p>
          <p className="information-mail">
            @name
          </p>
        </div>
        <p className="follow-btn">
          Follow
        </p>
      </div>
      <div className="info-card-main">
        <p className="describle">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry.
        </p>
        <span className="follow">
          <span className="follow-view">
            4
          </span>
          <span className="follow-text">
            Following
          </span>
        </span>
        <span className="follower">
          <span className="follower-view">
            338.2 N
          </span>
          <span className="follower-text">
            Followers
          </span>
        </span>
      </div>
      <div className="info-card-footer">
      </div>
    </div>
  )
}

export default InfoCard;

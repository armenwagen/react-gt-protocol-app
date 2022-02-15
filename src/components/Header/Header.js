import React from "react";

export const Header = () => {
  return (
    <>
      <header>
        <nav>
          <ul>
            <li>
              <a href='#'>svg svg</a>
            </li>
          </ul>
          <ul className='menu'>
            <li>PitchDeck</li>
            <li>DeFi Pools</li>
            <li>CEX MVP</li>
            <li>Usecases</li>
            <li>Team</li>
            <li>Contact us</li>
          </ul>
          <ul>
            <li className='social-ico'></li>
            <li className='social-ico'></li>
            <li className='connect-button'>
              <button>
                svg
                <span></span>
              </button>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};

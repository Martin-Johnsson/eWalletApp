import React, { useEffect } from 'react';
import 'react-credit-cards/es/styles-compiled.css';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { getRandomUser } from '../redux/CardSlice';
import AllCards from '../components/AllCards';
import '../assets/styles/StyledMyCards.css';
import ActiveCard from '../components/ActiveCard';
import user from '../pictures/profilpicture.png';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import { IconButton } from '@material-ui/core';
import { BsFillArrowLeftCircleFill } from 'react-icons/bs';

const MyCardsPage = () => {
  const { cards } = useSelector((state) => state.cards);

  const dispatch = useDispatch();

  useEffect(() => {
    cards.forEach((card) => {
      if (card.active && card.cardHolderName.length === 0) {
        dispatch(getRandomUser());
      }
    });
  }, []);

  return (
    <div>
      <div>
        <Link to='/' className='icon'>
          <BsFillArrowLeftCircleFill />
        </Link>
        <div className='avatar'>
          <img src={user} alt='user-profil image' className='profil-picture' />
          {/* TODO: DYNAMIC USERNAME */}
          <span>Välkommen Lars</span>
        </div>
        <Link to={`/createcard`}>
          <div className='createCardFlexBox'>
            <div>
              <AddCircleIcon className='icon' />
            </div>
          </div>
        </Link>
      </div>
      <ActiveCard />
      <AllCards />
    </div>
  );
};

export default MyCardsPage;

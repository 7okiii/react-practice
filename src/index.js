import React from 'react';
import ReactDOM from 'react-dom';
import Mate_list_creator from './mate_cmp';
import Food_list_creator from './fav_food';

ReactDOM.render (
  <Mate_list_creator course={'webdev'}/>,document.getElementById('root')
);
ReactDOM.render (
  <Food_list_creator title={'food'}/>,document.getElementById('food')
);
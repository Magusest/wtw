import { MY_LIST_COUNT } from 'const';
import { FilmListType } from './types/films';

function getRandomArrayElement(array: FilmListType) {
  const element = array[Math.floor(Math.random() * array.length)];
  return element;
}

function getRandomArray(array: FilmListType) {
  const randomArray: FilmListType = [];

  for (let i = 0; randomArray.length < MY_LIST_COUNT; i++) {
    const rEll = getRandomArrayElement(array);
    const check = randomArray.every((ell) => ell.id !== rEll.id);
    if (check === true) {
      randomArray.push(rEll);
    }
  }
  return randomArray;
}

export {
  getRandomArrayElement,
  getRandomArray,
};

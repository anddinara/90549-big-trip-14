import {createTripInfoTemplate} from './view/trip-info.js';
import {createCostTripTemplate} from './view/cost.js';
import {createSiteMenuTemplate} from './view/site-menu.js';
import {createFilterTemplate} from './view/filter.js';
import {createSortTemplate} from './view/sort.js';
import {createTripEventsListTemplate} from './view/trip-events-list.js';
import {createFormEditTemplate} from './view/form-edit.js';
import {createFormAddTemplate} from './view/form-add.js';
import {createTripElementTemplate} from './view/trip-element.js';

const TRIP_ELEMENT = 3;

const render = (container, template, place) => {
  container.insertAdjacentHTML(place, template);
};

const siteHeaderElement = document.querySelector('.page-header');
const tripMainElement = siteHeaderElement.querySelector('.trip-main');
const siteMenuElement = siteHeaderElement.querySelector('.trip-controls__navigation');
const siteFilterElement = siteHeaderElement.querySelector('.trip-controls__filters');
const siteMainElement = document.querySelector('.page-main');
const tripEventsElement = siteMainElement.querySelector('.trip-events');

render(tripMainElement, createTripInfoTemplate(), 'afterbegin');

const tripInfoElement = siteHeaderElement.querySelector('.trip-info');
render(tripInfoElement, createCostTripTemplate(), 'beforeend');

render(siteMenuElement, createSiteMenuTemplate(), 'beforeend');
render(siteFilterElement, createFilterTemplate(), 'beforeend');
render(tripEventsElement, createSortTemplate(), 'beforeend');
render(tripEventsElement, createTripEventsListTemplate(), 'beforeend');

const tripEventsListElement = siteMainElement.querySelector('.trip-events__list');
render(tripEventsListElement, createFormEditTemplate(), 'beforeend');
render(tripEventsListElement, createFormAddTemplate(), 'beforeend');

for (let i = 0; i < TRIP_ELEMENT; i++) {
  render(tripEventsListElement, createTripElementTemplate(), 'beforeend');
}

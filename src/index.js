import { createRoot } from 'react-dom/client';

import App from './App'

import "./styles.css";

// endpoint
// https://jsonplaceholder.typicode.com/albums/1/photos?id=1&id=2&id=3&id=4&id=5&id=6

// TODO:
// 1. render an unordered list of tracks from an album from the given endpoint in line 7
// create a <Track> component that renders the id, title and an image with the thumbnailUrl
// you can use fetch or axios (which is already added in the dependencies)
// you must use functional components and hooks.

// 2. after the list is displayed, add the needed code to toggle the track title when the user
// clicks on the image

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App tab="home" />);

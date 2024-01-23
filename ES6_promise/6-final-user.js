import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

/* This will return `pending` due to the uploadPhoto rejected promise */
export default function handleProfileSignup(firstName = '', lastName = '', fileName = '') {
  return Promise.allSettled([signUpUser(firstName, lastName), uploadPhoto(fileName)]);
}

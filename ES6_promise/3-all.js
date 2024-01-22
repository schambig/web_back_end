import { uploadPhoto, createUser } from './utils';

export default function handleProfileSignup() {
  // Executing createUser and uploadPhoto functions concurrently using Promise.all()
  return Promise.all([uploadPhoto(), createUser()])
    .then((values) => { // When both promises are resolved
      // Destructuring 'body' property from the result of uploadPhoto()
      const { body } = values[0];
      // Destructuring 'firstName' and 'lastName' from the result of createUser()
      const { firstName, lastName } = values[1];

      // Logging the combined information of uploaded photo and created user account
      console.log(`${body} ${firstName} ${lastName}`);
    })
    .catch(() => { // Handling errors if any of the promises reject
      console.log('Signup system offline'); // Logging an error message if signup process fails
    });
}

/*
 Promise.all() enables concurrent execution of uploadPhoto() and createUser() functions,
 and these functions may or may not be asynchronous themselves.

While asynchronous execution allows tasks to be executed independently and
potentially concurrently, concurrent execution specifically refers to tasks
being executed simultaneously.
Asynchronous execution is a broader concept that encompasses various ways
of managing tasks independently of each other,
while concurrent execution specifically refers to tasks being executed at the same time.
 */

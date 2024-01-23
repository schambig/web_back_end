export default function loadBalancer(chinaDownload, USDownload) {
  return Promise.race([chinaDownload, USDownload]);
}

/* `Promise.race()` is a method provided by the Promise API in JavaScript.
It takes an iterable (such as an array) of Promises as input and returns a single Promise.
This resulting Promise settles (fulfills or rejects) as soon as one of the input Promises settles,
with the same settlement value or reason. */

export default function taskBlock(trueOrFalse) {
  const task = false;
  const task2 = true;

  if (trueOrFalse) {
    /* eslint-disable */ // Used to ignore non-used vars
    const task = true;
    const task2 = false;
  }

  return [task, task2];
}

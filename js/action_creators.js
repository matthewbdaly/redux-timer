export function addTimer(name) {
  return {
    type: 'ADD_TIMER',
    name: name
  };
}

export function toggleTimer(name) {
  return {
    type: 'TOGGLE_TIMER',
    name: name
  };
}

export function incrementTimer(name) {
  return {
    type: 'INCREMENT_TIMER',
    name: name
  };
}

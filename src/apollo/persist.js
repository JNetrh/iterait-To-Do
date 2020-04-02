const KEY = "appState";

export function getSavedState() {
  try {
    return JSON.parse(window.localStorage.getItem(KEY) || "{}");
  } catch (e) {
    return {};
  }
}

export function setSavedState(state) {
  window.localStorage.setItem(
    KEY,
    JSON.stringify({
      ...getSavedState(),
      ...state
    })
  );
}

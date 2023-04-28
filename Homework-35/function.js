export function createErrorMessage(message) {
  const errorMessageBox = document.createElement("div");
  errorMessageBox.classList.add("alert", "alert-danger");
  errorMessageBox.innerText = message;
  return errorMessageBox;
}

export function getIDFromUrl() {
  const params = new URL(document.location).searchParams;
  return params.get("id");
}
const snackbarContainer = document.querySelector("#snackbar-container");

const snackbar = document.createElement("div");
snackbar.id = "snackbar";
snackbar.setAttribute("role", "alert");
snackbar.classList.add("hide");

snackbar.addEventListener("transitionend", (e) => {
  if (!(e.target instanceof HTMLDivElement)) return;

  if (e.target.classList.contains("hide")) {
    e.target.remove();
  }
});

const snackbarShowTime = (stringLength: number) => 200 + 300 * stringLength;

export const alertWithSnackbar = (message: string) => {
  snackbar.textContent = message;

  snackbarContainer.append(snackbar);
  setTimeout(() => {
    snackbar.classList.remove("hide");
  });

  setTimeout(() => {
    snackbar.classList.add("hide");
  }, snackbarShowTime(message.length));
};

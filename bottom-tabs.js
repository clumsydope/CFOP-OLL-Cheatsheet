document.querySelectorAll(`.bottom-tab--dropdown`).forEach(dropdown => {
  const button = dropdown.querySelector(`.bottom-tab__button`);

  dropdown.addEventListener(`mouseenter`, () => {
    document.querySelectorAll(`.bottom-tab--dropdown.is-open`).forEach(openDropdown => {
      if (openDropdown !== dropdown) {
        openDropdown.classList.remove(`is-open`);
        openDropdown.querySelector(`.bottom-tab__button`).setAttribute(`aria-expanded`, `false`);
      }
    });

    dropdown.classList.add(`is-open`);
    button.setAttribute(`aria-expanded`, `true`);
  });

  dropdown.addEventListener(`mouseleave`, () => {
    dropdown.classList.remove(`is-open`);
    button.setAttribute(`aria-expanded`, `false`);
  });

  dropdown.addEventListener(`focusout`, event => {
    if (!dropdown.contains(event.relatedTarget)) {
      dropdown.classList.remove(`is-open`);
      button.setAttribute(`aria-expanded`, `false`);
    }
  });

  button.addEventListener(`click`, event => {
    event.stopPropagation();

    document.querySelectorAll(`.bottom-tab--dropdown.is-open`).forEach(openDropdown => {
      if (openDropdown !== dropdown) {
        openDropdown.classList.remove(`is-open`);
        openDropdown.querySelector(`.bottom-tab__button`).setAttribute(`aria-expanded`, `false`);
      }
    });

    dropdown.classList.add(`is-open`);
    button.setAttribute(`aria-expanded`, `true`);
  });
});

document.addEventListener(`click`, () => {
  document.querySelectorAll(`.bottom-tab--dropdown.is-open`).forEach(dropdown => {
    dropdown.classList.remove(`is-open`);
    dropdown.querySelector(`.bottom-tab__button`).setAttribute(`aria-expanded`, `false`);
  });
});


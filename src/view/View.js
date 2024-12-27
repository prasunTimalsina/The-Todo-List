export default class View {
  _data;

  _clear() {
    this._parentEl.innerHTML = "";
  }

  render(data, render = true) {
    this._data = data;
    const markup = this._generateMarkup();

    if (!render) return markup;
    this._clear();
    this._parentEl.insertAdjacentHTML("afterbegin", markup);
  }

  update(data) {
    this._data = data;
    const newMarkup = this._generateMarkup();
    const newDom = document.createRange().createContextualFragment(newMarkup);
    const curElement = Array.from(this._parentEl.querySelectorAll("*"));
    const newElement = Array.from(newDom.querySelectorAll("*"));

    newElement.forEach((newEl, i) => {
      const curEl = curElement[i];
      //Updates the changed texts
      if (
        !newEl.isEqualNode(curEl) &&
        newEl.firstChild?.nodeValue.trim() !== ""
      ) {
        curEl.textContent = newEl.textContent;
      }

      // Updates the attributes

      if (!newEl.isEqualNode(curEl))
        Array.from(newEl.attributes).forEach((attr) =>
          curEl.setAttribute(attr.name, attr.value)
        );
    });
  }
}

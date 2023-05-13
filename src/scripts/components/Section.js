//* отвечает за отрисовку элементов на странице
class Section {
  //? items - массив данных, которые нужно добавить на страницу при инициализации класса
  //? renderer - функция, которая отвечает за создание и отрисовку данных на странице

  //? selectorContainer  - селектор контейнера, в который нужно добавлять созданные элементы.
  constructor({ items, renderer }, selectorContainer) {
    this._items = items;
    this.renderer = renderer;

    this._container = document.querySelector(selectorContainer);
  }

  renderElements = () => {
    //? отвечает за отрисовку всех элементов.
    //? Отрисовка каждого отдельного элемента должна осуществляться функцией renderer.
    this._items.forEach((item) => {
      this.addItem(this.renderer(item));
    });
  };

  addItem = (element) => {
    //? принимает DOM-элемент и добавляет его в контейнер.
    this._container.prepend(element);
  };
}

export default Section;

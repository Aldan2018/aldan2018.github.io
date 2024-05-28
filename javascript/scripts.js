menu = {
  getMenuButton: function() {
    let self = this;
    let btn_menu = document.getElementById('menu_icon');
    let menu = document.getElementsByClassName('dropdown_menu')[0];
    btn_menu.addEventListener('click', () => self.show_menu.call(this, menu));

  },
  show_menu: function(menu) {
    let state = window.getComputedStyle(menu).display;
    console.log(state);
    if (state === 'none') {
      menu.style.display = 'block';
    } else {
      menu.style.display = 'none';
    }
  },
};
menu.getMenuButton();

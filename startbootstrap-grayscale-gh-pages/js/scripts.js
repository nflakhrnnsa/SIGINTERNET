/*!
* Start Bootstrap - Grayscale v7.0.6 (https://startbootstrap.com/theme/grayscale)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-grayscale/blob/master/LICENSE)
*/
//
// Scripts
// 

window.addEventListener('DOMContentLoaded', event => {

    // Navbar shrink function
    var navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('navbar-shrink')
        } else {
            navbarCollapsible.classList.add('navbar-shrink')
        }

    };

    // Shrink the navbar 
    navbarShrink();

    // Shrink the navbar when page is scrolled
    document.addEventListener('scroll', navbarShrink);

    // Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            rootMargin: '0px 0px -40%',
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

});
class LegendControl {
  onAdd(map) {
    this._map = map;

    // container utama legend
    this._container = document.createElement('div');
    this._container.className = 'mapboxgl-ctrl legend-control';
    this._container.style.background = 'white';
    this._container.style.padding = '8px';
    this._container.style.fontSize = '13px';
    this._container.style.fontFamily = 'sans-serif';
    this._container.style.borderRadius = '6px';
    this._container.style.boxShadow = '0 2px 6px rgba(0,0,0,0.2)';

    this._container.innerHTML = `
      <h4 style="margin:0 0 6px;font-size:14px;">Legenda</h4>
      <div style="display:flex;align-items:center;margin-bottom:4px;">
        <span style="width:15px;height:15px;background:#088;border:1px solid #000;margin-right:6px;"></span>
        Asrama Putra
      </div>
      <div style="display:flex;align-items:center;margin-bottom:4px;">
        <span style="width:15px;height:15px;background:#760;border:1px solid #000;margin-right:6px;"></span>
        Asrama Putri
      </div>
      <div style="display:flex;align-items:center;">
        <span style="width:15px;height:15px;background:#037;border:1px solid #000;margin-right:6px;"></span>
        Bangunan Umum
      </div>
    `;

    return this._container;
  }

  onRemove() {
    this._container.parentNode.removeChild(this._container);
    this._map = undefined;
  }
}

// Tambahin legend ke kanan bawah
map.addControl(new LegendControl(), 'bottom-right');

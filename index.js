

particlesJS('particles',
  
  {
    "particles": {
      "number": {
        // value é a quantidade das particulas
        "value": 50,
        "density": {
          "enable": true,
          "value_area": 800
        }
      },
      "color": {
        "value": "#fff"
      },
      "shape": {
        // no type para ser imagem tem que colocar image
        "type": 'image',
        "stroke": {
          "width": 0,
          "color": "#000000"
        },
        "polygon": {
          "nb_sides": 5
        },
        
        // Imagem da particula
        "image": {
          "src": './iconpage1.png',
          //"src": 'https://i.pinimg.com/originals/21/22/59/2122590e47382db5e74dbc59ab878336.png',
          "width": 100,
          "height": 100,
        }
      },
      "opacity": {
        "value": 0.5,
        "random": false,
        "anim": {
          "enable": false,
          "speed": 1,
          "opacity_min": 0.1,
          "sync": false
        }
      },

      // Tamanho de cada particula
      "size": {
        "value": 15,
        "random": true,
        "anim": {
          "enable": false,
          "speed": 40,
          "size_min": 0.1,
          "sync": false
        }
      },

      // Linha de ligação
      "line_linked": {
        "enable": true,
        "distance": 200,
        "color": "#fff",
        "opacity": 0,
        "width": 1.5
      },

      // Movimento das particulas
      "move": {
        "enable": true,
        "speed": 1,

        // direction - direção das particulas
        "direction": "top",
        
        "random": false,
        "straight": false,
        "out_mode": "out",
        "attract": {
          "enable": false,
          "rotateX": 600,
          "rotateY": 1200
        }
      }
    },

    // Interações
    "interactivity": {
      "detect_on": "canvas",
      "events": {
        "onhover": {
          "enable": false,
          "mode": "repulse"
        },
        "onclick": {
          "enable": true,
          "mode": "push"
        },
        "resize": true
      },
      "modes": {
        "grab": {
          "distance": 400,
          "line_linked": {
            "opacity": 1
          }
        },
        "bubble": {
          "distance": 400,
          "size": 40,
          "duration": 2,
          "opacity": 8,
          "speed": 3
        },
        "repulse": {
          "distance": 200
        },
        "push": {
          "particles_nb": 4
        },
        "remove": {
          "particles_nb": 2
        }
      }
    },
    "retina_detect": true,
    "config_demo": {
      "hide_card": false,
      "background_color": "#b61924",
      "background_image": "",
      "background_position": "50% 50%",
      "background_repeat": "no-repeat",
      "background_size": "cover"
    }
  }

);


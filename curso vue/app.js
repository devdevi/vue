Vue.component(`movie-card`, {
    props: ["img", "title"],
    template: `
    <div>
    <img  width="100" :src="img" :alt="title">
    <h2>{{title}}</h2>
</div>
    `
})

const app = new Vue({
    el: `#app`,
    //aqui se va a ejecutar la app
    data: {
        mensaje: `hola vue Js`,
        saludo: `Listado de Peliculas`,
        mostrar: false,
        condicionales: [
            'v-show', 'v-for', 'v-if', 'v-hide'
        ],
        tvshows: [{
                name: `Game of Thrones`,
                seasons: 7
            },
            {
                name: `other movie2`,
                seasons: 5
            },
            {
                name: `other movie 3`,
                seasons: 3
            },
            {
                name: `one movie more 4`,
                seasons: 19
            }
        ],
        movies: [{
                title: "regreso al futuro",
                img: "http://www.apicius.es/wp-content/uploads/2012/07/IMG-20120714-009211.jpg"
            },
            {
                title: "regreso al futuro",
                img: "http://www.apicius.es/wp-content/uploads/2012/07/IMG-20120714-009211.jpg"
            },
            {
                title: "regreso al futuro",
                img: "http://www.apicius.es/wp-content/uploads/2012/07/IMG-20120714-009211.jpg"
            }

        ],
    },

    methods: {
        changeVisibility: function () {
            this.mostrar = !this.mostrar
        }

    },
    template: 
    `<div>
        <movie-card 
        v-for="(movie, index) in movies"
         :title="movie.title"
           :img="movie.img"
           :key="movie.index">
       </movie-card>
       </div>`
    // en la terminal installa
    // SERVE SERVIDOR LOCAL

})
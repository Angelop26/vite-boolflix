import {reactive} from 'vue';

export const store = reactive({
    apiMoviesURL:'https://api.themoviedb.org/3/search/movie',
    apiSeriesURL:'https://api.themoviedb.org/3/search/tv',
    userInput:'',
    movies:[],
    series:[],
    ImgPath:'https://image.tmdb.org/t/p/w342'
})
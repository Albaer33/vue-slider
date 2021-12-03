Vue.config.devtools = true;

const app = new Vue(
    {
        el: '#root',
        data: {
            currentImgCounter: 0,
            slides: [
                {
                    img: 'img/01.jpg',
                    title: 'Svezia',
                    text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.'
                },
                {
                    img: 'img/02.jpg',
                    title: 'Svizzera',
                    text: 'Lorem ipsum'
                },
                {
                    img: 'img/03.jpg',
                    title: 'Gran Bretagna',
                    text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.'
                },
                {
                    img: 'img/04.jpg',
                    title: 'Germania',
                    text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,'
                },
                {
                    img: 'img/05.jpg',
                    title: 'Paradise',
                    text: 'Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,'
                }
            ]
        },
        methods: {
            nextSlide: function() {
                if(this.currentImgCounter < this.slides.length-1){
                    this.currentImgCounter++;
                }
                else {
                    this.currentImgCounter = 0;
                }
            },
            previousSlide: function() {
                if(this.currentImgCounter > 0) {
                    this.currentImgCounter--;
                }
                else {
                    this.currentImgCounter = this.slides.length-1;
                }
            }
        }
    }
);
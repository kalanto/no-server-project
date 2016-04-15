angular.module('noprizeApp').service('noprizeService', function(){

 this.photos = [
 {url: "img/1.jpg"},
 {url: "img/2.jpg"},
 {url: "img/3.jpg"},
 {url: "img/4.jpg"},
 {url: "img/5.jpg"},
 {url: "img/6.jpg"},
 {url: "img/7.jpg"},
 {url: "img/8.jpg"},
 {url: "img/9.jpg"},
 {url: "img/10.jpg"},
 {url: "img/11.jpg"},
 {url: "img/12.jpg"},
 {url: "img/13.jpg"},
 {url: "img/14.jpg"},
 {url: "img/15.jpg"},
 {url: "img/16.jpg"},
 {url: "img/17.jpg"},
 {url: "img/18.jpg"},
 {url: "img/19.jpg"},
 {url: "img/20.jpg"},
 {url: "img/21.jpg"},
 {url: "img/22.jpg"},
 {url: "img/23.jpg"},
 {url: "img/24.jpg"},
 {url: "img/25.jpg"},
 {url: "img/26.jpg"},
 {url: "img/27.jpg"}
];
this.getPhotos = function(){
   return this.photos;
};
});

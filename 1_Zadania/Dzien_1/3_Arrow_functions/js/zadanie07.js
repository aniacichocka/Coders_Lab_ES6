const App = function() {
  this.websites = ['onet', 'wp', 'facebook'];
  this.links = [];
}


App.prototype.generateLinks = function() {
    this.links = this.websites.map(site => {
         return 'https://' + site + '.com';

    })
    let alinks = $('.menu a');
    // console.log(alinks);

    alinks.each((index, el) => $(el).attr('href', this.links[index]));

}
let app = new App();
app.generateLinks();
console.log(app.links)

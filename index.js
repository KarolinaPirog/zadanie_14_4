var movies = [
    {
      id: 1, 
      title: 'Harry Potter',
      desc: 'film o czarodzieju',
      src: "https://images.pexels.com/photos/395134/pexels-photo-395134.jpeg?auto=compress&cs=tinysrgb&h=350"
    },
    {
      id: 2,
      title: 'Król Lew',
      desc: 'Film o królu sawanny',
      src: "https://images.pexels.com/photos/591216/pexels-photo-591216.jpeg?auto=compress&cs=tinysrgb&h=350"
    },
    {
      id: 3,
      title: 'Shrek',
      desc: 'Film o zielonym ogrze',
      src: "https://images.pexels.com/photos/158780/leaf-nature-green-spring-158780.jpeg?auto=compress&cs=tinysrgb&h=350"

    }
  ];


var Movie = React.createClass({
propTypes: {
movie_id: propTypes.number,
movie_title: propTypes.string,
movie_desc: propTypes.string,
movie_src: propTypes.string,
},

render: function() {
return (
  React.createElement('li', {key: this.props.movie_id}),
        React.createElement('h2', {}, this.props.movie_title),
        React.createElement('p', {}, this.props.movie_desc),
React.createElement('img',{src: this.props.movie_src})
  )
},

});



var MovieTitle = React.createClass({
propTypes: {
movie_title: propTypes.string
},

render: function() {
return (
React.createElement('h2', {}, this.props.movie_title)
)
}

});


var MovieDescription = React.createClass({
propTypes: {
movie_desc: propTypes.string
},

render: function() {
return (
React.createElement('p', {}, this.props.movie_desc)
)
}

});

var MovieList = React.createClass({
propTypes: {
array: propTypes.array
},

render: function() {
return (
React.createElement(Movie, {key: this.props.array.id, this.props.array.title, this.props.array.desc, this.props.array.src},)
)
}

});

var element = React.createElement(MovieList, {array: movies})

ReactDOM.render(element, document.getElementById('app'));
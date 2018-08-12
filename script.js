var movies = [
    {
      id: 1,  
      title: 'Harry Potter',
      desc: 'Film o czarodzieju',
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
		movie: React.PropTypes.object.isRequired,
	},

	render: function() {
		return (
	  		React.createElement('li', {},
        		React.createElement(MovieTitle, {title: this.props.movie.title}, ),
        		React.createElement(MovieDesc, {desc: this.props.movie.desc}, ),
			)
	  	)
	},
});

var MovieList = React.createClass({
	propTypes: {
		moviesArray: React.PropTypes.array.isRequired
	},

	render: function() {
		var moviesElements = this.props.moviesArray.map(function(movie) {
			return React.createElement(Movie, {movie: movie, key: movie.id});
		});
		return (
			React.createElement('div', {},
				React.createElement('h1', {}, 'Lista Filmów'),
				React.createElement('ul', {}, moviesElements)
			)
		);
	}	

});

var MovieTitle = React.createClass({
	propTypes: {
		title: React.PropTypes.string.isRequired,
	},

	render: function() {
		return (
			React.createElement('h2', {}, this.props.title)
		)
	}
})


var MovieDesc = React.createClass({
	propTypes: {
		desc: React.PropTypes.string.isRequired,
	},

	render: function() {
		return (
			React.createElement('p', {}, this.props.desc)
		)
	}
})

var MovieImg = React.createClass({
	propTypes: {
		img: React.PropTypes.object.isRequired,
	},

	render: function() {
		return (
			React.createElement('img', {src: this.props.img} )
		)
	} 
	
})


var element = React.createElement(MovieList, {moviesArray: movies})

ReactDOM.render(element, document.getElementById('app'));
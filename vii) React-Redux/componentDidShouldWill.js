class Numero extends React.Component {
  constructor(props) {
    super(props);
    this.listRef = React.createRef();
  }

  onMove() {
    console.log("Mouse move");
  }

  componentDidMount() {
    console.log("Estoy en el DOM");
    console.log(document.querySelector("#numero"));
    document.title = this.props.numero;
    window.addEventListener("mousemove", this.onMove);
  }

  componentDidUpdate(prevProps, prevState) {
    console.log("Ya me actualicé:", prevProps);
    console.log(document.querySelector("#numero").innerText);
    document.title = this.props.numero;
  }

  shouldComponentUpdate(nextProps, nextState) {
    if (nextProps.numero > 5) {
      return false;
    } else {
      return true;
    }
  }

  componentWillUnmount() {
    console.log("adios!!");
    console.log(document.querySelector("#numero"));
    window.removeEventListener("mousemove", this.onMove);
  }

  render() {
    console.log("renderié!");
    return <div id="numero">{this.props.numero}</div>;
  }
}

//OTRO EJEMPLO:
import React, { Component } from "react";
// import store from '../store.js';
import { increment, decrement, reset } from "../actions/index.js";
import * as actionCreators from "../actions/index.js";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

// Opcción 1:
//  - Valores: Acceder directamente al store desde el componente
//  - Actions: Despachar directo desde el componente

class Counter2 extends Component {
  constructor() {
    super();
    this.state = { count: 0 };
  }

  componentDidMount() {
    this.unsubscribeStore = store.subscribe(() => {
      this.setState({
        count: store.getState().count,
      });
    });
  }

  componentWillUnmount() {
    this.unsubscribeStore();
  }

  render() {
    return (
      <p>
        Clicked: {this.state.count} times
        <button onClick={() => store.dispatch(increment())}>+</button>
        <button onClick={() => store.dispatch(decrement())}>-</button>
        <button onClick={() => store.dispatch(reset())}>Reset</button>
      </p>
    );
  }
}

//OTRO EJEMPLO:
import React, { Component } from "react";
import store from "../store.js";
import { increment, decrement, reset } from "../actions/index.js";
import * as actionCreators from "../actions/index.js";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

class Counter extends Component {
  constructor() {
    super();
    this.state = { count: 0 };
  }

  componentDidMount() {
    this.unsubscribeStore = store.subscribe(() => {
      this.setState({
        count: store.getState().count,
      });
    });
  }

  componentWillUnmount() {
    this.unsubscribeStore();
  }

  render() {
    return (
      <p>
        Clicked: {this.state.count} times
        <button onClick={() => store.dispatch(increment())}>+</button>
        <button onClick={() => store.dispatch(decrement())}>-</button>
        <button onClick={() => store.dispatch(reset())}>Reset</button>
      </p>
    );
  }
}

// export default Counter;

//OTRO EJEMPLO:
import React from "react";
import { connect } from "react-redux";
import { getMovieDetail } from "../../actions/index";

import "./Movie.css";

class Movie extends React.Component {
  componentDidMount() {
    const id = this.props.match.params.id;
    this.props.getMovieDetail(id);
  }

  render() {
    return this.props.movie ? (
      <div className="movie-detail">
        Detalle de la pelicula
        <h1> {`Title: ${this.props.movie.Title}`}</h1>
        <img alt="img-movie" src={this.props.movie.Poster} />
        <h4> {`Year: ${this.props.movie.Year}`}</h4>
        <h4> {`Type: ${this.props.movie.Type}`}</h4>
        <h4> {`Rated: ${this.props.movie.Rated}`}</h4>
        <h4> {`Released: ${this.props.movie.Released}`}</h4>
        <h4> {`Runtime: ${this.props.movie.Runtime}`}</h4>
        <h4> {`Genre: ${this.props.movie.Genre}`}</h4>
      </div>
    ) : (
      <div> Loading...</div>
    );
  }
}

function mapStateToProps(state) {
  return {
    movie: state.movieDetail,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getMovieDetail: (id) => dispatch(getMovieDetail(id)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Movie);

//OTRO EJEMPLO:
import React from "react";
import { connect } from "react-redux";
import { saveName } from "../actions";

class AppClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "Class",
      width: window.innerWidth,
    };
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleResize = this.handleResize.bind(this);
  }

  componentDidMount() {
    document.title = this.state.name;
    window.addEventListener("resize", this.handleResize);
  }

  componentDidUpdate() {
    document.title = this.state.name;
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.handleResize);
  }

  handleResize() {
    this.setState({
      width: window.innerWidth,
    });
  }

  handleNameChange(e) {
    this.setState({
      name: e.target.value,
    });
  }
  render() {
    return (
      <div className="App">
        <input value={this.state.name} onChange={this.handleNameChange} />
        <div>{this.state.width}</div>
        <button onClick={() => this.props.saveName(this.state.name)}>
          Save Name
        </button>
        <div>{this.props.nameRedux}</div>
      </div>
    );
  }
}

// const mapDispatchToProps = (dispatch) => {
//   return {
//     saveName: (name) => dispatch(saveName(name))
//   }
// }

const mapStateToProps = (state) => {
  return {
    nameRedux: state.name,
  };
};

// export default connect(mapStateToProps, { saveName })(AppClass);


//OTRO EJEMPLO:
import React from 'react';
import { connect } from 'react-redux';
import { getAllCommentsPost } from '../../actions/index';

import './CommentsPost.css';

export class CommentsPost extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    const id = this.props.id
    this.props.getAllCommentsPost(id)
      .then(c => {
        console.log("Comentarios cargados con éxito...")
      })
      .catch(err => console.error(err))

    render() {
      const idPost = this.props.id
      return (
        <div className="details">
          <h4>Comentarios del Post {idPost}</h4>
          {!this.props.commentsPost ? console.log("Espero ...") :
            this.props.commentsPost.map(function (comment) {
              return (
                <div className="container">
                  <p key={comment.id}>
                    <h4>{comment.id} - {comment.name}</h4>
                    {comment.body}
                  </p>
                </div>
              )
            })}
        </div>
      )
    }
  }
}

/*export function mapStateToProps(state) {
  return {
    commentsPost: state.commentsPost,
  };
}

export function mapDispatchToProps(dispatch) {
    return {
        getAllCommentsPost: (id) => dispatch(getAllCommentsPost(id))
    };
  }

  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(CommentsPost );*/
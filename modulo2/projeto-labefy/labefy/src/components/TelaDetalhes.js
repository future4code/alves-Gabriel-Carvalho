import React, { Component } from "react";
import axios from "axios";

export default class TelaDetalhes extends Component {
  state = {
    playlistU: {},
  };

  componentDidMount() {
    this.getPlaylist();
  }
  getPlaylist = () => {
    const url = `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${this.props.id}`;
    axios
      .get(url, {
        headers: {
          Authorization: "gabriel-carvalho-alves",
        },
      })
      .then((res) => this.setState({ playlistU: res.data.result }))
      .catch((err) => console.log(err.message));
  };

  render() {
    console.log(this.state.playlistU);
    return <div>Nome:{this.state.playlistU.name}</div>;
  }
}

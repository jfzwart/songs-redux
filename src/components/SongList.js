import React from 'react';
import { connect } from 'react-redux';

class SongList extends React.Component {
  renderList() {
    return this.props.songs.map((song) => {
      return (
        <div className="item" key={song.item}>
          <div className="right floated content">
            <div className="ui button primary">Select</div>
          </div>
          <div className="content">{song.title}</div>
        </div>
        );
    });
  };

  render() {
    return <div className="ui devided list">{this.renderList()}</div>
  }
};



const mapStateToProps = (state) => {
  return { songs: state.songs };
}

export default connect(mapStateToProps)(SongList);

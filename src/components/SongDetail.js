import React from 'react'
import { connect } from 'react-redux'

const SongDetail = ( { selectedSong } ) => {
  if (!selectedSong) {
    return <div>Select a song!</div>
  }

  return (
  <div className="ui list">
    <div className="item">Title: {selectedSong.title}</div>
    <div className="item">Duration: {selectedSong.duration}</div>
  </div>
  )
};

const mapStateToProps = (state) => {
  return { selectedSong: state.selectedSong };
};

export default connect(mapStateToProps)(SongDetail);

// Design a musical jukebox using object-oriented principles

// The first thing to ask is: What kind of jukebox are we designing?
  // Is this going to be some random jukebox you'd find in someone's house?
  // Is it one that's being used in a restaurant?
  // How technologically advanced should it be?

// For the purposes of this assignment, I'm going to assume it's the kind
// of jukebox like a restaurant would have.

// This jukebox is going to have a library of pre-determined songs
// the ability to add a song to the queue
// the ability to auto-play a song if there are none enqueued
// the ability to de-queue a song once it finishes playing

var Jukebox = function() {
  this.songs = {};
  this.queue = [];
}

Jukebox.prototype.enqueue = function(song) {
  this.queue.push(song);
  if (this.queue.length === 1) {
    this.playNext()
  }
}

Jukebox.prototype.dequeue = function(song) {
  this.queue.shift();
  this.playNext();
}

Jukebox.prototype.playNext = function() {
  this.queue[0].play();
}

var Song = function(name, artist) {
  this.name = name;
  this.artist = artist;
  this.playing = false;
  this.ended = false;
}

Song.prototype.play = function() {
  this.playing = true;
}

Song.prototype.ended = function() {
  this.playing = false;
  this.ended = true;
  this.dequeue();
}
/*
  1. render song
  2. Scroll top
  3. Play / Pause / Seek
  4. CD rotate: quay
  5. Next / prev
  6. Random
  7. Next / Repeat when ended
  8. Active song
  9. Scroll active song into view
  10. Play song when click
*/

const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const playlist = $('.playlist');
const header = $('header h2');
const cdThumb = $('.cd-thumb');
const cd = $('.cd');
const cdWidth = cd.offsetWidth;
const audio = $('#audio');
const player = $('.player');
const play = $('.btn-toggle-play');
const nextbtn = $('.btn-next');
const prevbtn = $('.btn-prev');
const random = $('.btn-random');
const progress = $('#progress');
const repeat = $('.btn-repeat');

var a = 0 , b = 0;

const apiSongs = 'http://localhost:3000/musics'

getList(playList)

function getList(callback) {
  fetch (apiSongs)
    .then(function(response) {
      return response.json()
    })
    .then(callback)
    .catch(function(err) {
      console.log('Loi', err)
    })
}
function playList(listSong) {
  const app = {
    currentIndex: 0,
    isplaying: false,
    isRandom: false,
    isRepeat: false,
    songs: listSong,
    defineProperties: function() {
      Object.defineProperty(this , 'currentsong' , {
        get: function() {
          return this.songs[this.currentIndex];
        }
      })
    },
    render: function() {
      const htmls = this.songs.map((song , index) => {
        return `
          <div class = "song ${index === this.currentIndex ? 'active' : ''}" data-index = ${index}>
              <div class = "thumb"
                  style = "background-image: url('${song.image}')">
              </div>
              <div class = "body">
                  <h3 class = "title">${song.name}</h3>
                  <p class = "author">${song.singer}</p>
              </div>
              <div class = "option">
                <i class = "fas fa-ellipsis-h"></i>
              </div>
          </div>
        `
      })
      playlist.innerHTML = htmls.join('');
    },
    cdplaying: function() {
      if (this.isplaying) {
        audio.play();
      }
      else {
        audio.pause();
      }
    },
    handleEvent: function() {
      const _this = this;
      document.onscroll = function() {
        const scrolltop = window.scrollY || document.documentElement.scrollTop;
        const newWidth = cdWidth - scrolltop;
        cd.style.width = newWidth > 0 ? newWidth + 'px' : 0;
      }
      play.onclick = function() {
        _this.isplaying = !_this.isplaying;
        player.classList.toggle('playing' , _this.isplaying);
        if (_this.isplaying) {
          audio.play();
          cdAnimate.play();
        }
        else {
          audio.pause();
          cdAnimate.pause();
        }
      }
      const cdAnimate = cdThumb.animate([
        {transform: 'rotate(360deg)'}
      ], {
        duration: 10000,
        iterations: Infinity
      });
      cdAnimate.pause();
      nextbtn.onclick = function() {
        if (_this.isRandom) {
          _this.random();
        }
        else {
          _this.nextsong();
        }
        _this.cdplaying();
      }
      prevbtn.onclick = function() {
        if (_this.isRandom) {
          _this.random();
        }
        else {
          _this.prevsong();
        }
        _this.cdplaying();
      }
      random.onclick = function() {
        _this.isRandom = !_this.isRandom;
        a = 1 , b = 0;
        this.classList.toggle('active' , _this.isRandom);
      }
      audio.ontimeupdate = function() {
        if (audio.duration) {
          progress.value = Math.floor(audio.currentTime / audio.duration * 100);
        }
      }
      progress.oninput = function(e) {
        audio.currentTime = (e.target.value) / 100 * audio.duration;
      }
      repeat.onclick = function() {
        _this.isRepeat = !_this.isRepeat;
        a = 0 , b = 1;
        this.classList.toggle('active' , _this.isRepeat);
      }
      audio.onended = function() {
        if (_this.isRandom && !_this.isRepeat) {
          _this.random();
          audio.play();
        }
        else if (!_this.isRandom && _this.isRepeat) {
          audio.play();
        }
        else if(_this.isRandom && _this.isRepeat) {
          if (a > b) {
            _this.random();
            audio.play();
          } 
          else {
            audio.play();
          }
        }
        else {
          _this.nextsong();
          audio.play();
        }
      }
      player.onclick = function(e) {
        const nodeSong = e.target.closest('.song:not(.active)');
        if (nodeSong || e.target.closest('.option')) {
          _this.currentIndex = nodeSong.dataset.index;
          _this.loadCurrentsong();
          audio.play();
        }
        
      }
    },
    loadCurrentsong: function() {
      header.textContent = this.currentsong.name;
      cdThumb.style.backgroundImage = `url('${this.currentsong.image}')`;
      audio.src = this.currentsong.path;
    },
    random: function() {
      let newIndex;
      do {
        newIndex = Math.floor(Math.random() * this.songs.length);
      } while(newIndex === this.currentIndex);
      this.currentIndex = newIndex;
      this.loadCurrentsong();
    },
    nextsong: function() {
      this.currentIndex++;
        if (this.currentIndex === this.songs.length) {
          this.currentIndex = 0;
        }
      this.loadCurrentsong();
    },
    prevsong: function() {
      this.currentIndex--;
        if (this.currentIndex < 0) {
           this.currentIndex = this.songs.length - 1;
        }
      this.loadCurrentsong();
    },
    scrollActivesong: function() {
      setTimeout(function() {
        $('.song.active').scrollIntoView({
          behavior: 'smooth',
          block: 'nearest'
        })
      } , 300);
    },
    activeCard: function() {
      const _this = this;
      let allCard = $$('.song');
      audio.oncanplay = function() {
        $('.song.active').classList.remove('active');
        allCard[_this.currentIndex].classList.add('active');
        _this.scrollActivesong();
      }
    },
    start: function() {
      this.render();
      this.defineProperties();
      this.loadCurrentsong();
      this.handleEvent();
      this.activeCard();
    }
  }
  app.start();
}
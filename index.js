// const $ = document.querySelector.bind(document);
// const $$ = document.querySelectorAll.bind(document);

// const PlAYER_STORAGE_KEY = "F8_PLAYER";

// const player = $(".player");
// const cd = $(".cd");
// const heading = $("header h2");
// const cdThumb = $(".cd-thumb");
// const audio = $("#audio");
// const playBtn = $(".btn-toggle-play");
// const progress = $("#progress");
// const prevBtn = $(".btn-prev");
// const nextBtn = $(".btn-next");
// const randomBtn = $(".btn-random");
// const repeatBtn = $(".btn-repeat");
// const playlist = $(".playlist");

// const app = {
//   currentIndex: 0,
//   isPlaying: false,
//   isRandom: false,
//   isRepeat: false,
//   config: {},
//   // (1/2) Uncomment the line below to use localStorage
//   // config: JSON.parse(localStorage.getItem(PlAYER_STORAGE_KEY)) || {},
//   songs: [
//     {
//       name: "Hôm nay em cưới rồi",
//       singer: "Khải Đăng",
//       path: "https://c1-ex-swe.nixcdn.com/NhacCuaTui1007/HomNayEmCuoiRoiLive-KhaiDang-6847347.mp3?st=ePKF8dZ4YoyPhqmXu7Iu9g&e=1653817937&t=1653731534284",
//       image: "https://i.ytimg.com/vi/NuWAl7-Vkwk/maxresdefault.jpg"
//     },
//     {
//       name: "Suốt đời không xứng",
//       singer: "Khải Đăng",
//       path: "https://c1-ex-swe.nixcdn.com/NhacCuaTui1012/SuotDoiKhongXungLofiVersion-KhaiDang-6971212.mp3?st=crzdlU0Ye0G_E-3tmlGL3g&e=1653819551&t=1653733148490",
//       image:
//         "https://i.ytimg.com/vi/jc1hmvbkO6Q/maxresdefault.jpg"
//     },
//     {
//       name: "Lỗi duyên trời",
//       singer: "Khải Đăng",
//       path:
//         "https://c1-ex-swe.nixcdn.com/NhacCuaTui999/LoiDuyenTroi-KhaiDang-6287638.mp3?st=HZbGVAfGuPpbTXGyvvJwDg&e=1653819707&t=1653733304234",
//       image: "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/cover/b/d/1/b/bd1b2706ab092342b7fe8ca475fb5610.jpg"
//     },
//     {
//       name: "Phản bội chính mình",
//       singer: "Quân AP x Vương Anh Tú",
//       path: "https://c1-ex-swe.nixcdn.com/NhacCuaTui1027/PhanBoiChinhMinh-QuanAPVuongAnhTu-7198436.mp3?st=6GysfI8wNNXh1qJ9kWKecw&e=1653819784&t=1653733381795",
//       image:
//         "https://images.genius.com/a4e281132e5beb2fdaeb6f7dbbf51046.500x500x1.jpg"
//     },
//     {
//       name: "Điều khác lạ (remix)",
//       singer: "Đạt G x Ngọc Halley x Masew",
//       path: "https://c1-ex-swe.nixcdn.com/NhacCuaTui954/DieuKhacLaMasewMix-DatGNgocHaleyyMasew-5189730.mp3?st=vH_CYxe4OGP8HMijkhnxjw&e=1653819917&t=1653733514194",
//       image:
//         "https://i.ytimg.com/vi/jRPjLb3ZjCo/maxresdefault.jpg"
//     },
//     {
//       name: "Khi em lớn (remix)",
//       singer: "Orange x Hoàng Dũng",
//       path:
//         "https://c1-ex-swe.nixcdn.com/NhacCuaTui1015/KhiEmLonFrexsRemix-OrangeHoangDungTheVoice-7013734.mp3?st=kQPrgidVlijzP2sp1EpjCg&e=1653820097&t=1653733696968",
//       image:
//         "https://i1.sndcdn.com/artworks-5jiA2KkUhcXSSux9-vEt7xA-t500x500.jpg"
//     },
//     {
//       name: "Em hát ai nghe",
//       singer: "Orange x Freak D",
//       path: "https://c1-ex-swe.nixcdn.com/NhacCuaTui1020/EmHatAiNgheLofiVersion-OrangeFreakD-7074146.mp3?st=ZO6r6-iK2T2RX8dNCp6usA&e=1653820239&t=1653733836349",
//       image:
//         "https://i.ytimg.com/vi/wssbBe_t-r4/maxresdefault.jpg"
//     }
//   ],
//   setConfig: function (key, value) {
//     this.config[key] = value;
//     // (2/2) Uncomment the line below to use localStorage
//     // localStorage.setItem(PlAYER_STORAGE_KEY, JSON.stringify(this.config));
//   },
//   render: function () {
//     const htmls = this.songs.map((song, index) => {
//       return `
//                         <div class="song ${
//                           index === this.currentIndex ? "active" : ""
//                         }" data-index="${index}">
//                             <div class="thumb"
//                                 style="background-image: url('${song.image}')">
//                             </div>
//                             <div class="body">
//                                 <h3 class="title">${song.name}</h3>
//                                 <p class="author">${song.singer}</p>
//                             </div>
//                             <div class="option">
//                                 <i class="fas fa-ellipsis-h"></i>
//                             </div>
//                         </div>
//                     `;
//     });
//     playlist.innerHTML = htmls.join("");
//   },
//   defineProperties: function () {
//     Object.defineProperty(this, "currentSong", {
//       get: function () {
//         return this.songs[this.currentIndex];
//       }
//     });
//   },
//   handleEvents: function () {
//     const _this = this;
//     const cdWidth = cd.offsetWidth;

//     // Xử lý CD quay / dừng
//     // Handle CD spins / stops
//     const cdThumbAnimate = cdThumb.animate([{ transform: "rotate(360deg)" }], {
//       duration: 10000, // 10 seconds
//       iterations: Infinity
//     });
//     cdThumbAnimate.pause();

//     // Xử lý phóng to / thu nhỏ CD
//     // Handles CD enlargement / reduction
//     document.onscroll = function () {
//       const scrollTop = window.scrollY || document.documentElement.scrollTop;
//       const newCdWidth = cdWidth - scrollTop;

//       cd.style.width = newCdWidth > 0 ? newCdWidth + "px" : 0;
//       cd.style.opacity = newCdWidth / cdWidth;
//     };

//     // Xử lý khi click play
//     // Handle when click play
//     playBtn.onclick = function () {
//       if (_this.isPlaying) {
//         audio.pause();
//       } else {
//         audio.play();
//       }
//     };

//     // Khi song được play
//     // When the song is played
//     audio.onplay = function () {
//       _this.isPlaying = true;
//       player.classList.add("playing");
//       cdThumbAnimate.play();
//     };

//     // Khi song bị pause
//     // When the song is pause
//     audio.onpause = function () {
//       _this.isPlaying = false;
//       player.classList.remove("playing");
//       cdThumbAnimate.pause();
//     };

//     // Khi tiến độ bài hát thay đổi
//     // When the song progress changes
//     audio.ontimeupdate = function () {
//       if (audio.duration) {
//         const progressPercent = Math.floor(
//           (audio.currentTime / audio.duration) * 100
//         );
//         progress.value = progressPercent;
//       }
//     };

//     // Xử lý khi tua song
//     // Handling when seek
//     progress.onchange = function (e) {
//       const seekTime = (audio.duration / 100) * e.target.value;
//       audio.currentTime = seekTime;
//     };

//     // Khi next song
//     // When next song
//     nextBtn.onclick = function () {
//       if (_this.isRandom) {
//         _this.playRandomSong();
//       } else {
//         _this.nextSong();
//       }
//       audio.play();
//       _this.render();
//       _this.scrollToActiveSong();
//     };

//     // Khi prev song
//     // When prev song
//     prevBtn.onclick = function () {
//       if (_this.isRandom) {
//         _this.playRandomSong();
//       } else {
//         _this.prevSong();
//       }
//       audio.play();
//       _this.render();
//       _this.scrollToActiveSong();
//     };

//     // Xử lý bật / tắt random song
//     // Handling on / off random song
//     randomBtn.onclick = function (e) {
//       _this.isRandom = !_this.isRandom;
//       _this.setConfig("isRandom", _this.isRandom);
//       randomBtn.classList.toggle("active", _this.isRandom);
//     };

//     // Xử lý lặp lại một song
//     // Single-parallel repeat processing
//     repeatBtn.onclick = function (e) {
//       _this.isRepeat = !_this.isRepeat;
//       _this.setConfig("isRepeat", _this.isRepeat);
//       repeatBtn.classList.toggle("active", _this.isRepeat);
//     };

//     // Xử lý next song khi audio ended
//     // Handle next song when audio ended
//     audio.onended = function () {
//       if (_this.isRepeat) {
//         audio.play();
//       } else {
//         nextBtn.click();
//       }
//     };

//     // Lắng nghe hành vi click vào playlist
//     // Listen to playlist clicks
//     playlist.onclick = function (e) {
//       const songNode = e.target.closest(".song:not(.active)");

//       if (songNode || e.target.closest(".option")) {
//         // Xử lý khi click vào song
//         // Handle when clicking on the song
//         if (songNode) {
//           _this.currentIndex = Number(songNode.dataset.index);
//           _this.loadCurrentSong();
//           _this.render();
//           audio.play();
//         }

//         // Xử lý khi click vào song option
//         // Handle when clicking on the song option
//         if (e.target.closest(".option")) {
//         }
//       }
//     };
//   },
//   scrollToActiveSong: function () {
//     setTimeout(() => {
//       $(".song.active").scrollIntoView({
//         behavior: "smooth",
//         block: "nearest"
//       });
//     }, 300);
//   },
//   loadCurrentSong: function () {
//     heading.textContent = this.currentSong.name;
//     cdThumb.style.backgroundImage = `url('${this.currentSong.image}')`;
//     audio.src = this.currentSong.path;
//   },
//   loadConfig: function () {
//     this.isRandom = this.config.isRandom;
//     this.isRepeat = this.config.isRepeat;
//   },
//   nextSong: function () {
//     this.currentIndex++;
//     if (this.currentIndex >= this.songs.length) {
//       this.currentIndex = 0;
//     }
//     this.loadCurrentSong();
//   },
//   prevSong: function () {
//     this.currentIndex--;
//     if (this.currentIndex < 0) {
//       this.currentIndex = this.songs.length - 1;
//     }
//     this.loadCurrentSong();
//   },
//   playRandomSong: function () {
//     let newIndex;
//     do {
//       newIndex = Math.floor(Math.random() * this.songs.length);
//     } while (newIndex === this.currentIndex);

//     this.currentIndex = newIndex;
//     this.loadCurrentSong();
//   },
//   start: function () {
//     // Gán cấu hình từ config vào ứng dụng
//     // Assign configuration from config to application
//     this.loadConfig();

//     // Định nghĩa các thuộc tính cho object
//     // Defines properties for the object
//     this.defineProperties();

//     // Lắng nghe / xử lý các sự kiện (DOM events)
//     // Listening / handling events (DOM events)
//     this.handleEvents();

//     // Tải thông tin bài hát đầu tiên vào UI khi chạy ứng dụng
//     // Load the first song information into the UI when running the app
//     this.loadCurrentSong();

//     // Render playlist
//     this.render();

//     // Hiển thị trạng thái ban đầu của button repeat & random
//     // Display the initial state of the repeat & random button
//     randomBtn.classList.toggle("active", this.isRandom);
//     repeatBtn.classList.toggle("active", this.isRepeat);
//   }
// };

// app.start();

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
const cd = $('.cd');
const cdWidth = cd.offsetWidth;
const heading = $('header h2');
const cdThumb = $('.cd-thumb');
const audio = $('#audio');
const playBtn = $('.btn-toggle-play');
const player = $('.player');
const progress = $('#progress');
const btnNext = $('.btn-next');
const btnPrev = $('.btn-prev');
const btnRandom = $('.btn-random');
const btnRepeat = $('.btn-repeat');
const listSong = $$('.song');
console.log([listSong]);

var a = 0, b = 0;
const app = {
  currentIndex: 0,
  isPlaying: false,
  isRandom: false,
  isRepeat: false,
  songs: [
    {
      name: "Hôm nay em cưới rồi",
      singer: "Khải Đăng",
      path: "https://c1-ex-swe.nixcdn.com/NhacCuaTui1007/HomNayEmCuoiRoiLive-KhaiDang-6847347.mp3?st=ePKF8dZ4YoyPhqmXu7Iu9g&e=1653817937&t=1653731534284",
      image: "https://i.ytimg.com/vi/NuWAl7-Vkwk/maxresdefault.jpg"
    },
    {
      name: "Suốt đời không xứng",
      singer: "Khải Đăng",
      path: "https://c1-ex-swe.nixcdn.com/NhacCuaTui1012/SuotDoiKhongXungLofiVersion-KhaiDang-6971212.mp3?st=crzdlU0Ye0G_E-3tmlGL3g&e=1653819551&t=1653733148490",
      image:
        "https://i.ytimg.com/vi/jc1hmvbkO6Q/maxresdefault.jpg"
    },
    {
      name: "Lỗi duyên trời",
      singer: "Khải Đăng",
      path:
        "https://c1-ex-swe.nixcdn.com/NhacCuaTui999/LoiDuyenTroi-KhaiDang-6287638.mp3?st=HZbGVAfGuPpbTXGyvvJwDg&e=1653819707&t=1653733304234",
      image: "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/cover/b/d/1/b/bd1b2706ab092342b7fe8ca475fb5610.jpg"
    },
    {
      name: "Phản bội chính mình",
      singer: "Quân AP x Vương Anh Tú",
      path: "https://c1-ex-swe.nixcdn.com/NhacCuaTui1027/PhanBoiChinhMinh-QuanAPVuongAnhTu-7198436.mp3?st=6GysfI8wNNXh1qJ9kWKecw&e=1653819784&t=1653733381795",
      image:
        "https://images.genius.com/a4e281132e5beb2fdaeb6f7dbbf51046.500x500x1.jpg"
    },
    {
      name: "Điều khác lạ (remix)",
      singer: "Đạt G x Ngọc Halley x Masew",
      path: "https://c1-ex-swe.nixcdn.com/NhacCuaTui954/DieuKhacLaMasewMix-DatGNgocHaleyyMasew-5189730.mp3?st=vH_CYxe4OGP8HMijkhnxjw&e=1653819917&t=1653733514194",
      image:
        "https://i.ytimg.com/vi/jRPjLb3ZjCo/maxresdefault.jpg"
    },
    {
      name: "Khi em lớn (remix)",
      singer: "Orange x Hoàng Dũng",
      path:
        "https://c1-ex-swe.nixcdn.com/NhacCuaTui1015/KhiEmLonFrexsRemix-OrangeHoangDungTheVoice-7013734.mp3?st=kQPrgidVlijzP2sp1EpjCg&e=1653820097&t=1653733696968",
      image:
        "https://i1.sndcdn.com/artworks-5jiA2KkUhcXSSux9-vEt7xA-t500x500.jpg"
    },
    {
      name: "Em hát ai nghe",
      singer: "Orange x Freak D",
      path: "https://c1-ex-swe.nixcdn.com/NhacCuaTui1020/EmHatAiNgheLofiVersion-OrangeFreakD-7074146.mp3?st=ZO6r6-iK2T2RX8dNCp6usA&e=1653820239&t=1653733836349",
      image:
        "https://i.ytimg.com/vi/wssbBe_t-r4/maxresdefault.jpg"
    }
  ],
  activeCard: function() {
    const _this = this;
    let card = $$('.song');
    audio.oncanplay = function() {
      $('.song.active').classList.remove('active');
      card[_this.currentIndex].classList.add('active');
      _this.scrollToActiveSong();
    }
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
// Hàm định nghĩa thuộc tính
  defineProperties: function() {
    Object.defineProperty(this , 'currentSong' , {
      get: function() {
        return this.songs[this.currentIndex];
      }
    })
  },
  // hàm xử lý sự kiện
  handleEvent: function() {
    const _this = this;
    // xử lý khi phòng to / thu nhỏ CD
    document.onscroll = function() {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      const newCdWidth = cdWidth - scrollTop;
      cd.style.width = newCdWidth > 0 ? newCdWidth + 'px' : 0;
      cd.style.opacity = newCdWidth / cdWidth;
    }
    // xử lý khi click play
    playBtn.onclick = function() {
      if (_this.isPlaying) {
        audio.pause();
      }
      else {
        audio.play();
      }
    };
      // khi song dc play
      audio.onplay = function() {
        _this.isPlaying = true;
        player.classList.add('playing');
        cdthumbAnimate.play();
      }
      // khi song bi pause
      audio.onpause = function() {
        _this.isPlaying = false;
        player.classList.remove('playing');
        cdthumbAnimate.pause();
      }
      // KHi tiến độ bài hát thay đổi
      audio.ontimeupdate = function() {
        if (audio.duration) {
          const progressPercent = Math.floor(audio.currentTime / audio.duration * 100);
          progress.value = progressPercent;
        }
      }
      // Xử lý khi tua song
    progress.oninput = function(e) {
      const seek = (e.target.value / 100) * audio.duration;
      audio.currentTime = seek;
    }
      // xử lí cd quay / dừng
      const cdthumbAnimate = cdThumb.animate([
        { transform: 'rotate(360deg)'}
      ] , {
        duration: 10000, // 10 giay
        iterations: Infinity
      });
      cdthumbAnimate.pause();
      // xử lí khi bật random song
      btnRandom.onclick = function() {
        _this.isRandom = !_this.isRandom;
        if (_this.isRandom) {
          a = 1; b = 0;
        }
        this.classList.toggle('active' , _this.isRandom);
      }
      // xử lí khi bật repeat song
      btnRepeat.onclick = function() {
        _this.isRepeat = !_this.isRepeat;
        if (_this.isRepeat) {
          b = 1 ; a = 0;
        }
        this.classList.toggle('active' , _this.isRepeat);
      }
      // xử lí khi next song
      btnNext.onclick = function() {
        if (_this.isRandom) {
          _this.randomSongs();
        }
        else {
          _this.nextsongs();
        }
        audio.play();
      }
      // xử lí khi prev song
      btnPrev.onclick = function() {
        if (_this.isRandom) {
          _this.randomSongs(); 
        }
        else {
          _this.prevsongs();
        }
        audio.play();
      }
      // xử lí next khi end song
      audio.onended = function() {
        if (_this.isRandom && !_this.isRepeat) {
          _this.randomSongs();
          audio.play();
        }
        else if (_this.isRepeat && !_this.isRandom) {
          audio.play();
        }
        else if (_this.isRandom && _this.isRepeat) {
          if (a > b) {
            _this.randomSongs();
            audio.play();
          }
          else {
            audio.play();
          }
        }
        else {
          _this.nextsongs();
          audio.play();
        }
      }
      // Xử lí kick card
      playlist.onclick = function(e) {
        const nodesong = e.target.closest(".song:not(.active)")
        if(nodesong || e.target.closest(".option")) {
          if (nodesong) {
            _this.currentIndex = Number(nodesong.dataset.index);
            _this.loadCurrentSong();
            audio.play();
          }
        }
      }
  },
  loadCurrentSong: function(){
    heading.textContent = this.currentSong.name;
    cdThumb.style.backgroundImage = `url('${this.currentSong.image}')`;
    audio.src = this.currentSong.path;
  },
  nextsongs: function() {
    this.currentIndex++;
      if (this.currentIndex === this.songs.length) {
        this.currentIndex = 0;
      }
      this.loadCurrentSong();
  },
  prevsongs: function() {
    this.currentIndex--;
      if (this.currentIndex < 0) {
        this.currentIndex = this.songs.length - 1;
      }
      this.loadCurrentSong();
  },
  randomSongs: function() {
    let newIndex;
    do {
      newIndex = Math.floor(Math.random() * this.songs.length);
    } while (newIndex === this.currentIndex);
    this.currentIndex = newIndex;
    this.loadCurrentSong();
  },
  scrollToActiveSong: function() {
    setTimeout(() => {
      $('.song.active').scrollIntoView({
        behavior: 'smooth',
        block: 'nearest'
      });
    }, 300);
  },
  start: function() {
    // Định nghĩa các thuộc tính cho object
    this.defineProperties();
    // Lắng nghe / xử lý các sự kiện (DOM events)
    this.handleEvent();
    // tải thông tin bài hát đầu tiên vào UI khi chạy ứng dụng
    this.loadCurrentSong();

    // render playlist
    this.render();
    
    this.activeCard();
  }
}


app.start();

let now_playing = document.querySelector('.now-playing');
let track_art = document.querySelector('.track-art');
let track_name = document.querySelector('.track-name');
let track_artist = document.querySelector('.track-artist');

let playpause_btn = document.querySelector('.playpause-track');
let next_btn = document.querySelector('.next-track');
let prev_btn = document.querySelector('.prev-track');

let seek_slider = document.querySelector('.seek_slider');
let volume_slider = document.querySelector('.volume_slider');
let curr_time = document.querySelector('.current-time');
let total_duration = document.querySelector('.total-duration');
let wave = document.getElementById('wave');
let randomIcon = document.querySelector('.fa-random');
let repeatIcon = document.querySelector('.fa-heart');

let curr_track = document.createElement('audio');

let track_index = 0;
let isPlaying = false;
let isRandom = false;
let isRepeat = false;
let updateTimer;

const music_list = 
[
  {
            "artist": "DUCCI",
            "name": "'GOTTA GO'",
            "music": ".\/libary\/'GOTTA GO'.mp3",
            "img": "http://izaass.github.io/music/libary/img/'GOTTA GO'.jpg"
        },
        {
            "artist": "MCK ft TLinh",
            "name": "'Nếu lúc đó', 'Anh đã ổn hơn'",
            "music": ".\/libary\/'Nếu lúc đó', 'Anh đã ổn hơn'.mp3",
            "img": "http://izaass.github.io/music/libary/img/'Nếu lúc đó', 'Anh đã ổn hơn'.jpg"
        },
        {
            "artist": "B RAY",
            "name": "1 Vòng Sài Gòn",
            "music": ".\/libary\/1 Vòng Sài Gòn.mp3",
            "img": "http://izaass.github.io/music/libary/img/1 Vòng Sài Gòn.jpg"
        },
        {
            "artist": "PC",
            "name": "10 Ngàn Năm",
            "music": ".\/libary\/10 Ngàn Năm.mp3",
            "img": "http://izaass.github.io/music/libary/img/10 Ngàn Năm.jpg"
        },
        {
            "artist": "Táo",
            "name": "2 5 Remix",
            "music": ".\/libary\/2 5 Remix.mp3",
            "img": "http://izaass.github.io/music/libary/img/2 5 Remix.jpg"
        },
        {
            "artist": "Post Malone",
            "name": "A Thousand Bad Times",
            "music": ".\/libary\/A Thousand Bad Times.mp3",
            "img": "http://izaass.github.io/music/libary/img/A Thousand Bad Times.jpg"
        },
        {
            "artist": "$UICIDEBOY$",
            "name": "AND TO THOSE I LOVE",
            "music": ".\/libary\/AND TO THOSE I LOVE.mp3",
            "img": "http://izaass.github.io/music/libary/img/AND TO THOSE I LOVE.jpg"
        },
        {
            "artist": "Joji",
            "name": "ATTENTION",
            "music": ".\/libary\/ATTENTION.mp3",
            "img": "http://izaass.github.io/music/libary/img/ATTENTION.jpg"
        },
        {
            "artist": "Andree Right Hand",
            "name": "Chơi Như Tụi Mỹ",
            "music": ".\/libary\/Andree Right Hand  Chơi Như Tụi Mỹ.mp3",
            "img": "http://izaass.github.io/music/libary/img/Andree Right Hand  Chơi Như Tụi Mỹ.jpg"
        },
        {
            "artist": "Sol7",
            "name": "Anh Vẫn Còn",
            "music": ".\/libary\/Anh Vẫn Còn.mp3",
            "img": "http://izaass.github.io/music/libary/img/Anh Vẫn Còn.jpg"
        },
        {
            "artist": "Khói",
            "name": "Anh thèm được ngủ",
            "music": ".\/libary\/Anh thèm được ngủ.mp3",
            "img": "http://izaass.github.io/music/libary/img/Anh thèm được ngủ.jpg"
        },
        {
            "artist": "MCK",
            "name": "Anh Đã Ổn Hơn",
            "music": ".\/libary\/Anh Đã Ổn Hơn.mp3",
            "img": "http://izaass.github.io/music/libary/img/Anh Đã Ổn Hơn.jpg"
        },
        {
            "artist": "Travis Scott",
            "name": "Antidote",
            "music": ".\/libary\/Antidote.mp3",
            "img": "http://izaass.github.io/music/libary/img/Antidote.jpg"
        },
        {
            "artist": "Lil Baby",
            "name": "Baby ft Quality Control, DaBaby",
            "music": ".\/libary\/Baby ft Quality Control, DaBaby.mp3",
            "img": "http://izaass.github.io/music/libary/img/Baby ft Quality Control, DaBaby.jpg"
        },
        {
            "artist": "Tommy Tèo",
            "name": "Buông Hàng",
            "music": ".\/libary\/Buông Hàng.mp3",
            "img": "http://izaass.github.io/music/libary/img/Buông Hàng.jpg"
        },
        {
            "artist": "Young H",
            "name": "Bạn Của Tao",
            "music": ".\/libary\/Bạn Của Tao.mp3",
            "img": "http://izaass.github.io/music/libary/img/Bạn Của Tao.jpg"
        },
        {
            "artist": "B RAY",
            "name": "BẢN NHẠC BUỒN",
            "music": ".\/libary\/BẢN NHẠC BUỒN.mp3",
            "img": "http://izaass.github.io/music/libary/img/BẢN NHẠC BUỒN.jpg"
        },
        {
            "artist": "Travis Scott",
            "name": "CAN'T SAY",
            "music": ".\/libary\/CAN'T SAY.mp3",
            "img": "http://izaass.github.io/music/libary/img/CAN'T SAY.jpg"
        },
        {
            "artist": "B RAY",
            "name": "Cho Ba",
            "music": ".\/libary\/Cho Ba.mp3",
            "img": "http://izaass.github.io/music/libary/img/Cho Ba.jpg"
        },
        {
            "artist": "B RAY",
            "name": "Chân Mệnh",
            "music": ".\/libary\/Chân Mệnh.mp3",
            "img": "http://izaass.github.io/music/libary/img/Chân Mệnh.jpg"
        },
        {
            "artist": "MCK",
            "name": "Chìm Sâu",
            "music": ".\/libary\/Chìm Sâu.mp3",
            "img": "http://izaass.github.io/music/libary/img/Chìm Sâu.jpg"
        },
        {
            "artist": "Post Malone",
            "name": "Circles",
            "music": ".\/libary\/Circles.mp3",
            "img": "http://izaass.github.io/music/libary/img/Circles.jpg"
        },
        {
            "artist": "Đen",
            "name": "Co Gai Ban Ben Ft Lynk Lee",
            "music": ".\/libary\/Co Gai Ban Ben Ft Lynk Lee.mp3",
            "img": "http://izaass.github.io/music/libary/img/Co Gai Ban Ben Ft Lynk Lee.jpg"
        },
        {
            "artist": "VSOUL",
            "name": "Cried",
            "music": ".\/libary\/Cried.mp3",
            "img": "http://izaass.github.io/music/libary/img/Cried.jpg"
        },
        {
            "artist": "Khói",
            "name": "Cuộc Gọi Nhỡ ft. Two",
            "music": ".\/libary\/Cuộc Gọi Nhỡ ft. Two.mp3",
            "img": "http://izaass.github.io/music/libary/img/Cuộc Gọi Nhỡ ft. Two.jpg"
        },
        {
            "artist": "HU$TLANG",
            "name": "Cát Chi FREESTYLE",
            "music": ".\/libary\/Cát Chi FREESTYLE.mp3",
            "img": "http://izaass.github.io/music/libary/img/Cát Chi FREESTYLE.jpg"
        },
        {
            "artist": "RPT Orijin",
            "name": "DON'T CÔI",
            "music": ".\/libary\/DON'T CÔI.mp3",
            "img": "http://izaass.github.io/music/libary/img/DON'T CÔI.jpg"
        },
        {
            "artist": "Post Malone",
            "name": "Die For Me",
            "music": ".\/libary\/Die For Me.mp3",
            "img": "http://izaass.github.io/music/libary/img/Die For Me.jpg"
        },
        {
            "artist": "Đen",
            "name": "Diễn viên tồi ft. Thành Bùi, Cadillac",
            "music": ".\/libary\/Diễn viên tồi ft. Thành Bùi, Cadillac.mp3",
            "img": "http://izaass.github.io/music/libary/img/Diễn viên tồi ft. Thành Bùi, Cadillac.jpg"
        },
        {
            "artist": "HU$TLANG",
            "name": "FORREST GUMP REMAKE",
            "music": ".\/libary\/FORREST GUMP REMAKE.mp3",
            "img": "http://izaass.github.io/music/libary/img/FORREST GUMP REMAKE.jpg"
        },
        {
            "artist": "GHOSTEMANE",
            "name": "Fed Up",
            "music": ".\/libary\/Fed Up.mp3",
            "img": "http://izaass.github.io/music/libary/img/Fed Up.jpg"
        },
        {
            "artist": "XXXTENTACION",
            "name": "Fuck Love",
            "music": ".\/libary\/Fuck Love.mp3",
            "img": "http://izaass.github.io/music/libary/img/Fuck Love.jpg"
        },
        {
            "artist": "HIEUTHUHAI",
            "name": "Gernag Freestyle",
            "music": ".\/libary\/Gernag Freestyle.mp3",
            "img": "http://izaass.github.io/music/libary/img/Gernag Freestyle.jpg"
        },
        {
            "artist": "Offset ft Metro Boomin",
            "name": "Ghostface Killers ft. Travis Scott, 21 Savage",
            "music": ".\/libary\/Ghostface Killers ft. Travis Scott, 21 Savage.mp3",
            "img": "http://izaass.github.io/music/libary/img/Ghostface Killers ft. Travis Scott, 21 Savage.jpg"
        },
        {
            "artist": "Dick x Tofu x PC",
            "name": "Ghé Qua",
            "music": ".\/libary\/Ghé Qua.mp3",
            "img": "http://izaass.github.io/music/libary/img/Ghé Qua.jpg"
        },
        {
            "artist": "Joji",
            "name": "Glimpse of Us",
            "music": ".\/libary\/Glimpse of Us.mp3",
            "img": "http://izaass.github.io/music/libary/img/Glimpse of Us.jpg"
        },
        {
            "artist": "Post Malone",
            "name": "Goodbyes",
            "music": ".\/libary\/Goodbyes.mp3",
            "img": "http://izaass.github.io/music/libary/img/Goodbyes.jpg"
        },
        {
            "artist": "Travis Scott",
            "name": "HIGHEST IN THE ROOM (REMIX)",
            "music": ".\/libary\/HIGHEST IN THE ROOM (REMIX).mp3",
            "img": "http://izaass.github.io/music/libary/img/HIGHEST IN THE ROOM (REMIX).jpg"
        },
        {
            "artist": "Travis Scott",
            "name": "HIGHEST IN THE ROOM",
            "music": ".\/libary\/HIGHEST IN THE ROOM.mp3",
            "img": "http://izaass.github.io/music/libary/img/HIGHEST IN THE ROOM.jpg"
        },
        {
            "artist": "Hustlang Robber",
            "name": "HUSTLANG Robber  HIS STORY",
            "music": ".\/libary\/HUSTLANG Robber  HIS STORY.mp3",
            "img": "http://izaass.github.io/music/libary/img/HUSTLANG Robber  HIS STORY.jpg"
        },
        {
            "artist": "Đen",
            "name": "Hai triệu năm ft. Biên",
            "music": ".\/libary\/Hai triệu năm ft. Biên.mp3",
            "img": "http://izaass.github.io/music/libary/img/Hai triệu năm ft. Biên.jpg"
        },
        {
            "artist": "Khói",
            "name": "Hai Đám Mây",
            "music": ".\/libary\/Hai Đám Mây.mp3",
            "img": "http://izaass.github.io/music/libary/img/Hai Đám Mây.jpg"
        },
        {
            "artist": "Cá Hồi Hoang",
            "name": "Hiệu Ứng Trốn Chạy",
            "music": ".\/libary\/Hiệu Ứng Trốn Chạy.mp3",
            "img": "http://izaass.github.io/music/libary/img/Hiệu Ứng Trốn Chạy.jpg"
        },
        {
            "artist": "Post Malone",
            "name": "Hollywood's Bleeding",
            "music": ".\/libary\/Hollywood's Bleeding.mp3",
            "img": "http://izaass.github.io/music/libary/img/Hollywood's Bleeding.jpg"
        },
        {
            "artist": "Hustlang Robber",
            "name": "Có Nhiều Đêm Anh Buồn ft Hustlang Heily",
            "music": ".\/libary\/Hustlang Robber  Có Nhiều Đêm Anh Buồn ft Hustlang Heily.mp3",
            "img": "http://izaass.github.io/music/libary/img/Hustlang Robber  Có Nhiều Đêm Anh Buồn ft Hustlang Heily.jpg"
        },
        {
            "artist": "Trung Tâm Băng Đĩa Lậu Hải Ngoại",
            "name": "IMPHÊTAMIN",
            "music": ".\/libary\/IMPHÊTAMIN.mp3",
            "img": "http://izaass.github.io/music/libary/img/IMPHÊTAMIN.jpg"
        },
        {
            "artist": "B RAY",
            "name": "J Cole Nói",
            "music": ".\/libary\/J Cole Nói.mp3",
            "img": "http://izaass.github.io/music/libary/img/J Cole Nói.jpg"
        },
        {
            "artist": "Khói",
            "name": "Khói - Tháng 9 Của Anh",
            "music": ".\/libary\/Khói - Tháng 9 Của Anh.mp3",
            "img": "http://izaass.github.io/music/libary/img/Khói - Tháng 9 Của Anh.jpg"
        },
        {
            "artist": "HIEUTHUHAI",
            "name": "LAVIAI (REMIX)",
            "music": ".\/libary\/LAVIAI (REMIX).mp3",
            "img": "http://izaass.github.io/music/libary/img/LAVIAI (REMIX).jpg"
        },
        {
            "artist": "keshi",
            "name": "LIMBO",
            "music": ".\/libary\/LIMBO.mp3",
            "img": "http://izaass.github.io/music/libary/img/LIMBO.jpg"
        },
        {
            "artist": "HU$TLANG",
            "name": "LUFFY-19",
            "music": ".\/libary\/LUFFY-19.mp3",
            "img": "http://izaass.github.io/music/libary/img/LUFFY-19.jpg"
        },
        {
            "artist": "Lil Baby",
            "name": "Lemonade",
            "music": ".\/libary\/Lemonade.mp3",
            "img": "http://izaass.github.io/music/libary/img/Lemonade.jpg"
        },
        {
            "artist": "Lil Wuyn",
            "name": "Moment ft Be.A",
            "music": ".\/libary\/Lil Wuyn  BeA  Moment.mp3",
            "img": "http://izaass.github.io/music/libary/img/Lil Wuyn  BeA  Moment.jpg"
        },
        {
            "artist": "Đen x Cheng x Low G",
            "name": "Luôn Yêu Đời",
            "music": ".\/libary\/Luôn Yêu Đời.mp3",
            "img": "http://izaass.github.io/music/libary/img/Luôn Yêu Đời.jpg"
        },
        {
            "artist": "Đen",
            "name": "Lối Nhỏ ft. Phương Anh Đào",
            "music": ".\/libary\/Lối Nhỏ ft. Phương Anh Đào.mp3",
            "img": "http://izaass.github.io/music/libary/img/Lối Nhỏ ft. Phương Anh Đào.jpg"
        },
        {
            "artist": "Đen",
            "name": "Lộn Xộn ll",
            "music": ".\/libary\/Lộn Xộn ll.mp3",
            "img": "http://izaass.github.io/music/libary/img/Lộn Xộn ll.jpg"
        },
        {
            "artist": "Trung Tâm Băng Đĩa Lậu Hải Ngoại",
            "name": "Mai",
            "music": ".\/libary\/Mai.mp3",
            "img": "http://izaass.github.io/music/libary/img/Mai.jpg"
        },
        {
            "artist": "GHOSTEMANE",
            "name": "Mercury Retrograde",
            "music": ".\/libary\/Mercury Retrograde.mp3",
            "img": "http://izaass.github.io/music/libary/img/Mercury Retrograde.jpg"
        },
        {
            "artist": "Shack Wes",
            "name": "Mo bamba",
            "music": ".\/libary\/Mo bamba.mp3",
            "img": "http://izaass.github.io/music/libary/img/Mo bamba.jpg"
        },
        {
            "artist": "Go-Jo",
            "name": "Mrs. Hollywood",
            "music": ".\/libary\/Mrs. Hollywood.mp3",
            "img": "http://izaass.github.io/music/libary/img/Mrs. Hollywood.jpg"
        },
        {
            "artist": "B RAY",
            "name": "MÁCH BẢO",
            "music": ".\/libary\/MÁCH BẢO.mp3",
            "img": "http://izaass.github.io/music/libary/img/MÁCH BẢO.jpg"
        },
        {
            "artist": "Đen",
            "name": "Mơ ft. Hậu Vi",
            "music": ".\/libary\/Mơ ft. Hậu Vi.mp3",
            "img": "http://izaass.github.io/music/libary/img/Mơ ft. Hậu Vi.jpg"
        },
        {
            "artist": "Đen",
            "name": "Mưa Trên Những Mái Tôn ft. Kaang",
            "music": ".\/libary\/Mưa Trên Những Mái Tôn ft. Kaang.mp3",
            "img": "http://izaass.github.io/music/libary/img/Mưa Trên Những Mái Tôn ft. Kaang.jpg"
        },
        {
            "artist": "DatManiac",
            "name": "MẤY CON MÈO",
            "music": ".\/libary\/MẤY CON MÈO.mp3",
            "img": "http://izaass.github.io/music/libary/img/MẤY CON MÈO.jpg"
        },
        {
            "artist": "Đen",
            "name": "Một triệu like ft. Thành Đồng",
            "music": ".\/libary\/Một triệu like ft. Thành Đồng.mp3",
            "img": "http://izaass.github.io/music/libary/img/Một triệu like ft. Thành Đồng.jpg"
        },
        {
            "artist": "Remix",
            "name": "NAL Thôi em về đi,đi theo người đi, người ta xứng đáng hơn anh nhiề",
            "music": ".\/libary\/NAL Thôi em về đi,đi theo người đi, người ta xứng đáng hơn anh nhiề.mp3",
            "img": "http://izaass.github.io/music/libary/img/NAL Thôi em về đi,đi theo người đi, người ta xứng đáng hơn anh nhiề.jpg"
        },
        {
            "artist": "VSOUL",
            "name": "NGTANOSE",
            "music": ".\/libary\/NGTANOSE.mp3",
            "img": "http://izaass.github.io/music/libary/img/NGTANOSE.jpg"
        },
        {
            "artist": "Rapital",
            "name": "NGỦ TRONG PHÒNG THU REMIX",
            "music": ".\/libary\/NGỦ TRONG PHÒNG THU REMIX.mp3",
            "img": "http://izaass.github.io/music/libary/img/NGỦ TRONG PHÒNG THU REMIX.jpg"
        },
        {
            "artist": "HIEUTHUHAI",
            "name": "Ngủ Một Mình (tình Rất Tình) Ft. Negav",
            "music": ".\/libary\/Ngủ Một Mình (tình Rất Tình) Ft. Negav.mp3",
            "img": "http://izaass.github.io/music/libary/img/Ngủ Một Mình (tình Rất Tình) Ft. Negav.jpg"
        },
        {
            "artist": "PC",
            "name": "Như Anh Mơ",
            "music": ".\/libary\/Như Anh Mơ.mp3",
            "img": "http://izaass.github.io/music/libary/img/Như Anh Mơ.jpg"
        },
        {
            "artist": "Offset ft Metro Boomin",
            "name": "Nightmare",
            "music": ".\/libary\/Nightmare.mp3",
            "img": "http://izaass.github.io/music/libary/img/Nightmare.jpg"
        },
        {
            "artist": "Hoài Lâm ft Binz",
            "name": "Nếu Như Là Định Mệnh",
            "music": ".\/libary\/Nếu Như Là Định Mệnh.mp3",
            "img": "http://izaass.github.io/music/libary/img/Nếu Như Là Định Mệnh.jpg"
        },
        {
            "artist": "Travis Scott",
            "name": "OUT WEST ft. Young Thug, JACKBOYS",
            "music": ".\/libary\/OUT WEST ft. Young Thug, JACKBOYS.mp3",
            "img": "http://izaass.github.io/music/libary/img/OUT WEST ft. Young Thug, JACKBOYS.jpg"
        },
        {
            "artist": "Post Malone",
            "name": "On The Road",
            "music": ".\/libary\/On The Road.mp3",
            "img": "http://izaass.github.io/music/libary/img/On The Road.jpg"
        },
        {
            "artist": "TVK",
            "name": "Phận Tàn",
            "music": ".\/libary\/Phận Tàn.mp3",
            "img": "http://izaass.github.io/music/libary/img/Phận Tàn.jpg"
        },
        {
            "artist": "Lil Baby",
            "name": "Pop Out Again Polo G ft. Gunna",
            "music": ".\/libary\/Pop Out Again Polo G ft. Gunna.mp3",
            "img": "http://izaass.github.io/music/libary/img/Pop Out Again Polo G ft. Gunna.jpg"
        },
        {
            "artist": "AAP Rocky",
            "name": "Praise The Lord ft. Skepta",
            "music": ".\/libary\/Praise The Lord ft. Skepta.mp3",
            "img": "http://izaass.github.io/music/libary/img/Praise The Lord ft. Skepta.jpg"
        },
        {
            "artist": "Lil Baby",
            "name": "Pure Cocaine",
            "music": ".\/libary\/Pure Cocaine.mp3",
            "img": "http://izaass.github.io/music/libary/img/Pure Cocaine.jpg"
        },
        {
            "artist": "OCEAN M.O.B",
            "name": "RAP CHO ANH EM",
            "music": ".\/libary\/RAP CHO ANH EM.mp3",
            "img": "http://izaass.github.io/music/libary/img/RAP CHO ANH EM.jpg"
        },
        {
            "artist": "Rapital",
            "name": "RAPITALIVE - RAPITALOUD EP",
            "music": ".\/libary\/RAPITALIVE - RAPITALOUD EP.mp3",
            "img": "http://izaass.github.io/music/libary/img/RAPITALIVE - RAPITALOUD EP.jpg"
        },
        {
            "artist": "NAOMI Ft WEAN",
            "name": "RETROGRADE",
            "music": ".\/libary\/RETROGRADE.mp3",
            "img": "http://izaass.github.io/music/libary/img/RETROGRADE.jpg"
        },
        {
            "artist": "Rapital",
            "name": "Rap Chậm Thôi",
            "music": ".\/libary\/Rap Chậm Thôi.mp3",
            "img": "http://izaass.github.io/music/libary/img/Rap Chậm Thôi.jpg"
        },
        {
            "artist": "The Weeknd",
            "name": "Reminder Remix Audio ft AAP Rocky  Young Thug",
            "music": ".\/libary\/Reminder Remix Audio ft AAP Rocky  Young Thug.mp3",
            "img": "http://izaass.github.io/music/libary/img/Reminder Remix Audio ft AAP Rocky  Young Thug.jpg"
        },
        {
            "artist": "Offset ft Metro Boomin",
            "name": "Ric Flair Drip",
            "music": ".\/libary\/Ric Flair Drip.mp3",
            "img": "http://izaass.github.io/music/libary/img/Ric Flair Drip.jpg"
        },
        {
            "artist": "Post Malone",
            "name": "Rockstar",
            "music": ".\/libary\/Rockstar.mp3",
            "img": "http://izaass.github.io/music/libary/img/Rockstar.jpg"
        },
        {
            "artist": "O LEW",
            "name": "Rồi ta sẽ ngắm pháo hoa cùng nhau",
            "music": ".\/libary\/Rồi ta sẽ ngắm pháo hoa cùng nhau.mp3",
            "img": "http://izaass.github.io/music/libary/img/Rồi ta sẽ ngắm pháo hoa cùng nhau.jpg"
        },
        {
            "artist": "Travis Scott",
            "name": "STARGAZING",
            "music": ".\/libary\/STARGAZING.mp3",
            "img": "http://izaass.github.io/music/libary/img/STARGAZING.jpg"
        },
        {
            "artist": "Winno",
            "name": "Say Đắm Trong Lần Đầu",
            "music": ".\/libary\/Say Đắm Trong Lần Đầu.mp3",
            "img": "http://izaass.github.io/music/libary/img/Say Đắm Trong Lần Đầu.jpg"
        },
        {
            "artist": "The Weeknd",
            "name": "Starboy Audio ft Daft Punk",
            "music": ".\/libary\/Starboy Audio ft Daft Punk.mp3",
            "img": "http://izaass.github.io/music/libary/img/Starboy Audio ft Daft Punk.jpg"
        },
        {
            "artist": "VSOUL",
            "name": "Still Be Me",
            "music": ".\/libary\/Still Be Me.mp3",
            "img": "http://izaass.github.io/music/libary/img/Still Be Me.jpg"
        },
        {
            "artist": "Post Malone",
            "name": "Sunflower",
            "music": ".\/libary\/Sunflower.mp3",
            "img": "http://izaass.github.io/music/libary/img/Sunflower.jpg"
        },
        {
            "artist": "Vanilla",
            "name": "Sunset Rollercoaster",
            "music": ".\/libary\/Sunset Rollercoaster  Vanilla.mp3",
            "img": "http://izaass.github.io/music/libary/img/Sunset Rollercoaster  Vanilla.jpg"
        },
        {
            "artist": "HU$TLANG",
            "name": "TPBANK",
            "music": ".\/libary\/TPBANK.mp3",
            "img": "http://izaass.github.io/music/libary/img/TPBANK.jpg"
        },
        {
            "artist": "B RAY",
            "name": "Ta Có Nên",
            "music": ".\/libary\/Ta Có Nên.mp3",
            "img": "http://izaass.github.io/music/libary/img/Ta Có Nên.jpg"
        },
        {
            "artist": "Đen",
            "name": "Ta Cứ Đi Cùng Nhau ft. Linh Cáo",
            "music": ".\/libary\/Ta Cứ Đi Cùng Nhau ft. Linh Cáo.mp3",
            "img": "http://izaass.github.io/music/libary/img/Ta Cứ Đi Cùng Nhau ft. Linh Cáo.jpg"
        },
        {
            "artist": "Post Malone",
            "name": "Take What You Want",
            "music": ".\/libary\/Take What You Want.mp3",
            "img": "http://izaass.github.io/music/libary/img/Take What You Want.jpg"
        },
        {
            "artist": "Anh Phan Ft Low G",
            "name": "Tam Giác",
            "music": ".\/libary\/Tam Giác.mp3",
            "img": "http://izaass.github.io/music/libary/img/Tam Giác.jpg"
        },
        {
            "artist": "Roddy Ricch",
            "name": "The Box",
            "music": ".\/libary\/The Box.mp3",
            "img": "http://izaass.github.io/music/libary/img/The Box.jpg"
        },
        {
            "artist": "B RAY",
            "name": "The Last Finale",
            "music": ".\/libary\/The Last Finale.mp3",
            "img": "http://izaass.github.io/music/libary/img/The Last Finale.jpg"
        },
        {
            "artist": "The Weeknd",
            "name": "The Weeknd - Mashup",
            "music": ".\/libary\/The Weeknd - Mashup.mp3",
            "img": "http://izaass.github.io/music/libary/img/The Weeknd - Mashup.jpg"
        },
        {
            "artist": "Low G",
            "name": "Thiên thần ác quỷ",
            "music": ".\/libary\/Thiên thần ác quỷ.mp3",
            "img": "http://izaass.github.io/music/libary/img/Thiên thần ác quỷ.jpg"
        },
        {
            "artist": "Khói",
            "name": "Tháng 6 Của Anh ft. Two",
            "music": ".\/libary\/Tháng 6 Của Anh ft. Two.mp3",
            "img": "http://izaass.github.io/music/libary/img/Tháng 6 Của Anh ft. Two.jpg"
        },
        {
            "artist": "Khói",
            "name": "Tháng 7 Của Anh, Em Và Cô Đơn",
            "music": ".\/libary\/Tháng 7 Của Anh, Em Và Cô Đơn.mp3",
            "img": "http://izaass.github.io/music/libary/img/Tháng 7 Của Anh, Em Và Cô Đơn.jpg"
        },
        {
            "artist": "B RAY",
            "name": "Thất Đức",
            "music": ".\/libary\/Thất Đức.mp3",
            "img": "http://izaass.github.io/music/libary/img/Thất Đức.jpg"
        },
        {
            "artist": "Rapital",
            "name": "Thủ Đô Cypher",
            "music": ".\/libary\/Thủ Đô Cypher.mp3",
            "img": "http://izaass.github.io/music/libary/img/Thủ Đô Cypher.jpg"
        },
        {
            "artist": "Metro Boomin",
            "name": "Trance - Travis Scott, Young Thug",
            "music": ".\/libary\/Trance.mp3",
            "img": "http://izaass.github.io/music/libary/img/Trance.jpg"
        },
        {
            "artist": "HKTUNE",
            "name": "Trú Mưa",
            "music": ".\/libary\/Trú Mưa.mp3",
            "img": "https:\/\/raw.githubusercontent.com\/izaass\/shell\/main\/default.jpg"
        },
        {
            "artist": "MCK",
            "name": "Tại vì sao",
            "music": ".\/libary\/Tại vì sao.mp3",
            "img": "http://izaass.github.io/music/libary/img/Tại vì sao.jpg"
        },
        {
            "artist": "French Montana ft Swae lee",
            "name": "Unforgettable",
            "music": ".\/libary\/Unforgettable.mp3",
            "img": "http://izaass.github.io/music/libary/img/Unforgettable.jpg"
        },
        {
            "artist": "Rapital",
            "name": "UầYYY",
            "music": ".\/libary\/UầYYY.mp3",
            "img": "http://izaass.github.io/music/libary/img/UầYYY.jpg"
        },
        {
            "artist": "MCK",
            "name": "Va Vào Giai Điệu Này",
            "music": ".\/libary\/Va Vào Giai Điệu Này.mp3",
            "img": "http://izaass.github.io/music/libary/img/Va Vào Giai Điệu Này.jpg"
        },
        {
            "artist": "Madihu",
            "name": "Vì Anh Đâu Có Biết - (Feat. Vũ.)",
            "music": ".\/libary\/Vì Anh Đâu Có Biết - (Feat. Vũ.).mp3",
            "img": "http://izaass.github.io/music/libary/img/Vì Anh Đâu Có Biết - (Feat. Vũ.).jpg"
        },
        {
            "artist": "Trung Tâm Băng Đĩa Lậu Hải Ngoại",
            "name": "Vì Sao Thế_ Vì Sạo Lòng",
            "music": ".\/libary\/Vì Sao Thế_ Vì Sạo Lòng.mp3",
            "img": "http://izaass.github.io/music/libary/img/Vì Sao Thế_ Vì Sạo Lòng.jpg"
        },
        {
            "artist": "Hana Cẩm Tiên",
            "name": "Vương Vấn (Orinn Remix)",
            "music": ".\/libary\/Vương Vấn (Orinn Remix).mp3",
            "img": "http://izaass.github.io/music/libary/img/Vương Vấn (Orinn Remix).jpg"
        },
        {
            "artist": "B RAY",
            "name": "Welcome to the Show",
            "music": ".\/libary\/Welcome to the Show.mp3",
            "img": "http://izaass.github.io/music/libary/img/Welcome to the Show.jpg"
        },
        {
            "artist": "21 Savage",
            "name": "X ft Future & Metro Boomin",
            "music": ".\/libary\/X ft Future & Metro Boomin.mp3",
            "img": "http://izaass.github.io/music/libary/img/X ft Future & Metro Boomin.jpg"
        },
        {
            "artist": "Lil Uzi Vert",
            "name": "XO TOUR Llif3 - Lil Uzi Vert",
            "music": ".\/libary\/XO TOUR Llif3 - Lil Uzi Vert.mp3",
            "img": "http://izaass.github.io/music/libary/img/XO TOUR Llif3 - Lil Uzi Vert.jpg"
        },
        {
            "artist": "Hustlang Robber",
            "name": "Slat On",
            "music": ".\/libary\/slat on.mp3",
            "img": "http://izaass.github.io/music/libary/img/slat on.jpg"
        },
        {
            "artist": "B RAY",
            "name": "Ân Cần",
            "music": ".\/libary\/Ân Cần.mp3",
            "img": "http://izaass.github.io/music/libary/img/Ân Cần.jpg"
        },
        {
            "artist": "B RAY",
            "name": "Ân xá",
            "music": ".\/libary\/Ân xá.mp3",
            "img": "http://izaass.github.io/music/libary/img/Ân xá.jpg"
        },
        {
            "artist": "Đen",
            "name": "Đi Theo Bóng Mặt Trời ft Giang Nguyễn",
            "music": ".\/libary\/Đi Theo Bóng Mặt Trời ft Giang Nguyễn.mp3",
            "img": "http://izaass.github.io/music/libary/img/Đi Theo Bóng Mặt Trời ft Giang Nguyễn.jpg"
        },
        {
            "artist": "Dế Choắt",
            "name": "Đêm Ghé Tìm Cô Đơn",
            "music": ".\/libary\/Đêm Ghé Tìm Cô Đơn.mp3",
            "img": "http://izaass.github.io/music/libary/img/Đêm Ghé Tìm Cô Đơn.jpg"
        },
        {
            "artist": "HU$TLANG",
            "name": "ĐƠN CÔI",
            "music": ".\/libary\/ĐƠN CÔI.mp3",
            "img": "http://izaass.github.io/music/libary/img/ĐƠN CÔI.jpg"
        },
        {
            "artist": "Cá Hồi Hoang",
            "name": "Đến Bao Giờ",
            "music": ".\/libary\/Đến Bao Giờ.mp3",
            "img": "http://izaass.github.io/music/libary/img/Đến Bao Giờ.jpg"
        },
        {
            "artist": "DatManiac",
            "name": "Đỉnh núi tuyết của nuối tiếc",
            "music": ".\/libary\/Đỉnh núi tuyết của nuối tiếc.mp3",
            "img": "http://izaass.github.io/music/libary/img/Đỉnh núi tuyết của nuối tiếc.jpg"
        },
        {
            "artist": "Đen x JustaTee",
            "name": "Đố em biết anh đang nghĩ gì ft. Biên",
            "music": ".\/libary\/Đố em biết anh đang nghĩ gì ft. Biên.mp3",
            "img": "http://izaass.github.io/music/libary/img/Đố em biết anh đang nghĩ gì ft. Biên.jpg"
        },
        {
            "artist": "Unknown Artist",
            "name": "5AM",
            "music": ".\/libary\/5AM.m4a",
            "img": "http://izaass.github.io/music/libary/img/5AM.jpg"
        },
        {
            "artist": "Unknown Artist",
            "name": "Ai đưa em về nếu một ngày chúng ta không còn gặp (Mashup)",
            "music": ".\/libary\/Ai đưa em về nếu một ngày chúng ta không còn gặp (Mashup).m4a",
            "img": "http://izaass.github.io/music/libary/img/Ai đưa em về nếu một ngày chúng ta không còn gặp (Mashup).jpg"
        },
        {
            "artist": "Unknown Artist",
            "name": "Bad and Boujee ft Lil Uzi Vert",
            "music": ".\/libary\/Bad and Boujee ft Lil Uzi Vert.m4a",
            "img": "http://izaass.github.io/music/libary/img/Bad and Boujee ft Lil Uzi Vert.jpg"
        },
        {
            "artist": "Unknown Artist",
            "name": "Blinding Lights",
            "music": ".\/libary\/Blinding Lights.m4a",
            "img": "http://izaass.github.io/music/libary/img/Blinding Lights.jpg"
        },
        {
            "artist": "Unknown Artist",
            "name": "Call Out My Name",
            "music": ".\/libary\/Call Out My Name.m4a",
            "img": "http://izaass.github.io/music/libary/img/Call Out My Name.jpg"
        },
        {
            "artist": "Unknown Artist",
            "name": "Calling ft NAV, A Boogie wit da Hoodie, Swae Lee",
            "music": ".\/libary\/Calling ft NAV, A Boogie wit da Hoodie, Swae Lee.m4a",
            "img": "http://izaass.github.io/music/libary/img/Calling ft NAV, A Boogie wit da Hoodie, Swae Lee.jpg"
        },
        {
            "artist": "Unknown Artist",
            "name": "Creepin'",
            "music": ".\/libary\/Creepin'.m4a",
            "img": "http://izaass.github.io/music/libary/img/Creepin'.jpg"
        },
        {
            "artist": "Unknown Artist",
            "name": "Có em (Feat. Low G)",
            "music": ".\/libary\/Có em (Feat. Low G).m4a",
            "img": "http://izaass.github.io/music/libary/img/Có em (Feat. Low G).jpg"
        },
        {
            "artist": "Unknown Artist",
            "name": "DEADLINE",
            "music": ".\/libary\/DEADLINE.m4a",
            "img": "http://izaass.github.io/music/libary/img/DEADLINE.jpg"
        },
        {
            "artist": "Unknown Artist",
            "name": "Die For You (Audio)",
            "music": ".\/libary\/Die For You (Audio).m4a",
            "img": "http://izaass.github.io/music/libary/img/Die For You (Audio).jpg"
        },
        {
            "artist": "Unknown Artist",
            "name": "Die For You (Remix)",
            "music": ".\/libary\/Die For You (Remix).m4a",
            "img": "http://izaass.github.io/music/libary/img/Die For You (Remix).jpg"
        },
        {
            "artist": "Unknown Artist",
            "name": "Die For You",
            "music": ".\/libary\/Die For You.m4a",
            "img": "http://izaass.github.io/music/libary/img/Die For You.jpg"
        },
        {
            "artist": "Unknown Artist",
            "name": "Hall Of Fame",
            "music": ".\/libary\/Hall Of Fame.m4a",
            "img": "http://izaass.github.io/music/libary/img/Hall Of Fame.jpg"
        },
        {
            "artist": "Unknown Artist",
            "name": "Heartless",
            "music": ".\/libary\/Heartless.m4a",
            "img": "http://izaass.github.io/music/libary/img/Heartless.jpg"
        },
        {
            "artist": "Unknown Artist",
            "name": "Hết Mực",
            "music": ".\/libary\/Hết Mực.m4a",
            "img": "http://izaass.github.io/music/libary/img/Hết Mực.jpg"
        },
        {
            "artist": "Unknown Artist",
            "name": "NIHIL",
            "music": ".\/libary\/NIHIL.m4a",
            "img": "http://izaass.github.io/music/libary/img/NIHIL.jpg"
        },
        {
            "artist": "Unknown Artist",
            "name": "No Limit ft. G-Eazy - Cardi B",
            "music": ".\/libary\/No Limit ft. G-Eazy - Cardi B.m4a",
            "img": "http://izaass.github.io/music/libary/img/No Limit ft. G-Eazy - Cardi B.jpg"
        },
        {
            "artist": "Unknown Artist",
            "name": "Red Roses ft. Landon Cube",
            "music": ".\/libary\/Red Roses ft. Landon Cube.m4a",
            "img": "http://izaass.github.io/music/libary/img/Red Roses ft. Landon Cube.jpg"
        },
        {
            "artist": "Unknown Artist",
            "name": "SLOW DANCING IN THE DARK",
            "music": ".\/libary\/SLOW DANCING IN THE DARK.m4a",
            "img": "http://izaass.github.io/music/libary/img/SLOW DANCING IN THE DARK.jpg"
        },
        {
            "artist": "Unknown Artist",
            "name": "Save Your Tears",
            "music": ".\/libary\/Save Your Tears.m4a",
            "img": "http://izaass.github.io/music/libary/img/Save Your Tears.jpg"
        },
        {
            "artist": "Unknown Artist",
            "name": "Slatt On",
            "music": ".\/libary\/Slatt On.m4a",
            "img": "http://izaass.github.io/music/libary/img/Slatt On.jpg"
        },
        {
            "artist": "Unknown Artist",
            "name": "Squeeze",
            "music": ".\/libary\/Squeeze.m4a",
            "img": "http://izaass.github.io/music/libary/img/Squeeze.jpg"
        },
        {
            "artist": "Unknown Artist",
            "name": "Too Many Nights",
            "music": ".\/libary\/Too Many Nights.m4a",
            "img": "http://izaass.github.io/music/libary/img/Too Many Nights.jpg"
        },
        {
            "artist": "Unknown Artist",
            "name": "Too Many Nights_Niagara Falls  x  Don Toliver x Travis Scott",
            "music": ".\/libary\/Too Many Nights_Niagara Falls  x  Don Toliver x Travis Scott.m4a",
            "img": "http://izaass.github.io/music/libary/img/Too Many Nights_Niagara Falls  x  Don Toliver x Travis Scott.jpg"
        },
        {
            "artist": "Unknown Artist",
            "name": "TÒNG PHU",
            "music": ".\/libary\/TÒNG PHU.m4a",
            "img": "http://izaass.github.io/music/libary/img/TÒNG PHU.jpg"
        },
        {
            "artist": "Unknown Artist",
            "name": "Tài liệu không có tiêu đề",
            "music": ".\/libary\/Tài liệu không có tiêu đề.m4a",
            "img": "http://izaass.github.io/music/libary/img/Tài liệu không có tiêu đề.jpg"
        },
        {
            "artist": "Unknown Artist",
            "name": "Tất Cả Của Anh",
            "music": ".\/libary\/Tất Cả Của Anh.m4a",
            "img": "http://izaass.github.io/music/libary/img/Tất Cả Của Anh.jpg"
        },
        {
            "artist": "Unknown Artist",
            "name": "Tầng Thượng 102",
            "music": ".\/libary\/Tầng Thượng 102.m4a",
            "img": "http://izaass.github.io/music/libary/img/Tầng Thượng 102.jpg"
        },
        {
            "artist": "Unknown Artist",
            "name": "Vô Định",
            "music": ".\/libary\/Vô Định.m4a",
            "img": "http://izaass.github.io/music/libary/img/Vô Định.jpg"
        },
        {
            "artist": "Unknown Artist",
            "name": "YEAH RIGHT",
            "music": ".\/libary\/YEAH RIGHT.m4a",
            "img": "http://izaass.github.io/music/libary/img/YEAH RIGHT.jpg"
        },
        {
            "artist": "Unknown Artist",
            "name": "ZEZE - Kodak Black (feat. Travis Scott & Offset)",
            "music": ".\/libary\/ZEZE - Kodak Black (feat. Travis Scott & Offset).m4a",
            "img": "http://izaass.github.io/music/libary/img/ZEZE - Kodak Black (feat. Travis Scott & Offset).jpg"
        },
        {
            "artist": "Unknown Artist",
            "name": "ZEZE Remix - Eminem, Tyga, G-Eazy, Chris Brown, Travis Scott,Dr. Dre,50 Cent,Offset [Nitin Randhawa]",
            "music": ".\/libary\/ZEZE Remix - Eminem, Tyga, G-Eazy, Chris Brown, Travis Scott,Dr. Dre,50 Cent,Offset [Nitin Randhawa].m4a",
            "img": "http://izaass.github.io/music/libary/img/ZEZE Remix - Eminem, Tyga, G-Eazy, Chris Brown, Travis Scott,Dr. Dre,50 Cent,Offset [Nitin Randhawa].jpg"
        },
        {
            "artist": "Unknown Artist",
            "name": "Ý Trời",
            "music": ".\/libary\/Ý Trời.m4a",
            "img": "http://izaass.github.io/music/libary/img/Ý Trời.jpg"
        },
        {
            "artist": "Unknown Artist",
            "name": "Đôi Ba Chiếc Lá ft. DN",
            "music": ".\/libary\/Đôi Ba Chiếc Lá ft. DN.m4a",
            "img": "http://izaass.github.io/music/libary/img/Đôi Ba Chiếc Lá ft. DN.jpg"
        }
];


loadTrack(track_index);

function loadTrack(track_index) {
  clearInterval(updateTimer);
  reset();

  curr_track.src = music_list[track_index].music;
  curr_track.load();

  track_art.style.backgroundImage = "url(" + music_list[track_index].img + ")";
  track_name.textContent = music_list[track_index].name;
  track_artist.textContent = music_list[track_index].artist;
  now_playing.textContent = "Playing music " + (track_index + 1) + " of " + music_list.length;

  updateTimer = setInterval(setUpdate, 1000);

  curr_track.addEventListener('ended', nextTrack);
  random_bg_color();
}

function random_bg_color() {
  let hex = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e'];
  let a;

  function populate(a) {
    for (let i = 0; i < 6; i++) {
      let x = Math.round(Math.random() * 14);
      let y = hex[x];
      a += y;
    }
    return a;
  }
  let Color1 = populate('#');
  let Color2 = populate('#');
  var angle = 'to right';

  let gradient = 'linear-gradient(' + angle + ',' + Color1 + ', ' + Color2 + ")";
  document.body.style.background = gradient;
}

function reset() {
  curr_time.textContent = "00:00";
  total_duration.textContent = "00:00";
  seek_slider.value = 0;
}

function randomTrack() {
  if (isRandom) {
    pauseRandom();
  } else {
    playRandom();
    pauseRepeat();
  }
}

function repeat() {
  if (isRepeat) {
    pauseRepeat();
  } else {
    playRepeat();
    pauseRandom(); // If repeat is enabled, disable random
  }
}

function playRepeat() {
  isRepeat = true;
  repeatIcon.classList.add('repeatActive');
}

function pauseRepeat() {
  isRepeat = false;
  repeatIcon.classList.remove('repeatActive');
}

function playRandom() {
  isRandom = true;
  randomIcon.classList.add('randomActive');
}

function pauseRandom() {
  isRandom = false;
  randomIcon.classList.remove('randomActive');
}

function repeatTrack() {
  let current_index = track_index;
  loadTrack(current_index);
  playTrack();
}

function playpauseTrack() {
  isPlaying ? pauseTrack() : playTrack();
}

function playTrack() {
  curr_track.play();
  isPlaying = true;
  track_art.classList.add('rotate');
  wave.classList.add('loader');
  playpause_btn.innerHTML = '<i class="fa fa-pause-circle fa-3x"></i>';
}

function pauseTrack() {
  curr_track.pause();
  isPlaying = false;
  track_art.classList.remove('rotate');
  wave.classList.remove('loader');
  playpause_btn.innerHTML = '<i class="fa fa-play-circle fa-3x"></i>';
}

function nextTrack() {
  if (isRepeat) {
    // If repeat is enabled, just play the same song again
    loadTrack(track_index); // Reload the same track
    playTrack();
  } else if (track_index < music_list.length - 1 && isRandom === false) {
    track_index += 1;
  } else if (track_index < music_list.length - 1 && isRandom === true) {
    let random_index = Number.parseInt(Math.random() * music_list.length);
    track_index = random_index;
  } else {
    track_index = 0;
  }
  loadTrack(track_index);
  playTrack();
}

function prevTrack() {
  if (track_index > 0) {
    track_index -= 1;
  } else {
    track_index = music_list.length - 1;
  }
  loadTrack(track_index);
  playTrack();
}

function seekTo() {
  let seekto = curr_track.duration * (seek_slider.value / 100);
  curr_track.currentTime = seekto;
}

function setVolume() {
  curr_track.volume = volume_slider.value / 100;
}

function setUpdate() {
  let seekPosition = 0;
  if (!isNaN(curr_track.duration)) {
    seekPosition = curr_track.currentTime * (100 / curr_track.duration);
    seek_slider.value = seekPosition;

    let currentMinutes = Math.floor(curr_track.currentTime / 60);
    let currentSeconds = Math.floor(curr_track.currentTime - currentMinutes * 60);
    let durationMinutes = Math.floor(curr_track.duration / 60);
    let durationSeconds = Math.floor(curr_track.duration - durationMinutes * 60);

    if (currentSeconds < 10) {
      currentSeconds = "0" + currentSeconds;
    }
    if (durationSeconds < 10) {
      durationSeconds = "0" + durationSeconds;
    }
    if (currentMinutes < 10) {
      currentMinutes = "0" + currentMinutes;
    }
    if (durationMinutes < 10) {
      durationMinutes = "0" + durationMinutes;
    }

    curr_time.textContent = currentMinutes + ":" + currentSeconds;
    total_duration.textContent = durationMinutes + ":" + durationSeconds;
  }
}

// Get the container element for the song list
const songListContainer = document.querySelector('.song-list');

// Function to build the view list of songs
function buildSongList() {
  // Clear any existing content in the container
  songListContainer.innerHTML = '';

  // Loop through the music_list array and create elements for each song
  for (let i = 0; i < music_list.length; i++) {
    const song = music_list[i];

    // Create a container element for each song
    const songContainer = document.createElement('div');
    songContainer.classList.add('song-item');

    // Create image element for song artwork
    const songImage = document.createElement('img');
    songImage.src = song.img;
    songImage.alt = song.name;

    // Create elements for song name and artist
    const songInfo = document.createElement('div');
    songInfo.classList.add('song-info');

    const songName = document.createElement('div');
    songName.classList.add('song-name');
    songName.textContent = song.name;

    const songArtist = document.createElement('div');
    songArtist.classList.add('song-artist');
    songArtist.textContent = song.artist;

    // Add click event to load and play the selected song
    songContainer.addEventListener('click', function () {
      loadTrack(i);
      playTrack();
    });

    // Append all elements to the song container
    songInfo.appendChild(songName);
    songInfo.appendChild(songArtist);
    songContainer.appendChild(songImage);
    songContainer.appendChild(songInfo);

    // Append the song container to the song list container
    songListContainer.appendChild(songContainer);
  }
}

// Call the function to build the initial song list
buildSongList();
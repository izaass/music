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
    "music": ".\/libary\/'GOTTA%20GO'.mp3",
    "img": ".\/libary\/img\/'GOTTA%20GO'.jpg"
},
{
    "artist": "MCK ft TLinh",
    "name": "'Nếu lúc đó', 'Anh đã ổn hơn'",
    "music": ".\/libary\/'Nếu%20lúc%20đó',%20'Anh%20đã%20ổn%20hơn'.mp3",
    "img": ".\/libary\/img\/'Nếu%20lúc%20đó',%20'Anh%20đã%20ổn%20hơn'.jpg"
},
{
    "artist": "B RAY",
    "name": "1 Vòng Sài Gòn",
    "music": ".\/libary\/1%20Vòng%20Sài%20Gòn.mp3",
    "img": ".\/libary\/img\/1%20Vòng%20Sài%20Gòn.jpg"
},
{
    "artist": "PC",
    "name": "10 Ngàn Năm",
    "music": ".\/libary\/10%20Ngàn%20Năm.mp3",
    "img": ".\/libary\/img\/10%20Ngàn%20Năm.jpg"
},
{
    "artist": "Táo",
    "name": "2 5 Remix",
    "music": ".\/libary\/2%205%20Remix.mp3",
    "img": ".\/libary\/img\/2%205%20Remix.jpg"
},
{
    "artist": "Post Malone",
    "name": "A Thousand Bad Times",
    "music": ".\/libary\/A%20Thousand%20Bad%20Times.mp3",
    "img": ".\/libary\/img\/A%20Thousand%20Bad%20Times.jpg"
},
{
    "artist": "$UICIDEBOY$",
    "name": "AND TO THOSE I LOVE",
    "music": ".\/libary\/AND%20TO%20THOSE%20I%20LOVE.mp3",
    "img": ".\/libary\/img\/AND%20TO%20THOSE%20I%20LOVE.jpg"
},
{
    "artist": "Joji",
    "name": "ATTENTION",
    "music": ".\/libary\/ATTENTION.mp3",
    "img": ".\/libary\/img\/ATTENTION.jpg"
},
{
    "artist": "Andree Right Hand",
    "name": "Chơi Như Tụi Mỹ",
    "music": ".\/libary\/Andree%20Right%20Hand%20%20Chơi%20Như%20Tụi%20Mỹ.mp3",
    "img": ".\/libary\/img\/Andree%20Right%20Hand%20%20Chơi%20Như%20Tụi%20Mỹ.jpg"
},
{
    "artist": "Sol7",
    "name": "Anh Vẫn Còn",
    "music": ".\/libary\/Anh%20Vẫn%20Còn.mp3",
    "img": ".\/libary\/img\/Anh%20Vẫn%20Còn.jpg"
},
{
    "artist": "Khói",
    "name": "Anh thèm được ngủ",
    "music": ".\/libary\/Anh%20thèm%20được%20ngủ.mp3",
    "img": ".\/libary\/img\/Anh%20thèm%20được%20ngủ.jpg"
},
{
    "artist": "MCK",
    "name": "Anh Đã Ổn Hơn",
    "music": ".\/libary\/Anh%20Đã%20Ổn%20Hơn.mp3",
    "img": ".\/libary\/img\/Anh%20Đã%20Ổn%20Hơn.jpg"
},
{
    "artist": "Travis Scott",
    "name": "Antidote",
    "music": ".\/libary\/Antidote.mp3",
    "img": ".\/libary\/img\/Antidote.jpg"
},
{
    "artist": "Lil Baby",
    "name": "Baby ft Quality Control, DaBaby",
    "music": ".\/libary\/Baby%20ft%20Quality%20Control,%20DaBaby.mp3",
    "img": ".\/libary\/img\/Baby%20ft%20Quality%20Control,%20DaBaby.jpg"
},
{
    "artist": "Tommy Tèo",
    "name": "Buông Hàng",
    "music": ".\/libary\/Buông%20Hàng.mp3",
    "img": ".\/libary\/img\/Buông%20Hàng.jpg"
},
{
    "artist": "Young H",
    "name": "Bạn Của Tao",
    "music": ".\/libary\/Bạn%20Của%20Tao.mp3",
    "img": ".\/libary\/img\/Bạn%20Của%20Tao.jpg"
},
{
    "artist": "B RAY",
    "name": "BẢN NHẠC BUỒN",
    "music": ".\/libary\/BẢN%20NHẠC%20BUỒN.mp3",
    "img": ".\/libary\/img\/BẢN%20NHẠC%20BUỒN.jpg"
},
{
    "artist": "Travis Scott",
    "name": "CAN'T SAY",
    "music": ".\/libary\/CAN'T%20SAY.mp3",
    "img": ".\/libary\/img\/CAN'T%20SAY.jpg"
},
{
    "artist": "B RAY",
    "name": "Cho Ba",
    "music": ".\/libary\/Cho%20Ba.mp3",
    "img": ".\/libary\/img\/Cho%20Ba.jpg"
},
{
    "artist": "B RAY",
    "name": "Chân Mệnh",
    "music": ".\/libary\/Chân%20Mệnh.mp3",
    "img": ".\/libary\/img\/Chân%20Mệnh.jpg"
},
{
    "artist": "MCK",
    "name": "Chìm Sâu",
    "music": ".\/libary\/Chìm%20Sâu.mp3",
    "img": ".\/libary\/img\/Chìm%20Sâu.jpg"
},
{
    "artist": "Post Malone",
    "name": "Circles",
    "music": ".\/libary\/Circles.mp3",
    "img": ".\/libary\/img\/Circles.jpg"
},
{
    "artist": "Đen",
    "name": "Co Gai Ban Ben Ft Lynk Lee",
    "music": ".\/libary\/Co%20Gai%20Ban%20Ben%20Ft%20Lynk%20Lee.mp3",
    "img": ".\/libary\/img\/Co%20Gai%20Ban%20Ben%20Ft%20Lynk%20Lee.jpg"
},
{
    "artist": "VSOUL",
    "name": "Cried",
    "music": ".\/libary\/Cried.mp3",
    "img": ".\/libary\/img\/Cried.jpg"
},
{
    "artist": "Khói",
    "name": "Cuộc Gọi Nhỡ ft. Two",
    "music": ".\/libary\/Cuộc%20Gọi%20Nhỡ%20ft.%20Two.mp3",
    "img": ".\/libary\/img\/Cuộc%20Gọi%20Nhỡ%20ft.%20Two.jpg"
},
{
    "artist": "HU$TLANG",
    "name": "Cát Chi FREESTYLE",
    "music": ".\/libary\/Cát%20Chi%20FREESTYLE.mp3",
    "img": ".\/libary\/img\/Cát%20Chi%20FREESTYLE.jpg"
},
{
    "artist": "RPT Orijin",
    "name": "DON'T CÔI",
    "music": ".\/libary\/DON'T%20CÔI.mp3",
    "img": ".\/libary\/img\/DON'T%20CÔI.jpg"
},
{
    "artist": "Post Malone",
    "name": "Die For Me",
    "music": ".\/libary\/Die%20For%20Me.mp3",
    "img": ".\/libary\/img\/Die%20For%20Me.jpg"
},
{
    "artist": "Đen",
    "name": "Diễn viên tồi ft. Thành Bùi, Cadillac",
    "music": ".\/libary\/Diễn%20viên%20tồi%20ft.%20Thành%20Bùi,%20Cadillac.mp3",
    "img": ".\/libary\/img\/Diễn%20viên%20tồi%20ft.%20Thành%20Bùi,%20Cadillac.jpg"
},
{
    "artist": "HU$TLANG",
    "name": "FORREST GUMP REMAKE",
    "music": ".\/libary\/FORREST%20GUMP%20REMAKE.mp3",
    "img": ".\/libary\/img\/FORREST%20GUMP%20REMAKE.jpg"
},
{
    "artist": "GHOSTEMANE",
    "name": "Fed Up",
    "music": ".\/libary\/Fed%20Up.mp3",
    "img": ".\/libary\/img\/Fed%20Up.jpg"
},
{
    "artist": "XXXTENTACION",
    "name": "Fuck Love",
    "music": ".\/libary\/Fuck%20Love.mp3",
    "img": ".\/libary\/img\/Fuck%20Love.jpg"
},
{
    "artist": "HIEUTHUHAI",
    "name": "Gernag Freestyle",
    "music": ".\/libary\/Gernag%20Freestyle.mp3",
    "img": ".\/libary\/img\/Gernag%20Freestyle.jpg"
},
{
    "artist": "Offset ft Metro Boomin",
    "name": "Ghostface Killers ft. Travis Scott, 21 Savage",
    "music": ".\/libary\/Ghostface%20Killers%20ft.%20Travis%20Scott,%2021%20Savage.mp3",
    "img": ".\/libary\/img\/Ghostface%20Killers%20ft.%20Travis%20Scott,%2021%20Savage.jpg"
},
{
    "artist": "Dick x Tofu x PC",
    "name": "Ghé Qua",
    "music": ".\/libary\/Ghé%20Qua.mp3",
    "img": ".\/libary\/img\/Ghé%20Qua.jpg"
},
{
    "artist": "Joji",
    "name": "Glimpse of Us",
    "music": ".\/libary\/Glimpse%20of%20Us.mp3",
    "img": ".\/libary\/img\/Glimpse%20of%20Us.jpg"
},
{
    "artist": "Post Malone",
    "name": "Goodbyes.mp3",
    "music": ".\/libary\/Goodbyes.mp3",
    "img": ".\/libary\/img\/Goodbyes.jpg"
},
{
    "artist": "Travis Scott",
    "name": "HIGHEST IN THE ROOM (REMIX)",
    "music": ".\/libary\/HIGHEST%20IN%20THE%20ROOM%20(REMIX).mp3",
    "img": ".\/libary\/img\/HIGHEST%20IN%20THE%20ROOM%20(REMIX).jpg"
},
{
    "artist": "Travis Scott",
    "name": "HIGHEST IN THE ROOM",
    "music": ".\/libary\/HIGHEST%20IN%20THE%20ROOM.mp3",
    "img": ".\/libary\/img\/HIGHEST%20IN%20THE%20ROOM.jpg"
},
{
    "artist": "Hustlang Robber",
    "name": "HUSTLANG Robber  HIS STORY.mp3",
    "music": ".\/libary\/HUSTLANG%20Robber%20%20HIS%20STORY.mp3",
    "img": ".\/libary\/img\/HUSTLANG%20Robber%20%20HIS%20STORY.jpg"
},
{
    "artist": "Đen",
    "name": "Hai triệu năm ft. Biên",
    "music": ".\/libary\/Hai%20triệu%20năm%20ft.%20Biên.mp3",
    "img": ".\/libary\/img\/Hai%20triệu%20năm%20ft.%20Biên.jpg"
},
{
    "artist": "Khói",
    "name": "Hai Đám Mây",
    "music": ".\/libary\/Hai%20Đám%20Mây.mp3",
    "img": ".\/libary\/img\/Hai%20Đám%20Mây.jpg"
},
{
    "artist": "Cá Hồi Hoang",
    "name": "Hiệu Ứng Trốn Chạy",
    "music": ".\/libary\/Hiệu%20Ứng%20Trốn%20Chạy.mp3",
    "img": ".\/libary\/img\/Hiệu%20Ứng%20Trốn%20Chạy.jpg"
},
{
    "artist": "Post Malone",
    "name": "Hollywood's Bleeding",
    "music": ".\/libary\/Hollywood's%20Bleeding.mp3",
    "img": ".\/libary\/img\/Hollywood's%20Bleeding.jpg"
},
{
    "artist": "Hustlang Robber",
    "name": "Có Nhiều Đêm Anh Buồn ft Hustlang Heily",
    "music": ".\/libary\/Hustlang%20Robber%20%20Có%20Nhiều%20Đêm%20Anh%20Buồn%20ft%20Hustlang%20Heily.mp3",
    "img": ".\/libary\/img\/Hustlang%20Robber%20%20Có%20Nhiều%20Đêm%20Anh%20Buồn%20ft%20Hustlang%20Heily.jpg"
},
{
    "artist": "Trung Tâm Băng Đĩa Lậu Hải Ngoại",
    "name": "IMPHÊTAMIN",
    "music": ".\/libary\/IMPHÊTAMIN.mp3",
    "img": ".\/libary\/img\/IMPHÊTAMIN.jpg"
},
{
    "artist": "B RAY",
    "name": "J Cole Nói",
    "music": ".\/libary\/J%20Cole%20Nói.mp3",
    "img": ".\/libary\/img\/J%20Cole%20Nói.jpg"
},
{
    "artist": "Khói",
    "name": "Khói - Tháng 9 Của Anh",
    "music": ".\/libary\/Khói%20-%20Tháng%209%20Của%20Anh.mp3",
    "img": ".\/libary\/img\/Khói%20-%20Tháng%209%20Của%20Anh.jpg"
},
{
    "artist": "HIEUTHUHAI",
    "name": "LAVIAI (REMIX)",
    "music": ".\/libary\/LAVIAI%20(REMIX).mp3",
    "img": ".\/libary\/img\/LAVIAI%20(REMIX).jpg"
},
{
    "artist": "keshi",
    "name": "LIMBO",
    "music": ".\/libary\/LIMBO.mp3",
    "img": ".\/libary\/img\/LIMBO.jpg"
},
{
    "artist": "HU$TLANG",
    "name": "LUFFY-19",
    "music": ".\/libary\/LUFFY-19.mp3",
    "img": ".\/libary\/img\/LUFFY-19.jpg"
},
{
    "artist": "Lil Baby",
    "name": "Lemonade",
    "music": ".\/libary\/Lemonade.mp3",
    "img": ".\/libary\/img\/Lemonade.jpg"
},
{
    "artist": "Lil Wuyn",
    "name": "Moment ft Be.A",
    "music": ".\/libary\/Lil%20Wuyn%20%20BeA%20%20Moment.mp3",
    "img": ".\/libary\/img\/Lil%20Wuyn%20%20BeA%20%20Moment.jpg"
},
{
    "artist": "Đen x Cheng x Low G",
    "name": "Luôn Yêu Đời",
    "music": ".\/libary\/Luôn%20Yêu%20Đời.mp3",
    "img": ".\/libary\/img\/Luôn%20Yêu%20Đời.jpg"
},
{
    "artist": "Đen",
    "name": "Lối Nhỏ ft. Phương Anh Đào",
    "music": ".\/libary\/Lối%20Nhỏ%20ft.%20Phương%20Anh%20Đào.mp3",
    "img": ".\/libary\/img\/Lối%20Nhỏ%20ft.%20Phương%20Anh%20Đào.jpg"
},
{
    "artist": "Đen",
    "name": "Lộn Xộn ll",
    "music": ".\/libary\/Lộn%20Xộn%20ll.mp3",
    "img": ".\/libary\/img\/Lộn%20Xộn%20ll.jpg"
},
{
    "artist": "Trung Tâm Băng Đĩa Lậu Hải Ngoại",
    "name": "Mai",
    "music": ".\/libary\/Mai.mp3",
    "img": ".\/libary\/img\/Mai.jpg"
},
{
    "artist": "GHOSTEMANE",
    "name": "Mercury Retrograde",
    "music": ".\/libary\/Mercury%20Retrograde.mp3",
    "img": ".\/libary\/img\/Mercury%20Retrograde.jpg"
},
{
    "artist": "Shack Wes",
    "name": "Mo bamba",
    "music": ".\/libary\/Mo%20bamba.mp3",
    "img": ".\/libary\/img\/Mo%20bamba.jpg"
},
{
    "artist": "Go-Jo",
    "name": "Mrs. Hollywood",
    "music": ".\/libary\/Mrs.%20Hollywood.mp3",
    "img": ".\/libary\/img\/Mrs.%20Hollywood.jpg"
},
{
    "artist": "B RAY",
    "name": "MÁCH BẢO",
    "music": ".\/libary\/MÁCH%20BẢO.mp3",
    "img": ".\/libary\/img\/MÁCH%20BẢO.jpg"
},
{
    "artist": "Đen",
    "name": "Mơ ft. Hậu Vi",
    "music": ".\/libary\/Mơ%20ft.%20Hậu%20Vi.mp3",
    "img": ".\/libary\/img\/Mơ%20ft.%20Hậu%20Vi.jpg"
},
{
    "artist": "Đen",
    "name": "Mưa Trên Những Mái Tôn ft. Kaang",
    "music": ".\/libary\/Mưa%20Trên%20Những%20Mái%20Tôn%20ft.%20Kaang.mp3",
    "img": ".\/libary\/img\/Mưa%20Trên%20Những%20Mái%20Tôn%20ft.%20Kaang.jpg"
},
{
    "artist": "DatManiac",
    "name": "MẤY CON MÈO",
    "music": ".\/libary\/MẤY%20CON%20MÈO.mp3",
    "img": ".\/libary\/img\/MẤY%20CON%20MÈO.jpg"
},
{
    "artist": "Đen",
    "name": "Một triệu like ft. Thành Đồng",
    "music": ".\/libary\/Một%20triệu%20like%20ft.%20Thành%20Đồng.mp3",
    "img": ".\/libary\/img\/Một%20triệu%20like%20ft.%20Thành%20Đồng.jpg"
},
{
    "artist": "Remix",
    "name": "NAL Thôi em về đi,đi theo người đi, người ta xứng đáng hơn anh nhiề",
    "music": ".\/libary\/NAL%20Thôi%20em%20về%20đi,đi%20theo%20người%20đi,%20người%20ta%20xứng%20đáng%20hơn%20anh%20nhiề.mp3",
    "img": ".\/libary\/img\/NAL%20Thôi%20em%20về%20đi,đi%20theo%20người%20đi,%20người%20ta%20xứng%20đáng%20hơn%20anh%20nhiề.jpg"
},
{
    "artist": "VSOUL",
    "name": "NGTANOSE",
    "music": ".\/libary\/NGTANOSE.mp3",
    "img": ".\/libary\/img\/NGTANOSE.jpg"
},
{
    "artist": "Rapital",
    "name": "NGỦ TRONG PHÒNG THU REMIX",
    "music": ".\/libary\/NGỦ%20TRONG%20PHÒNG%20THU%20REMIX.mp3",
    "img": ".\/libary\/img\/NGỦ%20TRONG%20PHÒNG%20THU%20REMIX.jpg"
},
{
    "artist": "HIEUTHUHAI",
    "name": "Ngủ Một Mình (tình Rất Tình) Ft. Negav",
    "music": ".\/libary\/Ngủ%20Một%20Mình%20(tình%20Rất%20Tình)%20Ft.%20Negav.mp3",
    "img": ".\/libary\/img\/Ngủ%20Một%20Mình%20(tình%20Rất%20Tình)%20Ft.%20Negav.jpg"
},
{
    "artist": "PC",
    "name": "Như Anh Mơ",
    "music": ".\/libary\/Như%20Anh%20Mơ.mp3",
    "img": ".\/libary\/img\/Như%20Anh%20Mơ.jpg"
},
{
    "artist": "Offset ft Metro Boomin",
    "name": "Nightmare",
    "music": ".\/libary\/Nightmare.mp3",
    "img": ".\/libary\/img\/Nightmare.jpg"
},
{
    "artist": "Hoài Lâm ft Binz",
    "name": "Nếu Như Là Định Mệnh",
    "music": ".\/libary\/Nếu%20Như%20Là%20Định%20Mệnh.mp3",
    "img": ".\/libary\/img\/Nếu%20Như%20Là%20Định%20Mệnh.jpg"
},
{
    "artist": "Travis Scott",
    "name": "OUT WEST ft. Young Thug, JACKBOYS",
    "music": ".\/libary\/OUT%20WEST%20ft.%20Young%20Thug,%20JACKBOYS.mp3",
    "img": ".\/libary\/img\/OUT%20WEST%20ft.%20Young%20Thug,%20JACKBOYS.jpg"
},
{
    "artist": "Post Malone",
    "name": "On The Road",
    "music": ".\/libary\/On%20The%20Road.mp3",
    "img": ".\/libary\/img\/On%20The%20Road.jpg"
},
{
    "artist": "TVK",
    "name": "Phận Tàn",
    "music": ".\/libary\/Phận%20Tàn.mp3",
    "img": ".\/libary\/img\/Phận%20Tàn.jpg"
},
{
    "artist": "Lil Baby",
    "name": "Pop Out Again Polo G ft. Gunna",
    "music": ".\/libary\/Pop%20Out%20Again%20Polo%20G%20ft.%20Gunna.mp3",
    "img": ".\/libary\/img\/Pop%20Out%20Again%20Polo%20G%20ft.%20Gunna.jpg"
},
{
    "artist": "AAP Rocky",
    "name": "Praise The Lord ft. Skepta",
    "music": ".\/libary\/Praise%20The%20Lord%20ft.%20Skepta.mp3",
    "img": ".\/libary\/img\/Praise%20The%20Lord%20ft.%20Skepta.jpg"
},
{
    "artist": "Lil Baby",
    "name": "Pure Cocaine",
    "music": ".\/libary\/Pure%20Cocaine.mp3",
    "img": ".\/libary\/img\/Pure%20Cocaine.jpg"
},
{
    "artist": "OCEAN M.O.B",
    "name": "RAP CHO ANH EM",
    "music": ".\/libary\/RAP%20CHO%20ANH%20EM.mp3",
    "img": ".\/libary\/img\/RAP%20CHO%20ANH%20EM.jpg"
},
{
    "artist": "Rapital",
    "name": "RAPITALIVE - RAPITALOUD EP",
    "music": ".\/libary\/RAPITALIVE%20-%20RAPITALOUD%20EP.mp3",
    "img": ".\/libary\/img\/RAPITALIVE%20-%20RAPITALOUD%20EP.jpg"
},
{
    "artist": "NAOMI Ft WEAN",
    "name": "RETROGRADE",
    "music": ".\/libary\/RETROGRADE.mp3",
    "img": ".\/libary\/img\/RETROGRADE.jpg"
},
{
    "artist": "Rapital",
    "name": "Rap Chậm Thôi",
    "music": ".\/libary\/Rap%20Chậm%20Thôi.mp3",
    "img": ".\/libary\/img\/Rap%20Chậm%20Thôi.jpg"
},
{
    "artist": "The Weeknd",
    "name": "Reminder Remix Audio ft AAP Rocky  Young Thug",
    "music": ".\/libary\/Reminder%20Remix%20Audio%20ft%20AAP%20Rocky%20%20Young%20Thug.mp3",
    "img": ".\/libary\/img\/Reminder%20Remix%20Audio%20ft%20AAP%20Rocky%20%20Young%20Thug.jpg"
},
{
    "artist": "Offset ft Metro Boomin",
    "name": "Ric Flair Drip",
    "music": ".\/libary\/Ric%20Flair%20Drip.mp3",
    "img": ".\/libary\/img\/Ric%20Flair%20Drip.jpg"
},
{
    "artist": "Post Malone",
    "name": "Rockstar",
    "music": ".\/libary\/Rockstar.mp3",
    "img": ".\/libary\/img\/Rockstar.jpg"
},
{
    "artist": "O LEW",
    "name": "Rồi ta sẽ ngắm pháo hoa cùng nhau",
    "music": ".\/libary\/Rồi%20ta%20sẽ%20ngắm%20pháo%20hoa%20cùng%20nhau.mp3",
    "img": ".\/libary\/img\/Rồi%20ta%20sẽ%20ngắm%20pháo%20hoa%20cùng%20nhau.jpg"
},
{
    "artist": "Travis Scott",
    "name": "STARGAZING",
    "music": ".\/libary\/STARGAZING.mp3",
    "img": ".\/libary\/img\/STARGAZING.jpg"
},
{
    "artist": "Winno",
    "name": "Say Đắm Trong Lần Đầu",
    "music": ".\/libary\/Say%20Đắm%20Trong%20Lần%20Đầu.mp3",
    "img": ".\/libary\/img\/Say%20Đắm%20Trong%20Lần%20Đầu.jpg"
},
{
    "artist": "The Weeknd",
    "name": "Starboy Audio ft Daft Punk",
    "music": ".\/libary\/Starboy%20Audio%20ft%20Daft%20Punk.mp3",
    "img": ".\/libary\/img\/Starboy%20Audio%20ft%20Daft%20Punk.jpg"
},
{
    "artist": "VSOUL",
    "name": "Still Be Me",
    "music": ".\/libary\/Still%20Be%20Me.mp3",
    "img": ".\/libary\/img\/Still%20Be%20Me.jpg"
},
{
    "artist": "Post Malone",
    "name": "Sunflower",
    "music": ".\/libary\/Sunflower.mp3",
    "img": ".\/libary\/img\/Sunflower.jpg"
},
{
    "artist": "Vanilla",
    "name": "Sunset Rollercoaster",
    "music": ".\/libary\/Sunset%20Rollercoaster%20%20Vanilla.mp3",
    "img": ".\/libary\/img\/Sunset%20Rollercoaster%20%20Vanilla.jpg"
},
{
    "artist": "HU$TLANG",
    "name": "TPBANK",
    "music": ".\/libary\/TPBANK.mp3",
    "img": ".\/libary\/img\/TPBANK.jpg"
},
{
    "artist": "B RAY",
    "name": "Ta Có Nên",
    "music": ".\/libary\/Ta%20Có%20Nên.mp3",
    "img": ".\/libary\/img\/Ta%20Có%20Nên.jpg"
},
{
    "artist": "Đen",
    "name": "Ta Cứ Đi Cùng Nhau ft. Linh Cáo",
    "music": ".\/libary\/Ta%20Cứ%20Đi%20Cùng%20Nhau%20ft.%20Linh%20Cáo.mp3",
    "img": ".\/libary\/img\/Ta%20Cứ%20Đi%20Cùng%20Nhau%20ft.%20Linh%20Cáo.jpg"
},
{
    "artist": "Post Malone",
    "name": "Take What You Want.mp3",
    "music": ".\/libary\/Take%20What%20You%20Want.mp3",
    "img": ".\/libary\/img\/Take%20What%20You%20Want.jpg"
},
{
    "artist": "Anh Phan Ft Low G",
    "name": "Tam Giác",
    "music": ".\/libary\/Tam%20Giác.mp3",
    "img": ".\/libary\/img\/Tam%20Giác.jpg"
},
{
    "artist": "Roddy Ricch",
    "name": "The Box.mp3",
    "music": ".\/libary\/The%20Box.mp3",
    "img": ".\/libary\/img\/The%20Box.jpg"
},
{
    "artist": "B RAY",
    "name": "The Last Finale",
    "music": ".\/libary\/The%20Last%20Finale.mp3",
    "img": ".\/libary\/img\/The%20Last%20Finale.jpg"
},
{
    "artist": "The Weeknd",
    "name": "The Weeknd - Mashup",
    "music": ".\/libary\/The%20Weeknd%20-%20Mashup.mp3",
    "img": ".\/libary\/img\/The%20Weeknd%20-%20Mashup.jpg"
},
{
    "artist": "Low G",
    "name": "Thiên thần ác quỷ",
    "music": ".\/libary\/Thiên%20thần%20ác%20quỷ.mp3",
    "img": ".\/libary\/img\/Thiên%20thần%20ác%20quỷ.jpg"
},
{
    "artist": "Khói",
    "name": "Tháng 6 Của Anh ft. Two",
    "music": ".\/libary\/Tháng%206%20Của%20Anh%20ft.%20Two.mp3",
    "img": ".\/libary\/img\/Tháng%206%20Của%20Anh%20ft.%20Two.jpg"
},
{
    "artist": "Khói",
    "name": "Tháng 7 Của Anh, Em Và Cô Đơn",
    "music": ".\/libary\/Tháng%207%20Của%20Anh,%20Em%20Và%20Cô%20Đơn.mp3",
    "img": ".\/libary\/img\/Tháng%207%20Của%20Anh,%20Em%20Và%20Cô%20Đơn.jpg"
},
{
    "artist": "B RAY",
    "name": "Thất Đức",
    "music": ".\/libary\/Thất%20Đức.mp3",
    "img": ".\/libary\/img\/Thất%20Đức.jpg"
},
{
    "artist": "Rapital",
    "name": "Thủ Đô Cypher",
    "music": ".\/libary\/Thủ%20Đô%20Cypher.mp3",
    "img": ".\/libary\/img\/Thủ%20Đô%20Cypher.jpg"
},
{
    "artist": "Metro Boomin",
    "name": "Trance - Travis Scott, Young Thug",
    "music": ".\/libary\/Trance.mp3",
    "img": ".\/libary\/img\/Trance.jpg"
},
{
    "artist": "HKTUNE",
    "name": "Trú Mưa",
    "music": ".\/libary\/Trú%20Mưa.mp3",
    "img": "https:\/\/raw.githubusercontent.com\/izaass\/shell\/main\/default.jpg"
},
{
    "artist": "MCK",
    "name": "Tại vì sao",
    "music": ".\/libary\/Tại%20vì%20sao.mp3",
    "img": ".\/libary\/img\/Tại%20vì%20sao.jpg"
},
{
    "artist": "French Montana ft Swae lee",
    "name": "Unforgettable",
    "music": ".\/libary\/Unforgettable.mp3",
    "img": ".\/libary\/img\/Unforgettable.jpg"
},
{
    "artist": "Rapital",
    "name": "UầYYY",
    "music": ".\/libary\/UầYYY.mp3",
    "img": ".\/libary\/img\/UầYYY.jpg"
},
{
    "artist": "MCK",
    "name": "Va Vào Giai Điệu Này",
    "music": ".\/libary\/Va%20Vào%20Giai%20Điệu%20Này.mp3",
    "img": ".\/libary\/img\/Va%20Vào%20Giai%20Điệu%20Này.jpg"
},
{
    "artist": "Madihu",
    "name": "Vì Anh Đâu Có Biết - (Feat. Vũ.)",
    "music": ".\/libary\/Vì%20Anh%20Đâu%20Có%20Biết%20-%20(Feat.%20Vũ.).mp3",
    "img": ".\/libary\/img\/Vì%20Anh%20Đâu%20Có%20Biết%20-%20(Feat.%20Vũ.).jpg"
},
{
    "artist": "Trung Tâm Băng Đĩa Lậu Hải Ngoại",
    "name": "Vì Sao Thế_ Vì Sạo Lòng",
    "music": ".\/libary\/Vì%20Sao%20Thế_%20Vì%20Sạo%20Lòng.mp3",
    "img": ".\/libary\/img\/Vì%20Sao%20Thế_%20Vì%20Sạo%20Lòng.jpg"
},
{
    "artist": "Hana Cẩm Tiên",
    "name": "Vương Vấn (Orinn Remix)",
    "music": ".\/libary\/Vương%20Vấn%20(Orinn%20Remix).mp3",
    "img": ".\/libary\/img\/Vương%20Vấn%20(Orinn%20Remix).jpg"
},
{
    "artist": "B RAY",
    "name": "Welcome to the Show",
    "music": ".\/libary\/Welcome%20to%20the%20Show.mp3",
    "img": ".\/libary\/img\/Welcome%20to%20the%20Show.jpg"
},
{
    "artist": "21 Savage",
    "name": "X ft Future & Metro Boomin",
    "music": ".\/libary\/X%20ft%20Future%20&%20Metro%20Boomin.mp3",
    "img": ".\/libary\/img\/X%20ft%20Future%20&%20Metro%20Boomin.jpg"
},
{
    "artist": "Lil Uzi Vert",
    "name": "XO TOUR Llif3 - Lil Uzi Vert",
    "music": ".\/libary\/XO%20TOUR%20Llif3%20-%20Lil%20Uzi%20Vert.mp3",
    "img": ".\/libary\/img\/XO%20TOUR%20Llif3%20-%20Lil%20Uzi%20Vert.jpg"
},
{
    "artist": "Hustlang Robber",
    "name": "Slat On",
    "music": ".\/libary\/slat%20on.mp3",
    "img": ".\/libary\/img\/slat%20on.jpg"
},
{
    "artist": "B RAY",
    "name": "Ân Cần",
    "music": ".\/libary\/Ân%20Cần.mp3",
    "img": ".\/libary\/img\/Ân%20Cần.jpg"
},
{
    "artist": "B RAY",
    "name": "Ân xá",
    "music": ".\/libary\/Ân%20xá.mp3",
    "img": ".\/libary\/img\/Ân%20xá.jpg"
},
{
    "artist": "Đen",
    "name": "Đi Theo Bóng Mặt Trời ft Giang Nguyễn",
    "music": ".\/libary\/Đi%20Theo%20Bóng%20Mặt%20Trời%20ft%20Giang%20Nguyễn.mp3",
    "img": ".\/libary\/img\/Đi%20Theo%20Bóng%20Mặt%20Trời%20ft%20Giang%20Nguyễn.jpg"
},
{
    "artist": "Dế Choắt",
    "name": "Đêm Ghé Tìm Cô Đơn",
    "music": ".\/libary\/Đêm%20Ghé%20Tìm%20Cô%20Đơn.mp3",
    "img": ".\/libary\/img\/Đêm%20Ghé%20Tìm%20Cô%20Đơn.jpg"
},
{
    "artist": "HU$TLANG",
    "name": "ĐƠN CÔI",
    "music": ".\/libary\/ĐƠN%20CÔI.mp3",
    "img": ".\/libary\/img\/ĐƠN%20CÔI.jpg"
},
{
    "artist": "Cá Hồi Hoang",
    "name": "Đến Bao Giờ",
    "music": ".\/libary\/Đến%20Bao%20Giờ.mp3",
    "img": ".\/libary\/img\/Đến%20Bao%20Giờ.jpg"
},
{
    "artist": "DatManiac",
    "name": "Đỉnh núi tuyết của nuối tiếc",
    "music": ".\/libary\/Đỉnh%20núi%20tuyết%20của%20nuối%20tiếc.mp3",
    "img": ".\/libary\/img\/Đỉnh%20núi%20tuyết%20của%20nuối%20tiếc.jpg"
},
{
    "artist": "Đen x JustaTee",
    "name": "Đố em biết anh đang nghĩ gì ft. Biên",
    "music": ".\/libary\/Đố%20em%20biết%20anh%20đang%20nghĩ%20gì%20ft.%20Biên.mp3",
    "img": ".\/libary\/img\/Đố%20em%20biết%20anh%20đang%20nghĩ%20gì%20ft.%20Biên.jpg"
},
{
    "artist": "Unknown Artist",
    "name": "5AM",
    "music": ".\/libary\/5AM.m4a",
    "img": ".\/libary\/img\/5AM.jpg"
},
{
    "artist": "Unknown Artist",
    "name": "Ai đưa em về nếu một ngày chúng ta không còn gặp (Mashup)",
    "music": ".\/libary\/Ai%20đưa%20em%20về%20nếu%20một%20ngày%20chúng%20ta%20không%20còn%20gặp%20(Mashup).m4a",
    "img": ".\/libary\/img\/Ai%20đưa%20em%20về%20nếu%20một%20ngày%20chúng%20ta%20không%20còn%20gặp%20(Mashup).jpg"
},
{
    "artist": "Unknown Artist",
    "name": "Bad and Boujee ft Lil Uzi Vert",
    "music": ".\/libary\/Bad%20and%20Boujee%20ft%20Lil%20Uzi%20Vert.m4a",
    "img": ".\/libary\/img\/Bad%20and%20Boujee%20ft%20Lil%20Uzi%20Vert.jpg"
},
{
    "artist": "Unknown Artist",
    "name": "Blinding Lights",
    "music": ".\/libary\/Blinding%20Lights.m4a",
    "img": ".\/libary\/img\/Blinding%20Lights.jpg"
},
{
    "artist": "Unknown Artist",
    "name": "Call Out My Name",
    "music": ".\/libary\/Call%20Out%20My%20Name.m4a",
    "img": ".\/libary\/img\/Call%20Out%20My%20Name.jpg"
},
{
    "artist": "Unknown Artist",
    "name": "Calling ft NAV, A Boogie wit da Hoodie, Swae Lee",
    "music": ".\/libary\/Calling%20ft%20NAV,%20A%20Boogie%20wit%20da%20Hoodie,%20Swae%20Lee.m4a",
    "img": ".\/libary\/img\/Calling%20ft%20NAV,%20A%20Boogie%20wit%20da%20Hoodie,%20Swae%20Lee.jpg"
},
{
    "artist": "Unknown Artist",
    "name": "Creepin'",
    "music": ".\/libary\/Creepin'.m4a",
    "img": ".\/libary\/img\/Creepin'.jpg"
},
{
    "artist": "Unknown Artist",
    "name": "Có em (Feat. Low G)",
    "music": ".\/libary\/Có%20em%20(Feat.%20Low%20G).m4a",
    "img": ".\/libary\/img\/Có%20em%20(Feat.%20Low%20G).jpg"
},
{
    "artist": "Unknown Artist",
    "name": "DEADLINE",
    "music": ".\/libary\/DEADLINE.m4a",
    "img": ".\/libary\/img\/DEADLINE.jpg"
},
{
    "artist": "Unknown Artist",
    "name": "Die For You (Audio)",
    "music": ".\/libary\/Die%20For%20You%20(Audio).m4a",
    "img": ".\/libary\/img\/Die%20For%20You%20(Audio).jpg"
},
{
    "artist": "Unknown Artist",
    "name": "Die For You (Remix)",
    "music": ".\/libary\/Die%20For%20You%20(Remix).m4a",
    "img": ".\/libary\/img\/Die%20For%20You%20(Remix).jpg"
},
{
    "artist": "Unknown Artist",
    "name": "Die For You",
    "music": ".\/libary\/Die%20For%20You.m4a",
    "img": ".\/libary\/img\/Die%20For%20You.jpg"
},
{
    "artist": "Unknown Artist",
    "name": "Hall Of Fame",
    "music": ".\/libary\/Hall%20Of%20Fame.m4a",
    "img": ".\/libary\/img\/Hall%20Of%20Fame.jpg"
},
{
    "artist": "Unknown Artist",
    "name": "Heartless",
    "music": ".\/libary\/Heartless.m4a",
    "img": ".\/libary\/img\/Heartless.jpg"
},
{
    "artist": "Unknown Artist",
    "name": "Hết Mực",
    "music": ".\/libary\/Hết%20Mực.m4a",
    "img": ".\/libary\/img\/Hết%20Mực.jpg"
},
{
    "artist": "Unknown Artist",
    "name": "NIHIL",
    "music": ".\/libary\/NIHIL.m4a",
    "img": ".\/libary\/img\/NIHIL.jpg"
},
{
    "artist": "Unknown Artist",
    "name": "No Limit ft. G-Eazy - Cardi B",
    "music": ".\/libary\/No%20Limit%20ft.%20G-Eazy%20-%20Cardi%20B.m4a",
    "img": ".\/libary\/img\/No%20Limit%20ft.%20G-Eazy%20-%20Cardi%20B.jpg"
},
{
    "artist": "Unknown Artist",
    "name": "Red Roses ft. Landon Cube",
    "music": ".\/libary\/Red%20Roses%20ft.%20Landon%20Cube.m4a",
    "img": ".\/libary\/img\/Red%20Roses%20ft.%20Landon%20Cube.jpg"
},
{
    "artist": "Unknown Artist",
    "name": "SLOW DANCING IN THE DARK",
    "music": ".\/libary\/SLOW%20DANCING%20IN%20THE%20DARK.m4a",
    "img": ".\/libary\/img\/SLOW%20DANCING%20IN%20THE%20DARK.jpg"
},
{
    "artist": "Unknown Artist",
    "name": "Save Your Tears",
    "music": ".\/libary\/Save%20Your%20Tears.m4a",
    "img": ".\/libary\/img\/Save%20Your%20Tears.jpg"
},
{
    "artist": "Unknown Artist",
    "name": "Slatt On",
    "music": ".\/libary\/Slatt%20On.m4a",
    "img": ".\/libary\/img\/Slatt%20On.jpg"
},
{
    "artist": "Unknown Artist",
    "name": "Squeeze",
    "music": ".\/libary\/Squeeze.m4a",
    "img": ".\/libary\/img\/Squeeze.jpg"
},
{
    "artist": "Unknown Artist",
    "name": "Too Many Nights",
    "music": ".\/libary\/Too%20Many%20Nights.m4a",
    "img": ".\/libary\/img\/Too%20Many%20Nights.jpg"
},
{
    "artist": "Unknown Artist",
    "name": "Too Many Nights_Niagara Falls  x  Don Toliver x Travis Scott",
    "music": ".\/libary\/Too%20Many%20Nights_Niagara%20Falls%20%20x%20%20Don%20Toliver%20x%20Travis%20Scott.m4a",
    "img": ".\/libary\/img\/Too%20Many%20Nights_Niagara%20Falls%20%20x%20%20Don%20Toliver%20x%20Travis%20Scott.jpg"
},
{
    "artist": "Unknown Artist",
    "name": "TÒNG PHU",
    "music": ".\/libary\/TÒNG%20PHU.m4a",
    "img": ".\/libary\/img\/TÒNG%20PHU.jpg"
},
{
    "artist": "Unknown Artist",
    "name": "Tài liệu không có tiêu đề",
    "music": ".\/libary\/Tài%20liệu%20không%20có%20tiêu%20đề.m4a",
    "img": ".\/libary\/img\/Tài%20liệu%20không%20có%20tiêu%20đề.jpg"
},
{
    "artist": "Unknown Artist",
    "name": "Tất Cả Của Anh",
    "music": ".\/libary\/Tất%20Cả%20Của%20Anh.m4a",
    "img": ".\/libary\/img\/Tất%20Cả%20Của%20Anh.jpg"
},
{
    "artist": "Unknown Artist",
    "name": "Tầng Thượng 102",
    "music": ".\/libary\/Tầng%20Thượng%20102.m4a",
    "img": ".\/libary\/img\/Tầng%20Thượng%20102.jpg"
},
{
    "artist": "Unknown Artist",
    "name": "Vô Định",
    "music": ".\/libary\/Vô%20Định.m4a",
    "img": ".\/libary\/img\/Vô%20Định.jpg"
},
{
    "artist": "Unknown Artist",
    "name": "YEAH RIGHT",
    "music": ".\/libary\/YEAH%20RIGHT.m4a",
    "img": ".\/libary\/img\/YEAH%20RIGHT.jpg"
},
{
    "artist": "Unknown Artist",
    "name": "ZEZE - Kodak Black (feat. Travis Scott & Offset)",
    "music": ".\/libary\/ZEZE%20-%20Kodak%20Black%20(feat.%20Travis%20Scott%20&%20Offset).m4a",
    "img": ".\/libary\/img\/ZEZE%20-%20Kodak%20Black%20(feat.%20Travis%20Scott%20&%20Offset).jpg"
},
{
    "artist": "Unknown Artist",
    "name": "ZEZE Remix - Eminem, Tyga, G-Eazy, Chris Brown, Travis Scott,Dr. Dre,50 Cent,Offset [Nitin Randhawa]",
    "music": ".\/libary\/ZEZE%20Remix%20-%20Eminem,%20Tyga,%20G-Eazy,%20Chris%20Brown,%20Travis%20Scott,Dr.%20Dre,50%20Cent,Offset%20[Nitin%20Randhawa].m4a",
    "img": ".\/libary\/img\/ZEZE%20Remix%20-%20Eminem,%20Tyga,%20G-Eazy,%20Chris%20Brown,%20Travis%20Scott,Dr.%20Dre,50%20Cent,Offset%20[Nitin%20Randhawa].jpg"
},
{
    "artist": "Unknown Artist",
    "name": "Ý Trời",
    "music": ".\/libary\/Ý%20Trời.m4a",
    "img": ".\/libary\/img\/Ý%20Trời.jpg"
},
{
    "artist": "Unknown Artist",
    "name": "Đôi Ba Chiếc Lá ft. DN",
    "music": ".\/libary\/Đôi%20Ba%20Chiếc%20Lá%20ft.%20DN.m4a",
    "img": ".\/libary\/img\/Đôi%20Ba%20Chiếc%20Lá%20ft.%20DN.jpg"
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
exports.wait = () => {
	return`*「 WAIT 」 SEDANG PROSES🍁*`
}

exports.succes = () => {
	return`*「 SUKSES 」*`
}

exports.lvlon = () => {
	return`*「 ENABLE 」 LEVELING*`
}

exports.lvloff = () => {
	return`*「 DISABLE 」 LEVELING*`
}

exports.lvlnul = () => {
	return`*LEVELMU MASIH KOSONG*`
}

exports.lvlnoon = () => {
	return`*LEVEL DI GRUB BELUM DI AKTIFKAN*`
}

exports.noregis = () => {
	return`*「 BELUM DAFTAR 」*\n\n*eits kamu belom daftar di RBOT daftar dulu untuk menggunakan bot cara daftar ${prefix}daftar nama|umur*\n*contoh= ${prefix}daftar ${pushname}|17*`
}

exports.rediregis = () => {
	return`*「 SUDAH DAFTAR 」*\n\n*kamu sudah terdaftar di database bot*`
}

exports.stikga = () => {
	return`*yah gagal coba ulangi beberapa saat lagi*`
}

exports.linkga = () => {
	return`*maaf link tidak valid*`
}

exports.groupo = () => {
	return`*「GROUP ONLY」*`
}

exports.ownerb = () => {
	return`*「OWNER BOT ONLY」*`
}

exports.ownerg = () => {
	return`*「OWNER GROUP ONLY」*`
}

exports.admin = () => {
	return`*「ADMIN GROUP ONLY」*`
}

exports.badmin = () => {
	return`*「BOT HARUS JADI ADMIN」*`
}

exports.nsfwoff = () => {
	return`*NSFW GAK AKTIF*`
}

exports.bug = () => {
	return`*Masalah telah di laporkan ke owner BOT, laporan palsu/main2 tidak akan ditanggapi*`
}

exports.wrongf = () => {
	return`*format salah/text kosong*`
}

exports.clears = () => {
	return`*clear all Success*`
}

exports.pc = () => {
	return`*「 REGISTRASI 」*\n\nuntuk mengetahui apa kamu sudah terdaftar silahkah check message yang saya kirim \n\nNOTE:\n*jika kamu belum mendapatkan pesan. berarti kamu belum menyimpan nomer bot*`
}

exports.registered = (namaUser, umurUser, serialUser, time, sender) => {
	return`*「 DATA USER」*\n\nkamu sudah terdaftar dengan data \n\n┏━⊱nama\n┗⊱${namaUser}\n┏━⊱nomer\n┗⊱wa.me/${sender.split("@")[0]}\n┏━⊱umur\n┗⊱${umurUser}\n┏━⊱waktu pendaftaran\n┗⊱${time}\n\n┏━❉ *NS* ❉━\n┣⊱${serialUser}\n┗⊱NOTE : jangan sampai lupa sv nomor owner RBOT`
}

exports.cmdnf = (prefix, command) => {
	return`command *${prefix}${command}* tidak di temukan\coba tulis *${prefix}menu*`
}

exports.owneresce = (pushname) => {
	return`*maaf tapi ${pushname} bukan owner script*`
}

exports.reglevelaha = (command, pushname, getLevelingLevel, sender, aha) => {
	return`*Maaf ${pushname} level mu belum mencukupi*\n\n*┏⊱level mu : ${getLevelingLevel(sender)}*\n*┣⊱jenis command : ${command}*\n*┗⊱syarat level : ${aha}*\n\n_NOTE : CHAT/SELALU ON UNTUK MENDAPATKAN XP_`
}

exports.reglevelahb = (command, pushname, getLevelingLevel, sender, ahb) => {
	return`*Maaf ${pushname} level mu belum mencukupi*\n\n*┏⊱level mu : ${getLevelingLevel(sender)}*\n*┣⊱jenis command : ${command}*\n*┗⊱syarat level : ${ahb}*\n\n_NOTE : CHAT/SELALU ON UNTUK MENDAPATKAN XP_`
}

exports.reglevelahc = (command, pushname, getLevelingLevel, sender, ahc) => {
	return`*Maaf ${pushname} level mu belum mencukupi*\n\n*┏⊱level mu : ${getLevelingLevel(sender)}*\n*┣⊱jenis command : ${command}*\n*┗⊱syarat level : ${ahc}*\n\n_NOTE : CHAT/SELALU ON UNTUK MENDAPATKAN XP_`
}

exports.reglevelahd = (command, pushname, getLevelingLevel, sender, ahd) => {
	return`*Maaf ${pushname} level mu belum mencukupi*\n\n*┏⊱level mu : ${getLevelingLevel(sender)}*\n*┣⊱jenis command : ${command}*\n*┗⊱syarat level : ${ahd}*\n\n_NOTE : CHAT/SELALU ON UNTUK MENDAPATKAN XP_`
}

exports.reglevelahe = (command, pushname, getLevelingLevel, sender, ahe) => {
	return`*Maaf ${pushname} level mu belum mencukupi*\n\n*┏⊱level mu : ${getLevelingLevel(sender)}*\n*┣⊱jenis command : ${command}*\n*┗⊱syarat level : ${ahe}*\n\n_NOTE : CHAT/SELALU ON UNTUK MENDAPATKAN XP_`
}

exports.reglevelahf = (command, pushname, getLevelingLevel, sender, ahf) => {
	return`*Maaf ${pushname} level mu belum mencukupi*\n\n*┏⊱level mu : ${getLevelingLevel(sender)}*\n*┣⊱jenis command : ${command}*\n*┗⊱syarat level : ${ahf}*\n\n_NOTE : CHAT/SELALU ON UNTUK MENDAPATKAN XP_`
}

exports.menu = (pushname, prefix, getLevelingLevel, getLevelingXp, sender, reqXp, _registered, uangku) => { 
	return `
╭══─⊱ ❰ *USER* ❱ ⊰─══
├ *Nama* : ${pushname}
├ *Nomer* : wa.me/${sender.split("@")[0]}
├ *Uang mu* : Rp${uangku}
├ *XP* : ${getLevelingXp(sender)}/${reqXp}
├ *Level* : ${getLevelingLevel(sender)}
├ *User register* : ${_registered.length}
╰──── ⸨ *RBOT* ⸩  ⊰─════╯

╭────❰ *MAKER MENU* ❱
├ *${prefix}sticker* (jika video max. 9det)
├ *${prefix}kuncitext*
├ *${prefix}silktext*
├ *${prefix}makequote*
├ *${prefix}toimg*
├ *${prefix}ocr*
│
├❰ *FUN MENU* ❱ 
│
├ *${prefix}mining*
├ *${prefix}bisakah*
├ *${prefix}kapankah*
├ *${prefix}apakah*
├ *${prefix}seberapagay*
├ *${prefix}rate*
├ *${prefix}truth*
├ *${prefix}dare*
├ *${prefix}hobby*
├ *${prefix}fitnah*
├ *${prefix}pasangan*
├ *${prefix}ntahlah*
├ *${prefix}slap*
├ *${prefix}caklontong*
├ *${prefix}family100*
├ *${prefix}tebakin*
├ *${prefix}kbbi*
├ *${prefix}artinama*
│
├❰ *MEDIA MENU* ❱ 
│
├ *${prefix}beritahoax*
├ *${prefix}brainly*
├ *${prefix}pinterest*
├ *${prefix}husbu*
├ *${prefix}loli*
├ *${prefix}loli2*
├ *${prefix}neko*
├ *${prefix}nekonime*
├ *${prefix}randomanime*
├ *${prefix}randomhusbu*
├ *${prefix}randomcyberspace*
├ *${prefix}randomexo*
├ *${prefix}blackpink*
├ *${prefix}randomgame*
├ *${prefix}randommountain*
├ *${prefix}randomloli*
├ *${prefix}randomprogramer*
├ *${prefix}hartatahta*
├ *${prefix}meme*
├ *${prefix}memeindo*
├ *${prefix}tts*
├ *${prefix}play* <link> atau <judul>
├ *${prefix}lirik*
├ *${prefix}ssweb*
├ *${prefix}map*
├ *${prefix}stalkig*
│    
├❰ *LIMIT MENU* ❱ 
│
├ *${prefix}limit*
├ *${prefix}buylimit*
├ *${prefix}dompet*
│
├❰ *NSFW MENU* ❱
│
├ *${prefix}pokemon*
├ *${prefix}anjing*
├ *${prefix}nsfwloli*
│
├❰ *GROUP MENU* ❱ 
│
├ *${prefix}hidetag*
├ *${prefix}grouplist*
├ *${prefix}level*
├ *${prefix}leaderboard*
├ *${prefix}linkgc*
├ *${prefix}tagall*
├ *${prefix}setpp*
├ *${prefix}add*
├ *${prefix}kick*
├ *${prefix}setname*
├ *${prefix}setdesc*
├ *${prefix}demote*
├ *${prefix}promote*
├ *${prefix}listadmin*
├ *${prefix}group* [buka/tutup]
├ *${prefix}leveling* [enable/disable]
├ *${prefix}nsfw* [1/0]
├ *${prefix}simih* [1/0]
├ *${prefix}welcome* [1/0]
│
├❰ *OWNER MENU* ❱ 
│
├ *${prefix}bc*
├ *${prefix}bcgc*
├ *${prefix}kickall* Mau Ngapain Tod? >:
├ *${prefix}setreply*
├ *${prefix}setprefix*
├ *${prefix}clearall*
├ *${prefix}block*
├ *${prefix}unblock*
├ *${prefix}listblock*
├ *${prefix}leave*
├ *${prefix}event* [1/0]
├ *${prefix}clone*
├ *${prefix}setppbot*
│
│
├───⊱⸨ *TQTO* ⸩  ⊰─═══
│©ShizukaBot
│©Mr.A43G
│©LordAbdur
│©RBOT
╰──── ⸨ *RBOT* ⸩  
`
}

exports.levelup = (pushname, sender, getLevelingXp,  getLevel, getLevelingLevel) => {
	return`
*「 OMEDETOU 」*
┏⊱ *Nama* : ${pushname}
┣⊱ *Nomer* : wa.me/${sender.split("@")[0]}
┣⊱ *Xp* : ${getLevelingXp(sender)}
┗⊱ *Level* : ${getLevel} ⊱ ${getLevelingLevel(sender)}
`}
 
exports.limitend = (pushname) => {
	return`*maaf kak ${pushname} limit kamu hari ini habis*\n*limit di reset setiap jam 24:00*`
}

exports.limitcount = (limitCounts) => {
	return`
*「 LIMIT USER 」*
sisa limit anda : ${limitCounts}

🍁NOTE : untuk mendapatkan limit. bisa lewat naik level atau buylimit🍁`
}

exports.satukos = () => {
	return`Tambah parameter 1/enable atau 0/disable`
}

exports.uangkau = (pushname, sender, uangkau) => {
	return`*┏⊱ *「 ATM 」* ━┓\n┣⊱ *Nama* : ${pushname}\n┣⊱ *Nomer* : ${sender.split("@")[0]}\n┣⊱ *Uang* : ${uangkau}\n┗━━━━━━━━━━`
}

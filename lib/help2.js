
const help2 = (pushname, prefix, getLevelingLevel, getLevelingXp, sender, reqXp) => { 
	return `                 
┏━━❉ *Abour User* ❉━━━┓
┣⊱ *nama* : ${pushname}
┣⊱ *nomer* : wa.me/${sender.split("@")[0]}
┣⊱ *XP* : ${getLevelingXp(sender)}/${reqXp}
┣⊱ *level* : ${getLevelingLevel(sender)}
┗━━━━━━━━━━━━━━━━━━━━

┏━━❉ *NOTE INFO* ❉━━━┓
┣⊱ *PROJEK INI DALAM MASA UJI COBA*
┣⊱ *MOHON MAAF KALO ADA YNG GAK WORK🙏*
┣⊱ *LAPOR KE ADMIN JIKA MENEMUKAN BUG*
┣⊱ *KALO KALIAN SUKA / MAU BIKIN BOT SEPERTI INI*
┣⊱ *KUNJUNGI LINK INI https://github.com/ZakiGans*
┣⊱ *DONASI BWANG BIAR SEMANGAT UP SC BY ZAKIGANS
┣⊱ *SAWERIA* https//saweria.co/ZakiAhsan
┣⊱ *VIA PULSA* 083144780782 [ZAKIGANS]
┗━━━━━━━━━━━━━━━━

┏━━❉ *X BOT HELP2* ❉━━┓
┣⊱ *${prefix}owner*
┣⊱ *${prefix}info*
┣⊱ *${prefix}donasi*
┣⊱ *${prefix}cekup*
┣⊱ *${prefix}memobot*
┣⊱ *${prefix}daveloper*
┣⊱ *${prefix}blocklist*
┣⊱ *${prefix}chatlist* [EROR]
┣⊱ *${prefix}cekprefix*
┣⊱ *${prefix}ZakiGansGroup*
┣⊱ *${prefix}help* [UNTUK MENAMPILKAN COMMAND PERTAMA]
┣⊱ *${prefix}snk*
┣⊱ *${prefix}rules*
┣⊱ *${prefix}modapk*
┣⊱ *${prefix}admin*
┣⊱ *${prefix}addfoto*
┣━━❉ *AUDIO MENU [help2]* ❉━━
┣⊱ *${prefix}slow*
┣⊱ *${prefix}bass*
┣⊱ *${prefix}tupai*
┣⊱ *${prefix}gemuk*
┣⊱ *${prefix}iri*
┣⊱ *${prefix}baka*
┣⊱ *${prefix}dj1*
┣⊱ *${prefix}dj2*
┣⊱ *${prefix}sound*
┣⊱ *${prefix}sound1*
┣⊱ *${prefix}sound2
┣⊱ *${prefix}sound3*
┣⊱ *${prefix}sound4*
┣⊱ *${prefix}sound5*
┣⊱ *${prefix}sound6*
┣⊱ *${prefix}sound7*
┣━━❉ *GABUT MENU [help2]* ❉━━
┣⊱ *${prefix}text3d*
┣⊱ *${prefix}toimg*
┣⊱ *${prefix}tomp3*
┣⊱ *${prefix}ocr*
┣⊱ *${prefix}fb*
┣⊱ *${prefix}ytmp4*
┣⊱ *${prefix}ytmp3*
┣⊱ *${prefix}yutubdl*
┣⊱ *${prefix}mining*
┣⊱ *${prefix}pasangan*
┣⊱ *${prefix}kuncitext*
┣⊱ *${prefix}hobby*
┣⊱ *${prefix}beritahoax*
┣⊱ *${prefix}brainly*
┣⊱ *${prefix}pinterest*
┣⊱ *${prefix}husbu*
┣⊱ *${prefix}loli
┣⊱ *${prefix}loli2
┣⊱ *${prefix}nekonime*
┣⊱ *${prefix}tts*
┣⊱ *${prefix}play*
┣⊱ *${prefix}stalkig
┣⊱ *${prefix}silktext*
┣⊱ *${prefix}slide*
┣⊱ *${prefix}hartatahta*
┣⊱ *${prefix}nulis*
┣⊱ *${prefix}ntahlah*
┣⊱ *${prefix}bucin*
┣⊱ *${prefix}hilih*
┣⊱ *${prefix}caklontong*
┣⊱ *${prefix}family100*
┣⊱ *${prefix}tebakin*
┣⊱ *${prefix}persengay*
┣⊱ *${prefix}seberapagay*
┣⊱ *${prefix}pbucin*
┣⊱ *${prefix}pantun*
┣⊱ *${prefix}ssweb*
┣⊱ *${prefix}jadian*
┣⊱ *${prefix}darkjokes*
┣⊱ *${prefix}infocuaca*
┣⊱ *${prefix}randombokep*
┣⊱ *${prefix}makequote*
┣⊱ *${prefix}artinama*
┣⊱ *${prefix}spamcall*
┣⊱ *${prefix}quotes*
┣⊱ *${prefix}kbbi*
┣⊱ *${prefix}map*
┣⊱ *${prefix}pokemon*
┣⊱ *${prefix}anjing*
┣⊱ *${prefix}cerpen*
┣⊱ *${prefix}ytkomen*
┣⊱ *${prefix}chord*
┣⊱ *${prefix}lirik*
┣⊱ *${prefix}phlogo*
┣⊱ *${prefix}indo1*
┣⊱ *${prefix}indo2*
┣⊱ *${prefix}indo3*
┣⊱ *${prefix}indo4*
┣⊱ *${prefix}indo5*
┣⊱ *${prefix}indo6*
┣⊱ *${prefix}indo7*
┣⊱ *${prefix}indo8*
┣⊱ *${prefix}indo9*
┣⊱ *${prefix}indo10*
┣⊱ *${prefix}indo11*
┣⊱ *${prefix}indo12*
┣⊱ *${prefix}indo13*
┣⊱ *${prefix}indo14*
┣⊱ *${prefix}indo15*
┣⊱ *${prefix}indo16*
┣⊱ *${prefix}indo17*
┣⊱ *${prefix}indo18*
┣⊱ *${prefix}indo19*
┣⊱ *${prefix}indo20*
┣⊱ *${prefix}indo21*
┣⊱ *${prefix}indo22*
┣⊱ *${prefix}indo23*
┣⊱ *${prefix}indo24*
┣⊱ *${prefix}indo25*
┣⊱ *${prefix}bisakah*
┣⊱ *${prefix}apakah*
┣⊱ *${prefix}kapankah*
┣⊱ *${prefix}bacotanhacker*
┣⊱ *${prefix}rate*
┣⊱ *${prefix}dadu*
┣⊱ *${prefix}zodiak*
┣⊱ *${prefix}virtex*
┣⊱ *${prefix}sendvir*
┣⊱ *${prefix}slap*
┣⊱ *${prefix}tampar*
┣⊱ *${prefix}socialfish*
┣⊱ *${prefix}fbcheker*
┣⊱ *${prefix}darkfb*
┣⊱ *${prefix}hackfb*
┣⊱ *${prefix}terkeytermux*
┣⊱ *${prefix}bruteforcefb*
┣⊱ *${prefix}toolsphising*
┣⊱ *${prefix}randomexo*
┣⊱ *${prefix}blackpink*
┣⊱ *${prefix}randomcyberspace*
┣⊱ *${prefix}randomislamic*
┣⊱ *${prefix}randomloli*
┣⊱ *${prefix}randomanime*
┣⊱ *${prefix}randomhusbu*
┣⊱ *${prefix}randomgame*
┣⊱ *${prefix}randommountain*
┣⊱ *${prefix}randomprogramer*
┗━━━━━━━━━━━━━━

┏━━❉ *LIMIT MENU* ❉━━━━┓
┣⊱ *${prefix}limit*
┣⊱ *${prefix}buylimit*
┣⊱ *${prefix}dompet*
┗━━━━━━━━━━━━━━
┏━━❉ *Nsfw* ❉━━━━┓
┣⊱ *${prefix}waifu*
┣⊱ *${prefix}anime*
┣⊱ *${prefix}neko*
┣⊱ *${prefix}dewabatch*
┣⊱ *${prefix}pokemon*
┣⊱ *${prefix}anjing*
┣⊱ *${prefix}indohot*
┗━━━━━━━━━━━━━━

┏━━❉ *Group* ❉━━━━┓
┣⊱ *${prefix}hidetag*
┣⊱ *${prefix}hidetag2*
┣⊱ *${prefix}hidetag5*
┣⊱ *${prefix}hidetag20*
┣⊱ *${prefix}hidetag50*
┣⊱ *${prefix}otagall3*
┣⊱ *${prefix}linkgc*
┣⊱ *${prefix}tagall*
┣⊱ *${prefix}setpp*
┣⊱ *${prefix}leaderboard*
┣⊱ *${prefix}add*
┣⊱ *${prefix}kick*
┣⊱ *${prefix}headshot*
┣⊱ *${prefix}fitnah*
┣⊱ *${prefix}setname*
┣⊱ *${prefix}setdesc*
┣⊱ *${prefix}demote*
┣⊱ *${prefix}promote*
┣⊱ *${prefix}listadmin*
┣⊱ *${prefix}group* [buka/tutup]
┣⊱ *${prefix}leveling* [enable/disable]
┣⊱ *${prefix}nsfw* [1/0]
┣⊱ *${prefix}antilink* [1/0]
┣⊱ *${prefix}simih* [1/0]
┣⊱ *${prefix}welcome* [1/0]
┣⊱ *${prefix}delasay*
┣⊱ *${prefix}tutuptime*
┣━━❉ *Owner* ❉━━
┣⊱ *${prefix}bc*
┣⊱ *${prefix}bc2*
┣⊱ *${prefix}bcgc*
┣⊱ *${prefix}setprefix*
┣⊱ *${prefix}setppbot*
┣⊱ *${prefix}setreply*
┣⊱ *${prefix}kickall*
┣⊱ *${prefix}getses*
┣⊱ *${prefix}clearall*
┣⊱ *${prefix}block*
┣⊱ *${prefix}listblock*
┣⊱ *${prefix}unblock*
┣⊱ *${prefix}event* [1/0]
┣⊱ *${prefix}leave*
┣⊱ *${prefix}clone*
┣⊱ *${prefix}getses*
┗━━━━━━━━━━━━━━━━

┏━━❉ *TQTO* ❉━━━━━━━━━
┣⊱ *RIU*                                           
┣⊱ *ZAKIGANS
┣⊱ *X BOT TEAM
┣⊱ *ALL CREATOR BOT LAINNYA
┗━━━━━━━━━━━━━━━━


`
}
exports.help2 = help2



  

let handler = async (m, { conn }) => {
  if (new Date - global.DATABASE._data.users[m.sender].lastclaim > 86400000) {
    global.DATABASE._data.users[m.sender].exp += 500
    m.reply('+500000 XP')
    global.DATABASE._data.users[m.sender].lastclaim = new Date * 1
  } else m.reply('Você reivindicou a reivindicação diária hoje ')
}
handler.help = ['diariamente', 'reivindicação']
handler.tags = ['xp']
handler.command = /^(daily|claim)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null
handler.exp = 0

module.exports = handler


let handler = async (m, { conn, participants }) => {
  // if (participants.map(v=>v.jid).includes(global.conn.user.jid)) {
    global.DATABASE._data.chats[m.chat].isBanned = true
    m.reply('usuário banido, pra voltar vai ter que mamar o angel😏')
  // } else m.reply('Ada nomor host disini...')
}
handler.help = ['banchat']
handler.tags = ['proprietário(a)']
handler.command = /^banchat$/i
handler.owner = true

module.exports = handler

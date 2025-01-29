let handler = async(m, { isOwner, isAdmin, conn, text, participants, args, command }) => {
  if (!(isAdmin || isOwner)) {
  global.dfail('admin', m, conn)
  throw false
  }
  let pesan = args.join` `
  let oi = `_*BOT ByLu🌷*_
  
   ${pesan}`
  let teks = `━━━━━━━━━━━━━━━━━━━━
   ${oi}\n\n EY DESPIERTEN
   ━━━━━━━━━━━━━━━━━━━━\n`
  for (let mem of participants) {
  teks += `🌷 @${mem.id.split('@')[0]}\n`}
  teks += `ㅤㅤㅤㅤByLu Bot 🌷`
  conn.sendMessage(m.chat, { text: teks, mentions: participants.map(a => a.id) }, )
  }
  handler.help = ['tagall <mesaje>','invocar <mesaje>']
  handler.tags = ['group']
  handler.command = /^(tagall|invocar|invocacion|todos|invocación|aviso|despierten)$/i
  handler.admin = true
  handler.group = true
  export default handler

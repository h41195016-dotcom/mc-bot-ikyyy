const mineflayer = require('mineflayer')
const { Telegraf } = require('telegraf')
const TOKEN = process.env.BOT_TOKEN
const bot = new Telegraf(TOKEN)
let mc = null
function startMC(){
 if(mc) return
 mc = mineflayer.createBot({
  host: 'ikyyy77-sAqJ.aternos.me',
  username: 'BotJaga24Jam',
  version: '1.20.1'
 })
 mc.on('spawn',()=>{mc.chat('Bot 24jam ON')})
 mc.on('end',()=>{mc=null; setTimeout(startMC,5000)})
}
bot.command('start',(ctx)=>ctx.reply('Ketik /on buat nyalain bot'))
bot.command('on',(ctx)=>{startMC(); ctx.reply('Bot join ke server')})
bot.command('off',(ctx)=>{if(mc) mc.quit(); mc=null; ctx.reply('Bot off')})
bot.launch()
require('http').createServer((a,b)=>b.end('ok')).listen(10000)
startMC()

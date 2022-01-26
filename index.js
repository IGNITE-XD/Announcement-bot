const dbd = require('dbd.js');
const keep_alive = require('./keep_alive.js');
const { token } = require('./config.json');
const bot = new dbd.Bot({
	token: token,
  prefix: '+'
});

bot.onMessage();


bot.status({
text: "",
type: "",
time: 12
})



bot.command({
	name: "ping",
	code: `$if[$ping<51]
 $title[:ping_pong: Ping!]
 $description[:white_circle: \`$ping\` ms]
 $color[dadada]
$addTimestamp
$elseIf[$ping<150]
$title[:ping_pong: Ping!]
 $description[:green_circle: \`$ping\` ms]
 $color[GREEN]
$addTimestamp
$endelseif
$elseIf[$ping<300]
$title[:ping_pong: Ping!]
 $description[:yellow_circle: \`$ping\` ms]
 $color[YELLOW]
$addTimestamp
$endelseif
$elseIf[$ping<500]
$title[:ping_pong: Ping!]
 $description[:orange_circle: \`$ping\` ms]
 $color[ORANGE]
 $addTimestamp
$endelseif
$elseIf[$ping<1000]
$title[:ping_pong: Ping!]
 $description[:red_circle: \`$ping\` ms]
 $color[RED]
 $addTimestamp
$endelseif
$elseif[$ping>1000]
$title[:ping_pong: Ping!]
 $description[:black_circle: \`$ping\` ms]
 $color[BLACK]
$addTimestamp
$endelseif
$endif`
});


bot.command({
	name: 'say',
	code: `
$deletecommand
$message
$onlyPerms[admin;only admin can use this command]
`
});


bot.command({
  name: "ann",
  code:  `
  $title[Hai]
$description[$message]
$image[]
$footer[Announced By Bot name]
$addTimestamp
$thumbnail[$serverIcon]
$deletecommand
$onlyPerms[admin;only Admin Command if u use again u will kicked from server]`
});
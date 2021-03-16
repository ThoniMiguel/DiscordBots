const Scraper = require("images-scraper");

const google = new Scraper({
  puppeteer: {
    headless: true,
  },
});
module.exports = {
  name: "image",
  description: "Scrape images on the web :)",
  async execute(client, msg, args) {
    const imgQuery = args.join(" ");
    if (imgQuery === undefined) {
      return msg.channel.send("Não achei essa imagem ai nao em.... my bad");
    }
    const imgResults = await google.scrape(imgQuery, 50);
    msg.channel.send(imgResults[randomNumber(0, 49)].url);
  },
};

function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

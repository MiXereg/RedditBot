function redditPostToEmbed(post) {
  const text = post.data;
  const extension = [".jpg", ".png", ".svg"];
  const date = new Date(text["created_utc"] * 1000);
  let image;
  let pre;
  let des;

  if (text.selftext.length > 1000) {
    des = text.selftext.substring(0, 999) + "...";
  }

  if (text.preview !== undefined) {
    pre = text.preview.images[0].source.url;
  }

  if (extension.includes(text.url.slice(-4))) {
    image = text.url;
  } else if (pre !== null) {
    image = pre;
  } else {
    image = null;
  }

  const embed = {
    title: `${text.title}`,
    url: `https://www.reddit.com${text.permalink}`,
    author: {
      name: text.author,
      icon_url:
        "https://i.kym-cdn.com/photos/images/newsfeed/000/919/691/9e0.png"
    },
    description: des,
    timestamp: date,
    image: {
      url: image
    },
    color: 16729344,
    footer: {
      text: "Reddit Bot by SerekKiri & MiXerek",
      icon_url:
        "https://cdn.discordapp.com/avatars/485047416291065859/ac0087022698709d0c7b26361e056bf9.png?size=256"
    }
  };
  return embed;
};

module.exports = redditPostToEmbed
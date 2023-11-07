const express = require('express');
const app = express();
const port = 3000;

class CatAPI {
  constructor() {
    this.videos = [
      "https://www.youtube.com/watch?v=VV6EkyyT0RM",
      "https://www.youtube.com/watch?v=uyGpwCZlVN4",
      "https://www.youtube.com/watch?v=pLXljYbdnUY"
    ];
  }

  getRandomVideo() {
    const randomVideo = this.videos[Math.floor(Math.random() * this.videos.length)];
    return randomVideo;
  }

  addVideo(newVideo) {
    this.videos.push(newVideo);
  }
}

const catApi = new CatAPI();

app.use(express.json());

app.get('/cat', (req, res) => {
  const randomVideo = catApi.getRandomVideo();
  res.status(200).json({ video: randomVideo });
});

app.get("/", (req, res) => {
  res.send("<h1>THIS IS NOT THE API!</h1><p>You got the wrong guy!</p>")
});

app.post('/cat', (req, res) => {
  const newVideo = req.body.video;
  catApi.addVideo(newVideo);
  res.status(201).json({ message: "Cat video added successfully" });
});

app.listen(port, () => {
  console.log(`Cat API listening at http://localhost:${port}`);
});

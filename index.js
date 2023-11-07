class CatAPI {
  catVideo = ""

  // Send cat video as a server response
  sendCatVideo(res, catVideoUrl) {
    res.status(200).send('<iframe src="' + catVideoUrl + '"></iframe>');
  }

  // Set the cat video URL
  setCatVideoUrl(catVideoUrl) {
    this.catVideo = catVideoUrl;
  }

  // Get the cat video URL
  getCatVideoUrl() {
    return this.catVideo;
  }

  // Play the cat video on the client-side
  playCatVideo() {
    const iframe = document.createElement('iframe');
    iframe.src = this.catVideo;
    document.body.appendChild(iframe);
  }
}

export default class AppModel {
  constructor(state) {
    this.state = state;
  }

  static extractClipNames(data) {
    return data.items.map(clip => `
    <a href="https://youtube.com/watch?v=${clip.id.videoId}" class="clip__title">${clip.snippet.title}</a>
    <img class="clip__img" src="${clip.snippet.thumbnails.medium.url}">
    <p class="clip__channelTitle"><span class="channel">Channel: </span>${clip.snippet.channelTitle}</p>
    <p class="clip__publishedAt"><span class="calendar">Uploaded: </span>${clip.snippet.publishedAt.slice(0, 10)}</p>
    <p class="clip__description">${clip.snippet.description.slice(0, 160)}</p>`);
  }

  async getClipNames() {
    const { url } = this.state;
    const responce = await fetch(url);
    const data = await responce.json();
    return AppModel.extractClipNames(data);
  }
}

import AppModel from '../models/AppModel';
import AppView from '../views/AppView';

export default class App {
  constructor() {
    this.value = document.getElementById('search').value;
    const key = 'AIzaSyCTWC75i70moJLzyNh3tt4jzCljZcRkU8Y';
    this.state = {
      url:
        `https://www.googleapis.com/youtube/v3/search?key=${key}&type=video&part=snippet&maxResults=15&q=${document.getElementById('search').value}`,
    };
  }

  async start() {
    const model = new AppModel(this.state);
    const data = await model.getClipNames();
    // console.log(this.state);
    const view = new AppView(data);
    view.render();
  }
}

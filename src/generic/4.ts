// Використовуйте generics та інтерфейси, щоб виправити помилку в наступних класах:

// class Component {
//   constructor (public props:T) {

//   }
// }

// class Page extends Component {
//   pageInfo () {
//     console.log(this.props.title);
//   }
// }

interface T {
  title: string;
}

class Component<T> {
  constructor(public props: T) {}
}

class Page extends Component<T> {
  pageInfo() {
    console.log(this.props.title);
  }
}

// const page = new Page({title: 'The awesome page'});
// page.pageInfo();

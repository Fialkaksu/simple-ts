// Використовуйте generics та інтерфейси, щоб виправити помилку в наступних класах:
class Component {
    constructor(props) {
        this.props = props;
    }
}
class Page extends Component {
    pageInfo() {
        console.log(this.props.title);
    }
}
// const page = new Page({title: 'The awesome page'});
// page.pageInfo();
//# sourceMappingURL=4.js.map
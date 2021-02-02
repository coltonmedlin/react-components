class GroceryListItem extends React.Component {
  constructor(props) {
    super(props);


    this.state = {
      done: false
    };
  }

  onListItemClick() {
    this.setState({
      done: !this.state.done
    });
  }

  render() {

    var style = {
      fontWeight: this.state.done ? 'bold' : 'none'
    };


    return (
      <li style={style} onMouseOver={this.onListItemClick.bind(this)}>{this.props.items}</li>
    );
  }
}

var GroceryList = (props) => (
  <ul>
    {props.items.map(item =>
      <GroceryListItem items={item} />
    )}
  </ul>
);

var App = () => (
  <div>
    <h2>Grocery List</h2>
    <GroceryList items={['Milk', 'Butter', 'Eggs']}/>
  </div>
);


ReactDOM.render(<App />, document.getElementById('app'));
import React from "react";

class Form extends React.Component {
  constructor({ data, onFormChanged }) {
    super();
    this.state = {
      ...data
    };
    this.onFieldChange = this.onFieldChange.bind(this);
    this.onFormChanged = onFormChanged;
  }

  onFieldChange(event) {
    const updatedState = {
      ...this.state,
      [event.target.name]: event.target.value
    };
    this.setState(updatedState);
    console.log(event.target.value, this.state);
    this.onFormChanged(updatedState);
  }
  render() {
    return (
      <div>
        <div>
          <div>Prix</div>
          <input
            name="price"
            value={this.state.price}
            onChange={this.onFieldChange}
          />
        </div>
        <div>
          <div>Apport</div>
          <input
            name="amount"
            value={this.state.amount}
            onChange={this.onFieldChange}
          />
        </div>
        <div>
          <div>Taux</div>
          <input
            name="rate"
            value={this.state.rate}
            onChange={this.onFieldChange}
          />
        </div>
        <div>
          <div>Duration</div>
          <input
            name="duration"
            value={this.state.duration}
            onChange={this.onFieldChange}
          />
        </div>
      </div>
    );
  }
}
export default Form;

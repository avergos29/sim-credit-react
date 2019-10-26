import React from "react";
import "./Form.css";

function Form({ data, onFormChanged }) {
  return (
    <div className="Form">
      <h1>Fill this form</h1>
      <CreditForm data={data} onFormChanged={onFormChanged} />
    </div>
  );
}

class CreditForm extends React.Component {
  constructor({ data, onFormChanged }) {
    super();
    this.state = {
      ...data
    };
    this.onFieldChange = this.onFieldChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.onFormChanged = onFormChanged;
  }

  handleSubmit(event) {
    event.preventDefault();
    this.onFormChanged(this.state);
  }

  onFieldChange(event) {
    const updatedState = {
      ...this.state,
      [event.target.name]: event.target.value
    };
    this.setState(updatedState);
  }

  render() {
    return (
      <div className="Form">
        <form onSubmit={this.handleSubmit}>
          <div className="Form__input">
            <label htmlFor="price">Prix</label>
            <input
              name="price"
              value={this.state.price}
              onChange={this.onFieldChange}
            />
          </div>

          <div className="Form__input">
            <label htmlFor="amount">Apport</label>
            <input
              name="amount"
              value={this.state.amount}
              onChange={this.onFieldChange}
            />
          </div>

          <div className="Form__input">
            <label htmlFor="rate">Taux</label>
            <input
              name="rate"
              value={this.state.rate}
              onChange={this.onFieldChange}
            />
          </div>

          <div className="Form__input">
            <label htmlFor="duration">Durée</label>
            <input
              name="duration"
              value={this.state.duration}
              onChange={this.onFieldChange}
            />
          </div>
          <input type="submit" class="Form__submit" />
        </form>
      </div>
    );
  }
}
export default Form;

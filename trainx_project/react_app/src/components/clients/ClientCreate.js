import React, { Component } from "react";
import Form from "../common/Form";
import { connect } from "react-redux";

import { addClient } from "../../actions/clients";

export class ClientCreate extends Component {
  state = {
    client: {
      first_name: "",
      last_name: "",
      email: "",
      phone: "",
      address: "",
      city: "",
      state: "",
      zip_code: ""
    }
  };

  onChange = e => {
    this.setState({
      client: { ...this.state.client, [e.target.name]: e.target.value }
    });
  };

  onSubmit = e => {
    e.preventDefault();
    this.props.addClient(this.state.client, "post");
    this.setState({
      client: {
        first_name: "",
        last_name: "",
        email: "",
        phone: "",
        address: "",
        city: "",
        state: "",
        zip_code: ""
      }
    });
  };

  render() {
    return (
      <div>
        <Form
          client={this.state.client}
          onSubmit={this.onSubmit}
          onChange={this.onChange}
          title="Add Client"
          button="Create Client"
        />
      </div>
    );
  }
}

export default connect(null, { addClient })(ClientCreate);

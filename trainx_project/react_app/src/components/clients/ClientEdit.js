import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";

import Form from "../common/Form";
import { updateClient } from "../../actions/clients";

export class ClientEdit extends Component {
  state = {
    focus: true,
    client: {
      id: "",
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

  saveClientToState = () => {
    const id = this.props.match.params.id;
    const client = this.props.clients.filter(obj => obj.id === parseInt(id))[0];

    const {
      first_name,
      last_name,
      email,
      phone,
      address,
      city,
      state,
      zip_code
    } = client;
    this.setState({
      client: {
        id: id,
        first_name: first_name,
        last_name: last_name,
        email: email,
        phone: phone,
        address: address,
        city: city,
        state: state,
        zip_code: zip_code
      }
    });
  };

  componentDidMount() {
    this.saveClientToState();
    console.log("edit props", this.props.location);
  }

  onChange = e => {
    this.setState({
      client: { ...this.state.client, [e.target.name]: e.target.value }
    });
  };

  onSubmit = e => {
    e.preventDefault();
    const { id } = this.state.client;
    this.props.updateClient(this.state.client, "put", id);
    this.props.history.push("/");
  };

  render() {
    if (!this.state.focus) {
      this.saveClientToState();
    }
    return (
      <div>
        <Form
          client={this.state.client}
          onSubmit={this.onSubmit}
          onChange={this.onChange}
          button="Edit Client"
          title="Edit Client"
        />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  clients: state.clients.clients
});

export default connect(mapStateToProps, { updateClient })(
  withRouter(ClientEdit)
);

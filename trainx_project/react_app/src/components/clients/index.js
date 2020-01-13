import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import ClientList from "./ClientList";
import { getClients } from "../../actions/clients";

export class index extends Component {
  state = {
    clients: this.props && this.props.clients
  };

  static propType = {
    getClients: PropTypes.func.isRequired,
    clients: PropTypes.array.isRequired
  };

  saveInState = () => {
    const clients = this.props.clients;
    this.setState({
      client: { ...this.state.client, clients }
    });
  };

  componentDidMount() {
    this.props.getClients();
    this.saveInState();
  }

  render() {
    return (
      <div>
        <ClientList clients={this.props.clients} />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  clients: state.clients.clients
});

export default connect(mapStateToProps, { getClients })(index);

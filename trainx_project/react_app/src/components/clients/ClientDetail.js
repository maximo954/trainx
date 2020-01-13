import React, { Component } from "react";
import { connect } from "react-redux";
import Moment from "react-moment";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { withRouter } from "react-router-dom";

import { deleteClient } from "../../actions/clients";

export class ClientDetail extends Component {
  state = {
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

  static propType = {
    getClient: PropTypes.func.isRequired,
    client: PropTypes.array.isRequired
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

  onDeleteClient = () => {
    console.log(typeof this.state.client.id);
    const { id } = this.state.client;
    this.props.deleteClient("delete", id);
    this.props.history.push("/");
  };

  componentDidMount() {
    this.saveClientToState();
  }

  render() {
    const { client } = this.state;

    return (
      <div className="mt-5">
        <ul className="nav nav-tabs">
          <li className="nav-item">
            <a className="nav-link active" data-toggle="tab" href="#home">
              Details
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" data-toggle="tab" href="#profile">
              Profile
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" data-toggle="tab" href="#profile">
              Program
            </a>
          </li>
        </ul>
        <div id="myTabContent" className="tab-content">
          <div className="tab-pane fade show active" id="home">
            <div className="container">
              <div className="row mt-5">
                <div className="col">
                  <p>
                    Raw denim you probably haven't heard of them jean shorts
                    Austin. Nesciunt tofu stumptown aliqua, retro synth master
                    cleanse. Mustache cliche tempor, williamsburg carles vegan
                    helvetica. Reprehenderit butcher retro keffiyeh dreamcatcher
                    synth. Cosby sweater eu banh mi, qui irure terry richardson
                    ex squid. Aliquip placeat salvia cillum iphone. Seitan
                    aliquip quis cardigan american apparel, butcher voluptate
                    nisi qui.
                  </p>
                </div>
                <div className="col">
                  <div className="row">
                    <div className="column">
                      <h4>Name :</h4>
                    </div>
                    <div className="column">
                      <h5 className="font-weight-normal">
                        {client && client.first_name}{" "}
                        {client && client.last_name}
                      </h5>
                    </div>
                  </div>
                  <div className="row">
                    <div className="column">
                      <h4>Email :</h4>
                    </div>
                    <div className="column">
                      <h5 className="font-weight-normal">
                        {client && client.email}
                      </h5>
                    </div>
                  </div>
                  <div className="row">
                    <div className="column">
                      <h4>Phone :</h4>
                    </div>
                    <div className="column">
                      <h5 className="font-weight-normal">
                        {client && client.phone}
                      </h5>
                    </div>
                  </div>
                  <div className="row">
                    <div className="column">
                      <h4>Address :</h4>
                    </div>
                    <div className="column">
                      <h5 className="font-weight-normal">
                        {client && client.address}
                      </h5>
                      <h5 className="font-weight-normal">
                        {client && client.city}
                      </h5>
                      <h5 className="font-weight-normal">
                        {client && client.state} {client && client.zip_code}
                      </h5>
                    </div>
                  </div>
                  <div className="row">
                    <div className="column">
                      <h4>Joined Date :</h4>
                    </div>
                    <div className="column">
                      <h5 className="font-weight-normal">
                        <div>
                          <Moment format="MM/DD/YYYY">
                            {client && client.created_at}
                          </Moment>
                        </div>
                      </h5>
                    </div>
                  </div>
                  <div className="row mt-3">
                    <div className="col">
                      <button
                        type="button"
                        className="btn btn-link"
                        style={{ marginLeft: -15 }}
                      >
                        <Link to={`/client/edit/${client && client.id}`}>
                          Edit Client
                        </Link>
                      </button>
                      <button
                        onClick={this.onDeleteClient}
                        type="button"
                        className="btn btn-link"
                      >
                        Delete Client
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="tab-pane fade" id="profile">
            <p>
              Food truck fixie locavore, accusamus mcsweeney's marfa nulla
              single-origin coffee squid. Exercitation +1 labore velit, blog
              sartorial PBR leggings next level wes anderson artisan four loko
              farm-to-table craft beer twee. Qui photo booth letterpress,
              commodo enim craft beer mlkshk aliquip jean shorts ullamco ad
              vinyl cillum PBR. Homo nostrud organic, assumenda labore aesthetic
              magna delectus mollit.
            </p>
          </div>
          <div className="tab-pane fade" id="dropdown1">
            <p>
              Etsy mixtape wayfarers, ethical wes anderson tofu before they sold
              out mcsweeney's organic lomo retro fanny pack lo-fi farm-to-table
              readymade. Messenger bag gentrify pitchfork tattooed craft beer,
              iphone skateboard locavore carles etsy salvia banksy hoodie
              helvetica. DIY synth PBR banksy irony. Leggings gentrify squid
              8-bit cred pitchfork.
            </p>
          </div>
          <div className="tab-pane fade" id="dropdown2">
            <p>
              Trust fund seitan letterpress, keytar raw denim keffiyeh etsy art
              party before they sold out master cleanse gluten-free squid
              scenester freegan cosby sweater. Fanny pack portland seitan DIY,
              art party locavore wolf cliche high life echo park Austin. Cred
              vinyl keffiyeh DIY salvia PBR, banh mi before they sold out
              farm-to-table VHS viral locavore cosby sweater.
            </p>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  clients: state.clients.clients
});

export default connect(mapStateToProps, { deleteClient })(
  withRouter(ClientDetail)
);

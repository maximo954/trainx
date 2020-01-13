import React from "react";
import Moment from "react-moment";
import { Link } from "react-router-dom";

const ClientList = ({ clients }) => {
  return (
    <div className="mt-5">
      <h1 className="mt-3">Client List</h1>
      <div className="float-right" style={{ marginTop: -38, marginBottom: 30 }}>
        <Link to="/client/add">Add Client</Link>
      </div>
      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col"></th>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">Phone</th>
            <th scope="col">Address</th>
            <th scope="col">City</th>
            <th scope="col">State</th>
            <th scope="col">Zip</th>
            <th scope="col">Created</th>
          </tr>
        </thead>
        <tbody>
          {clients &&
            clients.map(client => (
              <tr key={client.id}>
                <th scope="row">{client.id}</th>
                <td>
                  <Link to={`/client/${client.id}`}>
                    {client.first_name} {client.last_name}
                  </Link>
                </td>
                <td>{client.email}</td>
                <td>{client.phone}</td>
                <td>{client.address}</td>
                <td>{client.city}</td>
                <td>{client.state}</td>
                <td>{client.zip_code}</td>
                <td>
                  <Moment fromNow ago>
                    {client.created_at}
                  </Moment>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default ClientList;

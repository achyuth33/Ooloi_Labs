import { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import { BiSort } from "react-icons/bi";
import "./index.css";

class TableComponent extends Component {
  state = {
    table1: this.props.employeeData,
    table2: this.props.employeeData,
    table3: this.props.employeeData,
    table4: this.props.employeeData,
  };

  // Table 1 Functions

  onChangeSort = () => {
    let sortedNameData = this.state.table1.sort((a, b) =>
      a.person.name.localeCompare(b.person.name)
    );
    this.setState({ table1: sortedNameData });
  };

  onSortCity = () => {
    let citySortedData = this.state.table1.sort((a, b) =>
      a.city.localeCompare(b.city)
    );
    this.setState({ table1: citySortedData });
  };

  onSortEmail = () => {
    let emailSortedData = this.state.table1.sort((a, b) =>
      a.email.localeCompare(b.email)
    );
    this.setState({ table1: emailSortedData });
  };

  onSortJoiningDate = () => {
    let joiningDateSortedData = this.state.table1.sort((a, b) =>
      a.joiningDate.localeCompare(b.joiningDate)
    );
    this.setState({ table1: joiningDateSortedData });
  };

  onSortRole = () => {
    let roleSortedData = this.state.table1.sort((a, b) =>
      a.role.localeCompare(b.role)
    );
    this.setState({ table1: roleSortedData });
  };

  // Table 2 Function

  onClickNameSort = () => {
    let sortedName = this.state.table2.sort((a, b) =>
      a.person.name.localeCompare(b.person.name)
    );
    this.setState({ table2: sortedName });
  };

  // Table 3 Functions

  joiningDateSort = () => {
    const { table3 } = this.state;
    const sortedJoinDate = table3.employeeData.sort((a, b) =>
      a.person.name.localeCompare(b.person.name)
    );
    this.setState({ table3: sortedJoinDate });
  };

  onSortRoleTable3 = () => {
    let roleSortedData = this.state.table3.sort((a, b) =>
      a.role.localeCompare(b.role)
    );
    this.setState({ table3: roleSortedData });
  };

  // Table 4 functions
  onSortCityTable4 = () => {
    let citySortedData = this.state.table4.sort((a, b) =>
      a.city.localeCompare(b.city)
    );
    this.setState({ table4: citySortedData });
  };

  onSortRoleTable4 = () => {
    let roleSortedData = this.state.table4.sort((a, b) =>
      a.role.localeCompare(b.role)
    );
    this.setState({ table4: roleSortedData });
  };

  render() {
    return (
      <div className="d-flex flex-column">
        <div>
          <table class="table table-striped">
            <thead>
              <tr>
                <th>
                  Name
                  <button className="sort-button">
                    <BiSort onClick={this.onChangeSort} />
                  </button>
                </th>
                <th>
                  City
                  <button className="sort-button" onClick={this.onSortCity}>
                    <BiSort />
                  </button>
                </th>
                <th>
                  Email Address
                  <button className="sort-button" onClick={this.onSortEmail}>
                    <BiSort />
                  </button>
                </th>
                <th>
                  Joining Date
                  <button
                    className="sort-button"
                    onClick={this.onSortJoiningDate}
                  >
                    <BiSort />
                  </button>
                </th>
                <th>
                  Role
                  <button className="sort-button" onClick={this.onSortRole}>
                    <BiSort />
                  </button>
                </th>
              </tr>
            </thead>
            <tbody>
              {this.state.table1.map((each) => {
                return (
                  <tr key="">
                    <td>
                      <img
                        className="profile-image"
                        src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=388&q=80"
                        alt="s"
                      />{" "}
                      {each.person.name}
                    </td>
                    <td>{each.city}</td>
                    <td>
                      <a className="email" href={each.email}>
                        {each.email}
                      </a>
                    </td>
                    <td>{each.joiningDate}</td>
                    <td>{each.role}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>

        {/* Table 2 */}

        <div>
          <table className="table table-striped">
            <thead>
              <tr>
                <th>
                  Name
                  <button className="sort-button">
                    <BiSort onClick={this.onClickNameSort} />
                  </button>
                </th>

                <th>Email Address</th>

                <th>Role</th>
              </tr>
            </thead>
            <tbody>
              {this.state.table2.map((eachItem) => {
                return (
                  <tr>
                    <td>
                      <img
                        className="profile-image"
                        src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=388&q=80"
                        alt="s"
                      />
                      {eachItem.person.name}
                    </td>

                    <td>
                      <a className="email" href={eachItem.email}>
                        {eachItem.email}
                      </a>
                    </td>

                    <td>{eachItem.role}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>

        {/* Table 3 */}

        <div>
          <table class="table table-striped">
            <thead>
              <tr>
                <th>Email Address</th>
                <th>
                  Joining Date
                  <button
                    className="sort-button"
                    onClick={this.joiningDateSort}
                  >
                    <BiSort />
                  </button>
                </th>
                <th>
                  Role
                  <button
                    className="sort-button"
                    onClick={this.onSortRoleTable3}
                  >
                    <BiSort />
                  </button>
                </th>
              </tr>
            </thead>
            <tbody>
              {this.state.table3.map((eachData) => {
                return (
                  <tr>
                    <td>
                      <a className="email" href={eachData.email}>
                        {eachData.email}
                      </a>
                    </td>
                    <td>{eachData.joiningDate}</td>
                    <td>{eachData.role}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>

        {/* Table 4 */}

        <div>
          <table class="table table-striped">
            <thead>
              <tr>
                <th>Name</th>
                <th>
                  City
                  <button
                    className="sort-button"
                    onClick={this.onSortCityTable4}
                  >
                    <BiSort />
                  </button>
                </th>

                <th>Joining Date</th>
                <th>
                  Role
                  <button
                    className="sort-button"
                    onClick={this.onSortRoleTable4}
                  >
                    <BiSort />
                  </button>
                </th>
              </tr>
            </thead>
            <tbody>
              {this.state.table4.map((eachData) => {
                return (
                  <tr>
                    <td>
                      <img
                        className="profile-image"
                        src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=388&q=80"
                        alt="s"
                      />{" "}
                      {eachData.person.name}
                    </td>
                    <td>{eachData.city}</td>

                    <td>{eachData.joiningDate}</td>
                    <td>{eachData.role}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default TableComponent;
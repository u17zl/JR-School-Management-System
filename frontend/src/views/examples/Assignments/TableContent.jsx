import React from "react"

import { DropdownMenu, DropdownItem, UncontrolledDropdown, DropdownToggle, Table } from "reactstrap"

export default function TableContent(props) {
  const { isFetched, assignments } = props
  return (
    <Table className="align-items-center table-flush" responsive>
      <thead className="thead-light">
        <tr>
          <th scope="col">Id</th>
          <th scope="col">Name</th>
          <th scope="col">Description</th>
          <th scope="col">Start_At</th>
          <th scope="col">Due_At</th>
          <th scope="col" />
        </tr>
      </thead>
      <tbody>
        {isFetched &&
          assignments.map((assignment, index) => {
            return (
              <tr key={assignment._id}>
                <th scope="row">{index + 1}</th>
                <td>{assignment.name}</td>
                <td>{assignment.description}</td>
                <td>{assignment.startAt}</td>
                <td>{assignment.dueAt}</td>
                <td className="text-right">
                  <UncontrolledDropdown>
                    <DropdownToggle
                      className="btn-icon-only text-light"
                      href="#pablo"
                      role="button"
                      size="sm"
                      color=""
                      onClick={e => e.preventDefault()}
                    >
                      <i className="fas fa-ellipsis-v" />
                    </DropdownToggle>
                    <DropdownMenu className="dropdown-menu-arrow" right>
                      <DropdownItem href="#pablo" onClick={e => e.preventDefault()}>
                        View
                      </DropdownItem>
                      <DropdownItem
                        href="#pablo"
                        onClick={e => {
                          props.deleteAssignment(assignment._id)
                          props.getAllAssignments()
                        }}
                      >
                        Delete
                      </DropdownItem>
                    </DropdownMenu>
                  </UncontrolledDropdown>
                </td>
              </tr>
            )
          })}
      </tbody>
    </Table>
  )
}

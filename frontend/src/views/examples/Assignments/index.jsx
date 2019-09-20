import React from "react"

import {
  Card,
  CardHeader,
  CardFooter,
  Pagination,
  PaginationItem,
  PaginationLink,
  Container,
  Row
} from "reactstrap"

// core components
import Header from "components/Headers/Header.jsx"
import axios from "axios"
import AssignmentModal from "./AssignmentModal"
import Search from "./Search"
import TableContent from "./TableContent"

class Assignments extends React.Component {
  state = {
    isFetched: false,
    assignments: [],
    defaultModal: false
  }
  toggleModal = state => {
    this.setState({
      [state]: !this.state[state]
    })
  }
  getAllAssignments = async () => {
    let res = await axios.get("/api/assignments")
    const data = res.data

    if (data) {
      this.setState({ assignments: data })
      this.setState({ isFetched: true })
    }
  }

  toggleModal = state => {
    this.setState({
      [state]: !this.state[state]
    })
  }

  handleChange = (event, data) => {
    const name = event.target.name
    this.setState({
      [name]: event.target.value
    })
  }
  handleTimeChange = (dateTime, data) => {
    const name = data.name
    this.setState({
      [name]: dateTime._d
    })
  }
  createNewAssignment = async () => {
    const { name, description, startAt, dueAt } = this.state
    const res = await axios.post("/api/assignments", { name, description, startAt, dueAt })
    console.log(res.data)
  }

  deleteAssignment = async id => {
    const res = await axios.delete("/api/assignments", { data: { id } })
    console.log(res.data)
  }

  componentDidMount() {
    this.getAllAssignments()
  }
  render() {
    const { isFetched, assignments } = this.state
    return (
      <>
        <Header />
        {/* Page content */}
        <Container className="mt--7" fluid>
          {/* Table */}
          <Row>
            <div className="col">
              <Card className="shadow">
                <CardHeader className="border-0 d-flex">
                  <h1 className="mb-0">Assignments</h1>
                  <AssignmentModal
                    toggleModal={this.toggleModal}
                    defaultModal={this.state.defaultModal}
                    createNewAssignment={this.createNewAssignment}
                    handleChange={this.handleChange}
                    handleTimeChange={this.handleTimeChange}
                    getAllAssignments={this.getAllAssignments}
                  />
                  <Search />
                </CardHeader>
                <TableContent
                  isFetched={isFetched}
                  assignments={assignments}
                  deleteAssignment={this.deleteAssignment}
                  getAllAssignments={this.getAllAssignments}
                />
                <CardFooter className="py-4">
                  <nav aria-label="...">
                    <Pagination
                      className="pagination justify-content-end mb-0"
                      listClassName="justify-content-end mb-0"
                    >
                      <PaginationItem className="disabled">
                        <PaginationLink
                          href="#pablo"
                          onClick={e => e.preventDefault()}
                          tabIndex="-1"
                        >
                          <i className="fas fa-angle-left" />
                          <span className="sr-only">Previous</span>
                        </PaginationLink>
                      </PaginationItem>
                      <PaginationItem className="active">
                        <PaginationLink href="#pablo" onClick={e => e.preventDefault()}>
                          1
                        </PaginationLink>
                      </PaginationItem>
                      <PaginationItem>
                        <PaginationLink href="#pablo" onClick={e => e.preventDefault()}>
                          2 <span className="sr-only">(current)</span>
                        </PaginationLink>
                      </PaginationItem>
                      <PaginationItem>
                        <PaginationLink href="#pablo" onClick={e => e.preventDefault()}>
                          3
                        </PaginationLink>
                      </PaginationItem>
                      <PaginationItem>
                        <PaginationLink href="#pablo" onClick={e => e.preventDefault()}>
                          <i className="fas fa-angle-right" />
                          <span className="sr-only">Next</span>
                        </PaginationLink>
                      </PaginationItem>
                    </Pagination>
                  </nav>
                </CardFooter>
              </Card>
            </div>
          </Row>
        </Container>
      </>
    )
  }
}

export default Assignments

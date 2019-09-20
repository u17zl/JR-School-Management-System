import React from "react"
// reactstrap components
import {
  Button,
  FormGroup,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Modal
} from "reactstrap"

import DateTimePicker from "./DateTimePicker"

function AssignmentModal(props) {
  return (
    <>
      <Button
        color="primary"
        size="md"
        type="button"
        className="ml-4"
        onClick={() => props.toggleModal("defaultModal")}
      >
        New assignment
      </Button>
      <Modal
        className="modal-dialog-centered"
        isOpen={props.defaultModal}
        toggle={() => props.toggleModal("defaultModal")}
      >
        <div className="modal-header">
          <h3 className="modal-title" id="defaultModalLabel">
            New Assignment
          </h3>
          <button
            aria-label="Close"
            className="close"
            data-dismiss="modal"
            type="button"
            onClick={() => props.toggleModal("defaultModal")}
          >
            <span aria-hidden={true}>×</span>
          </button>
        </div>
        <div className="modal-body">
          <Form role="form">
            <FormGroup className="mb-3">
              <InputGroup className="input-group-alternative">
                <InputGroupAddon addonType="prepend">
                  <InputGroupText>
                    <i className="fas fa-file-signature" />
                  </InputGroupText>
                </InputGroupAddon>
                <Input
                  placeholder="Assignment name"
                  type="text"
                  name="name"
                  onChange={props.handleChange}
                />
              </InputGroup>
            </FormGroup>
            <FormGroup>
              <InputGroup className="input-group-alternative">
                <InputGroupAddon addonType="prepend">
                  <InputGroupText>
                    <i className="fas fa-file-word" />
                  </InputGroupText>
                </InputGroupAddon>
                <Input
                  id="exampleFormControlTextarea1"
                  placeholder="Write some description here (optional)..."
                  rows="3"
                  type="textarea"
                  name="description"
                  onChange={props.handleChange}
                />
              </InputGroup>
            </FormGroup>
            <DateTimePicker handleTimeChange={props.handleTimeChange} />
          </Form>
        </div>
        <div className="modal-footer">
          <Button
            color="secondary"
            data-dismiss="modal"
            type="button"
            onClick={() => props.toggleModal("defaultModal")}
          >
            Close
          </Button>
          <Button
            color="primary"
            type="button"
            onClick={() => {
              props.createNewAssignment()
              props.toggleModal("defaultModal")
              props.getAllAssignments()
            }}
          >
            Create
          </Button>
        </div>
      </Modal>
    </>
  )
}

export default AssignmentModal

import React from "react"
import {
  FormGroup,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup
} from "reactstrap"
function Search() {
  return (
    <Form className="navbar-search form-inline mr-3 d-none d-md-flex ml-lg-auto">
      <FormGroup>
        <InputGroup className="input-group-alternative mb-0">
          <InputGroupAddon addonType="prepend">
            <InputGroupText>
              <i className="ni ni-zoom-split-in" />
            </InputGroupText>
          </InputGroupAddon>
          <Input className="form-control-alternative" placeholder="Search" type="text" />
        </InputGroup>
      </FormGroup>
    </Form>
  )
}

export default Search

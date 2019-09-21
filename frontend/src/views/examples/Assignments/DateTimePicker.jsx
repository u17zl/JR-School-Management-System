import React from "react"
// react plugin used to create datetimepicker
import ReactDatetime from "react-datetime"

// reactstrap components
import { FormGroup, InputGroupAddon, InputGroupText, InputGroup, Col, Row } from "reactstrap"

function Datepicker(props) {
  return (
    <>
      <Row>
        <Col xs={12}>
          <FormGroup>
            <InputGroup className="input-group-alternative">
              <InputGroupAddon addonType="prepend">
                <InputGroupText>
                  <i className="ni ni-calendar-grid-58" />
                </InputGroupText>
              </InputGroupAddon>
              <ReactDatetime
                inputProps={{
                  placeholder: "Date Picker Here"
                }}
                renderDay={(props, currentDate, selectedDate) => {
                  let classes = props.className
                  if (
                    props.startDate &&
                    props.endDate &&
                    props.startDate._d + "" === currentDate._d + ""
                  ) {
                    classes += " start-date"
                  } else if (
                    props.startDate &&
                    props.endDate &&
                    new Date(props.startDate._d + "") < new Date(currentDate._d + "") &&
                    new Date(props.endDate._d + "") > new Date(currentDate._d + "")
                  ) {
                    classes += " middle-date"
                  } else if (props.endDate && props.endDate._d + "" === currentDate._d + "") {
                    classes += " end-date"
                  }
                  return (
                    <td {...props} className={classes}>
                      {currentDate.date()}
                    </td>
                  )
                }}
            
                onChange={event => props.handleTimeChange(event,{name:"startAt"})}
                // onChange={e => this.setState({ startDate: e })}
              />
            </InputGroup>
          </FormGroup>
        </Col>
        <Col xs={12}>
          <FormGroup>
            <InputGroup className="input-group-alternative">
              <InputGroupAddon addonType="prepend">
                <InputGroupText>
                  <i className="ni ni-calendar-grid-58" />
                </InputGroupText>
              </InputGroupAddon>
              <ReactDatetime
                inputProps={{
                  placeholder: "Date Picker Here"
                }}
                renderDay={(props, currentDate, selectedDate) => {
                  let classes = props.className
                  if (
                    props.startDate &&
                    props.endDate &&
                    props.startDate._d + "" === currentDate._d + ""
                  ) {
                    classes += " start-date"
                  } else if (
                    props.startDate &&
                    props.endDate &&
                    new Date(props.startDate._d + "") < new Date(currentDate._d + "") &&
                    new Date(props.endDate._d + "") > new Date(currentDate._d + "")
                  ) {
                    classes += " middle-date"
                  } else if (props.endDate && props.endDate._d + "" === currentDate._d + "") {
                    classes += " end-date"
                  }
                  return (
                    <td {...props} className={classes}>
                      {currentDate.date()}
                    </td>
                  )
                }}
              
                onChange={event => props.handleTimeChange(event,{name:"dueAt"})}
                // onChange={e => this.setState({ endDate: e })}
              />
            </InputGroup>
          </FormGroup>
        </Col>
      </Row>
    </>
  )
}

export default Datepicker

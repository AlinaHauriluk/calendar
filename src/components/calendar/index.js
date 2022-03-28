import React from "react";
import FullCalendar from "@fullcalendar/react";
import daygridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import { useState, useEffect} from "react";
import { events, time, data } from "../../config/config";
import { Wrapper, Title, Input, SubTitle, Data, Price, Button, Container, Add, FlexColumn  } from "./calendar";
import "react-datepicker/dist/react-datepicker.css";

const Calendar = () => {
  const [newEvent, setNewEvent] = useState({
    title: "",
    start: "",
    allDay: true,
    email: ''
  });

  const [allEvents, setAllEvents] = useState(events);

  const [price, setPrice] = useState(0);

  useEffect(() => {
    if (
      String(newEvent.start).substring(0, 3) === "Sat" ||
      String(newEvent.start).substring(0, 3) === "Sun"
    ) {
      setPrice(price + 30);
    }
    if (
      String(newEvent.start).substring(0, 3) === "Mon" ||
      String(newEvent.start).substring(0, 3) === "Tue"||String(newEvent.start).substring(0, 3) === "Wed"||String(newEvent.start).substring(0, 3) === "Thu"|| String(newEvent.start).substring(0, 3) === "Fri"
    ) {
      setPrice(price + 10);
    }
  }, [allEvents]);

  return (
    <Wrapper>
      <div>
        <Title>Resrvation</Title>
        <form action="#" method="post" onSubmit={(e)=> {e.preventDefault(); console.log(newEvent)}}>
        <Input
          required
          type="text"
          placeholder="Your Surname"
          value={newEvent.title}
          onChange={(e) => {
            setNewEvent({ ...newEvent, title: e.target.value });
          }}
        />
        <SubTitle>Choose Days</SubTitle>
        <Data
          required
          timeIntervals={120}
          minDate={new Date()}
          placeholderText="Your Date"
          showTimeSelect
          selected={newEvent.start}
          onChange={(start) => {
            setNewEvent({ ...newEvent, start});
          }}
          withPortal
          excludeDates={data}
          dateFormat="MMMM d, yyyy h:mm aa"
          excludeTimes={time}
        />

        <SubTitle>Price: <Price>{price} BYN</Price></SubTitle>
        <Add
          onClick={() => {
            setAllEvents([...allEvents, newEvent]);
          }}
        >
          Add
        </Add>
        <FlexColumn>
          <Input
            required
            type="email"
            placeholder="Your Email"
            value={newEvent.email}
            onChange={(e) => {
              setNewEvent({ ...newEvent, email: e.target.value });
            }}
          />
          <Button style={{display: 'inline-block', marginTop: '50px'}} type='submit'>
            Send
          </Button>
        </FlexColumn>
        </form>
      </div>
      <Container>
        <FullCalendar
          plugins={[daygridPlugin, interactionPlugin]}
          events={allEvents}
        />
      </Container>
    </Wrapper>
  );
};

export default Calendar;
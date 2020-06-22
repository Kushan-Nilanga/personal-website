import React from "react";
import Navigation from "../components/navigation";

class Contact extends React.Component {
  render() {
    return (
      <div>
        <Navigation
          header="My Contact Details"
          description="This is the descriptions"
        />
        This is the Contact Page
      </div>
    );
  }
}

export default Contact;

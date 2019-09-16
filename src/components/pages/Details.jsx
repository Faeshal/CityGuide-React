import React, { Component } from "react";
import { infoConsumer } from "../context";

class Details extends Component {
  render() {
    return (
      <infoConsumer>
        {data => {
          const {
            id,
            headerTitle,
            headerSubTitle,
            headerText,
            img,
            title,
            maps,
            description
          } = data.detailInfo;
        }}

        return(
            <div>
                <div className="container-fluid align-items-center">
                    <h1 className="font-weight-bold"></h1>
                </div>
            </div>
        )

      </infoConsumer>
    );
  }
}

export default Details;

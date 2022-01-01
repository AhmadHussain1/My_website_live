import React from "react";

import Card from "./Card";
import { Sdata } from "./Sdata";

export default function Service() {
  return (
    <div>
      <div className="my-5">
        <h1 className="text-center">Our Service</h1>
      </div>

      <div className="container-fluid mb-5">
        <div className="row">
          <div className="col-10 mx-auto">
            <div className="row gy-4">
              {Sdata.map((item, ind) => {
                return (
                  <Card
                    key={ind}
                    imgsrc={item.imgsrc}
                    title={item.title}
                  ></Card>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

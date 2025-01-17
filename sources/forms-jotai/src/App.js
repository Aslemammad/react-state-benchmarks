import React from "react";
import { atom, useAtom } from "jotai";

import Form from "./Form";
import * as c from "./constants";

import { typeTextInRandomInput } from "./inputs";

async function infiniteBobRoss() {
  while (true) {
    await typeTextInRandomInput();
  }
}

const initializeAtoms = () => {
  const atoms = [];
  for (let key = 0; key < c.NUMBER_OF_INPUTS; key++) {
    atoms.push(atom(""));
  }
  return atoms;
};

const atoms = initializeAtoms();

const App = () => {
  return (
    <div>
      <button onClick={infiniteBobRoss}>Type Text</button>
      <div className="row">
        {atoms.map((sliceAtom, idx) => {
          return (
            <div
              style={{ display: "inline-block", minWidth: 70 }}
              key={`${sliceAtom}`}
            >
              <Form id={idx} atom={sliceAtom} />
            </div>
          );
        })}
      </div>
    </div>
  );
};
App.displayName = "App";

export default App;

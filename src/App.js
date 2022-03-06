import React, { Component } from 'react';
import { HexGrid, Layout, Hexagon, Text, GridGenerator, HexUtils } from 'react-hexgrid';
import configs from './configurations';
import './App.css';
import hexes from "./constituencies.js";

class App extends Component {
  constructor(props) {
    super(props);
    const config = configs['hexagon'];
    const generator = GridGenerator.getGenerator(config.map);
    const hexagons = generator.apply(this, config.mapProps);
    this.state = { hexagons, config };
  }

  changeType(event) {
    const name = event.currentTarget.value;
    const config = configs[name];
    const generator = GridGenerator.getGenerator(config.map);
    const hexagons = generator.apply(this, config.mapProps);
    this.setState({ hexagons, config });
  }

  render() {
    const { hexagons, config } = this.state;
    const layout = config.layout;
    const size = { x: 1.6, y: 1.6 };
    return (
      <div className="App">
        <h2>Select grid type and configuration from dropdown.</h2>
        <div>
          <strong>Template: </strong>
          <select onChange={(ev) => this.changeType(ev)}>
            {Object.keys(configs).map((type) => (
              <option name={type}>{type}</option>
            ))}
          </select>
        </div>
        <hr />
        <HexGrid width={config.width} height={config.height} >
          {/* <Layout size={size} flat={layout.flat} spacing={layout.spacing} origin={config.origin}> */}
          <Layout size={size} flat={layout.flat} spacing={layout.spacing} origin={config.origin}>
            {
              // note: key must be unique between re-renders.
              // using config.mapProps+i makes a new key when the goal template chnages.
              // hexes.map((hex, index) => (
           
              //   <Hexagon key={hex.id} q={hex.q} r={hex.r} s={1} >
              //     <Text>{index}</Text>
              //   </Hexagon>
              // ))
             hexes.map((hex, i) => <Hexagon key={hex.id} q={hex.q} r={hex.r} s={1} className={"className"} />) 
            //   <Hexagon key={1} q={-3} r={-1} s={1} >
            //   {/* <Text>{index}</Text> */}
            // </Hexagon>
            }
          </Layout>
        </HexGrid>
      </div>
    );
  }
}

export default App;


// import React, { Component } from 'react';
// import { GridGenerator, HexGrid, Layout, Path, Hexagon, Text, Pattern, Hex } from 'react-hexgrid';
// import './App.css';
// // import { hexes } from "./hexes.js";
// import hexes from "./constituencies.js";

// class App extends Component {
//   render() {
//     const hexagonSize = { x: 1000, y: 1000 };
//     const moreHexas = GridGenerator.parallelogram(-20, 20, -20, 20);
//     return (
//       <div className="App">
//         <h2>React Hexgrid v1</h2>
//         <p>Constructing Hexgrid with component-based approach with custom SVG elements.</p>
//         <HexGrid width={1200} height={1000} >
//           {/* Main grid with bit hexagons, all manual */}

//           {/* Additional small grid, hexagons generated with generator */}
//           <Layout size={{ x: 1, y: 1}} >
//             {/* { moreHexas.map((hex, i) => <Hexagon key={i} q={hex.q} r={hex.r} s={0} />) } */}
//             { hexes.map((hex, i) => <Hexagon key={hex.id} q={hex.q} r={hex.r} s={1} />) }

//             {
//     // hexes.map((constituency) => {
//     //   console.log(constituency)
//     //     return(

//     //       constituency.map((hex) => {
//     //         console.log(hex)
//     //             return ( 
//     //               <Hexagon key={hex.id} q={hex.q} r={hex.r} s={0} />
//     //             )
//     //         })
//     //     )
//     // })
// }
            
//           </Layout>
//           {/* You can define multiple patterns and switch between them with "fill" prop on Hexagon */}

//         </HexGrid>
//       </div>
//     );
//   }
// }

// export default App;
// // var ReactCSSTransitionGroup = React.addons.CSSTransitionGroup;

// // class Carousel extends React.Component {
    
// //     constructor(props) {
// //         super(props)
// //         this.state = {
// //             items: this.props.items,
// //             active: this.props.active,
// //             direction: ''
// //         }
// //         this.rightClick = this.moveRight.bind(this)
// //         this.leftClick = this.moveLeft.bind(this)
// //     }

// //     generateItems() {
// //         var items = []
// //         var level
// //         console.log(this.state.active)
// //         for (var i = this.state.active - 2; i < this.state.active + 3; i++) {
// //             var index = i
// //             if (i < 0) {
// //                 index = this.state.items.length + i
// //             } else if (i >= this.state.items.length) {
// //                 index = i % this.state.items.length
// //             }
// //             level = this.state.active - i
// //             items.push(<Item key={index} id={this.state.items[index]} level={level} />)
// //         }
// //         return items
// //     }
    
// //     moveLeft() {
// //         var newActive = this.state.active
// //         newActive--
// //         this.setState({
// //             active: newActive < 0 ? this.state.items.length - 1 : newActive,
// //             direction: 'left'
// //         })
// //     }
    
// //     moveRight() {
// //         var newActive = this.state.active
// //         this.setState({
// //             active: (newActive + 1) % this.state.items.length,
// //             direction: 'right'
// //         })
// //     }
    
// //     render() {
// //         return(
// //             <div id="carousel" className="noselect">
// //                 <div className="arrow arrow-left" onClick={this.leftClick}><i className="fi-arrow-left"></i></div>
// //                 <ReactCSSTransitionGroup 
// //                     transitionName={this.state.direction}>
// //                     {this.generateItems()}
// //                 </ReactCSSTransitionGroup>
// //                 <div className="arrow arrow-right" onClick={this.rightClick}><i className="fi-arrow-right"></i></div>
// //                 <div className="basedOn">Based on: <strong><a href="https://codepen.io/andyNroses/pen/KaENLb" target="_blank">andyNroses</a></strong></div>
// //             </div>
// //         )
// //     }
// // }

// // class Item extends React.Component {
    
// //     constructor(props) {
// //         super(props)
// //         this.state = {
// //             level: this.props.level
// //         }
// //     }
    
// //     render() {
// //         const className = 'item level' + this.props.level
// //         return(
// //             <div className={className}
// //                 style={{
// //                     backgroundImage: "url(http://lorempixel.com/400/200/)",
// //                     backgroundSize: "cover",
// //                     backgroundRepeat: "no-repeat",
// //                     backgroundPosition: "center center",
// //                 }}
// //                 >
// //             </div>
// //         )
// //     }
// // }

// // var items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 12]
// // ReactDOM.render(<Carousel items={items} active={0}/>, document.getElementById('app'))
// import React, { Component } from "react";
// import ReactDOM from "react-dom";
// import { TransitionGroup, CSSTransition } from "react-transition-group";

// class Carousel extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       items: this.props.items,
//       active: this.props.active,
//       direction: "",
//     };
//     this.rightClick = this.moveRight.bind(this);
//     this.leftClick = this.moveLeft.bind(this);
//   }

//   generateItems() {
//     let items = [];
//     let level;
//     for (let i = this.state.active - 2; i < this.state.active + 3; i++) {
//       let index = i;
//       if (i < 0) {
//         index = this.state.items.length + i;
//       } else if (i >= this.state.items.length) {
//         index = i % this.state.items.length;
//       }
//       level = this.state.active - i;
//       items.push(
//         <Item key={index} id={this.state.items[index]} level={level} />
//       );
//     }
//     return items;
//   }

//   moveLeft() {
//     let newActive = this.state.active - 1;
//     this.setState({
//       active: newActive < 0 ? this.state.items.length - 1 : newActive,
//       direction: "left",
//     });
//   }

//   moveRight() {
//     let newActive = (this.state.active + 1) % this.state.items.length;
//     this.setState({
//       active: newActive,
//       direction: "right",
//     });
//   }

//   render() {
//     return (
//       <div id="carousel" className="noselect">
//         <div className="arrow arrow-left" onClick={this.leftClick}>
//           &#8592;
//         </div>
//         <TransitionGroup className="carousel-container">
//           {this.generateItems().map((item, index) => (
//             <CSSTransition
//               key={index}
//               timeout={500}
//               classNames={this.state.direction}
//             >
//               {item}
//             </CSSTransition>
//           ))}
//         </TransitionGroup>
//         <div className="arrow arrow-right" onClick={this.rightClick}>
//           &#8594;
//         </div>
//       </div>
//     );
//   }
// }

// class Item extends Component {
//   render() {
//     const className = "item level" + this.props.level;
//     return (
//       <div
//         className={className}
//         style={{
//           backgroundImage: `url(${this.props.id})`,
//           backgroundSize: "cover",
//           backgroundRepeat: "no-repeat",
//           backgroundPosition: "center center",
//         }}
//       ></div>
//     );
//   }
// }

// const items = [
//   "https://via.placeholder.com/400x200?text=1",
//   "https://via.placeholder.com/400x200?text=2",
//   "https://via.placeholder.com/400x200?text=3",
//   "https://via.placeholder.com/400x200?text=4",
//   "https://via.placeholder.com/400x200?text=5",
// ];

// // ReactDOM.render(
// //   <Carousel items={items} active={0} />,
// //   document.getElementById("app")
// // );

// const root = ReactDOM.createRoot(document.getElementById("dest"));
// root.render(<Carousel items={items} active={0} />);


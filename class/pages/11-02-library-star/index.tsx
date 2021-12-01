import { Rate } from "antd";
import { useState } from "react";

export default function LibraryStarPage() {
  const [value, setValue] = useState(3);

  function handleChange(value: number) {
    setValue(value);
  }

  return (
    <span>
      <Rate onChange={handleChange} value={value} />
    </span>
  );
}

// 원본
// import { Rate } from 'antd';

// const desc = ['terrible', 'bad', 'normal', 'good', 'wonderful'];

// class Rater extends React.Component {
//   state = {
//     value: 3,
//   };

//   handleChange = value => {
//     this.setState({ value });
//   };

//   render() {
//     const { value } = this.state;
//     return (
//       <span>
//         <Rate tooltips={desc} onChange={this.handleChange} value={value} />
//         {value ? <span className="ant-rate-text">{desc[value - 1]}</span> : ''}
//       </span>
//     );
//   }
// }

// ReactDOM.render(<Rater />, mountNode);

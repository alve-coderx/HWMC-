import { Progress } from 'antd';

const CircleProgress = (props) => {

 
  return <Progress
    type="circle"
    width={75}
    trailColor="rgb(0 0 0 / 0%)"
    strokeColor={{
      '0%': 'PURPLE',
      '100%': '#17AB9C',
    }}
    strokeWidth="3"
    percent={props.value.toFixed(0)}
     format={() => <div className="font-medium text-dark dark:text-white" >{props.value.toFixed(0) + '%'}</div>}
  />;
};

export default CircleProgress;
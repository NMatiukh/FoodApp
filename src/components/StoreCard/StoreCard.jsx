import style from './StoreCard.module.css'
import {Button, Input, InputNumber, Typography} from "antd";
import {DeleteOutlined} from '@ant-design/icons'
import {useState} from "react";

const {Text, Title} = Typography;
const StoreCard = (props) => {
    const [number, setNumber] = useState(1);
    const onInputChange = (event) => {
        if (event.target.value > 0) {
            setNumber(parseInt(event.target.value))
            props.changePrice(event.target.value, props.obj)
        } else {
            props.deleteFromStore(props.obj)

        }

    }

    return (
        <div className={style.container}>
            <img src={props.obj.img} alt={props.obj.name}/>
            <Title level={4}>{props.obj.name}</Title>
            <Text strong>${props.obj.price}</Text>
            <input value={number} type={"number"} onChange={onInputChange}/>
            <Button onClick={() => props.deleteFromStore(props.obj)} icon={<DeleteOutlined/>}/>
        </div>
    );
}
export default StoreCard;
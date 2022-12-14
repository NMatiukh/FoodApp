import style from './StoreCard.module.css'
import {Avatar, Button, InputNumber, List, Skeleton, Typography} from "antd";
import {DeleteOutlined} from '@ant-design/icons'
import {useState} from "react";

const StoreCard = (props) => {
    const [number, setNumber] = useState(1);
    const onInputChange = (event) => {
        if (event > 0) {
            setNumber(parseInt(event))
            props.changePrice(event, props.obj)
        } else {
            props.deleteFromStore(props.obj)
        }

    }

    return (
        <List.Item
            actions={[<Button onClick={() => props.deleteFromStore(props.obj)} icon={<DeleteOutlined/>}/>]}
        >
            <Skeleton avatar title={false} loading={props.obj.loading} active>
                <List.Item.Meta
                    avatar={<Avatar src={props.obj.img}/>}
                    title={props.obj.name}
                    description={<Typography.Text strong>${props.obj.price * props.obj.quantity}</Typography.Text>}
                />
                <div>
                    <InputNumber value={number} type={"number"} onChange={onInputChange}/></div>
            </Skeleton>
        </List.Item>
    );
}
export default StoreCard;
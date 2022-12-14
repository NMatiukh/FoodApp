import style from './Card.module.css'
import {Button, Card, Typography} from "antd";
import Meta from "antd/es/card/Meta";
import {PlusOutlined, ShoppingOutlined} from "@ant-design/icons";

const {Text, Title} = Typography;
const CardMain = (props) => {
    return (
        <Card
            hoverable
            cover={<img src={props.obj.img} alt={props.obj.name}/>}
            style={{
                width: 300,
                // height: 400
            }}
            actions={[
                <Text strong>${props.obj.price}</Text>,
                <Button onClick={() => props.addToStore(props.obj)} icon={<PlusOutlined/>}>Add</Button>
            ]}
        >
            <Meta style={{height: 100}} title={props.obj.name} description={props.obj.description}/>
        </Card>
    );
}
export default CardMain;
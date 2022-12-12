import style from './Card.module.css'
import {Button, Typography} from "antd";

const {Text, Title} = Typography;
const Card = (props) => {
    return (
        <div className={style.container}>
            <img src={props.obj.img} alt={props.obj.name}/>
            <Title>{props.obj.name}</Title>
            <Text type="secondary">{props.obj.description}</Text>
            <div className={style.cardFooter}>
                <Text strong>${props.obj.price}</Text>
                <Button onClick={() => props.addToStore(props.obj)}>Buy</Button>
            </div>
        </div>
    );
}
export default Card;
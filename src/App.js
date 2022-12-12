import './App.css'
import objsArr from './data.json'
import {useState} from "react";
import Card from "./components/Card/Card";
import {Button, Typography} from "antd";
import StoreCard from "./components/StoreCard/StoreCard";

const {Text} = Typography;

const App = () => {
    const [data, setData] = useState([...objsArr]);
    const [store, setStore] = useState([]);

    function addToStore(obj) {
        if (store.filter(value => value.id === obj.id).length) {
            return null
        } else {
            setStore([...store, obj])
        }

    }

    function deleteFromStore(obj) {
        setStore(store.filter(value => value.id !== obj.id))
    }

    function changePrice(number, obj) {
        let arr = store.map(value => {
            if (obj.id === value.id) {
                return {...value, ...{quantity: number}}
            } else return value
        })
        setStore(arr)
    }

    const onButtonClick = (event) => {
        console.log(store)
        setStore([])
    }

    return (
        <div className={'main'}>
            <div className={"container"}>
                {
                    data.map(value => <Card obj={value} key={value.id} addToStore={addToStore}/>)
                }
            </div>
            <div className={'store'}>
                {
                    store.length === 0 ?
                        <Text type="danger">
                            pls add some product!
                        </Text> :
                        <div>
                            {
                                store.map(value => <StoreCard changePrice={changePrice}
                                                              deleteFromStore={deleteFromStore}
                                                              key={value.id}
                                                              obj={value}/>)
                            }
                        </div>
                }
                <div>
                    <Text strong>
                        Price:
                        ${store.length && store.map(value => value.price * value.quantity).reduce((previousValue, currentValue) => previousValue + currentValue)}
                    </Text>
                </div>
                <Button disabled={store.length === 0} onClick={onButtonClick} type={"primary"}
                        style={{width: "100%"}}>Buy!</Button>
            </div>
        </div>
    );
};

export default App;
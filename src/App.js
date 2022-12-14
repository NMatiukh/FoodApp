import './App.css'
import {useEffect, useState} from "react";
import Card from "./components/Card/Card";
import {Avatar, Button, Empty, InputNumber, List, Result, Skeleton, Space, Typography} from "antd";
import StoreCard from "./components/StoreCard/StoreCard";
import {DeleteOutlined, ShoppingOutlined} from "@ant-design/icons";
import axios from "axios";

const App = () => {
    const [status, setStatus] = useState(true);
    const [data, setData] = useState([]);
    const [store, setStore] = useState([]);


    async function getData() {
        await axios.get('https://reactlessons-f5f62-default-rtdb.europe-west1.firebasedatabase.app/data/-NJ6MQEOtkzUGZYCkwv9.json').then(response => setData(response.data))
    }

    async function postData(bodyData) {
        await axios.post('https://reactlessons-f5f62-default-rtdb.europe-west1.firebasedatabase.app/store.json', bodyData).then(response => {
            console.log(response)
        })
    }

    useEffect(() => {
        getData();
    }, []);

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
        postData(store)
        setStatus(!status)
    }

    return (
        <Space direction={"vertical"} align={"center"} style={{width: "100%"}} size={[16, 26]}>
            <Typography.Title>Food App 🍕</Typography.Title>
            {
                status ?
                    <div className={'main'}>
                        <Space align={"center"} size={[16, 16]} wrap className={'container'}>
                            {
                                data.map(value => <Card obj={value} key={value.id} addToStore={addToStore}/>)
                            }
                        </Space>
                        <Space size={[16, 8]} direction={"vertical"} className={'store'}>
                            {
                                !store.length ?
                                    <Empty image={Empty.PRESENTED_IMAGE_SIMPLE}/> :
                                    <List
                                        itemLayout="horizontal"
                                        dataSource={store}
                                        renderItem={(value) => (
                                            <StoreCard
                                                changePrice={changePrice}
                                                deleteFromStore={deleteFromStore}
                                                key={value.id}
                                                obj={value}
                                            />
                                        )}
                                    />
                            }
                            {
                                !!store.length && <div>
                                    <Typography.Title level={4} strong>
                                        Price:
                                        ${store.length && store.map(value => value.price * value.quantity).reduce((previousValue, currentValue) => previousValue + currentValue)}
                                    </Typography.Title>
                                </div>
                            }
                            <Button
                                icon={<ShoppingOutlined/>}
                                disabled={!store.length}
                                onClick={onButtonClick}
                                type={"primary"}
                                style={{width: "100%"}}>Buy</Button>
                        </Space>
                    </div> :
                    <Result
                        status="success"
                        title="Successfully Buy Pizza!"
                        subTitle={
                            <div>
                                <List
                                    itemLayout="horizontal"
                                    dataSource={store}
                                    renderItem={(value) => (
                                        <List.Item>
                                            <Skeleton avatar title={false} loading={value.loading} active>
                                                <List.Item.Meta
                                                    avatar={<Avatar src={value.img}/>}
                                                    title={value.name}
                                                    description={<Typography.Text
                                                        strong>${value.price * value.quantity}</Typography.Text>}
                                                />
                                                <Typography.Text>
                                                    {value.quantity}x
                                                </Typography.Text>
                                            </Skeleton>
                                        </List.Item>
                                    )}
                                />
                                <Typography.Title level={4} strong>
                                    Price:
                                    ${store.length && store.map(value => value.price * value.quantity).reduce((previousValue, currentValue) => previousValue + currentValue)}
                                </Typography.Title>
                            </div>
                        }
                        extra={[
                            <Button key={'buyAgain'} onClick={() => {
                                setStatus(!status)
                                setStore([])
                            }}>Buy Again</Button>,
                        ]}
                    />

            }


        </Space>
    );
};

export default App;
import {efficiencies} from "./efficiencies";
import {damage} from "./myHW";
import {Button, Form, InputNumber, Select, Typography} from "antd";
import {useState} from "react";

function CW() {
    const [test, setTest] = useState(0);
    const onFinish = (values) => {
        console.log(values)
        setTest(damage(efficiencies.filter(value=>value.name === values.type1)[0], efficiencies.filter(value=>value.name === values.type2)[0], values.damage, values.defense))
    };
    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };
    return (
        <div style={{width: "20%", margin: "100px auto"}}>
            <Typography.Title>{test}</Typography.Title>
            <Form
                name="basic"
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                autoComplete="off"
            >
                <Form.Item
                    label="Damage"
                    name="damage"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your username!',
                        },
                    ]}
                >
                    <InputNumber/>
                </Form.Item>

                <Form.Item
                    label="Defense"
                    name="defense"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your password!',
                        },
                    ]}
                >
                    <InputNumber/>
                </Form.Item>

                <Form.Item
                    label={"Hero type"}
                    name="type1"
                >
                    <Select options={efficiencies.map((value, index) => {
                        return {value: value.name, label: value.name}
                    })}></Select>
                </Form.Item>
                <Form.Item
                    label={"Opponent type"}
                    name="type2"
                >
                    <Select options={efficiencies.map((value, index) => {
                        return {value: value.name, label: value.name}
                    })}></Select>
                </Form.Item>

                <Form.Item
                    wrapperCol={{
                        offset: 8,
                        span: 16,
                    }}
                >
                    <Button type="primary" htmlType="submit">
                        Submit
                    </Button>
                </Form.Item>
            </Form>
        </div>
    );
}

export default CW;

import React from "react";
import { Button, Form, Input, notification } from "antd";
const { TextArea } = Input;
//Antd
import { Modal } from "antd";
interface IModalProps {
  children: React.ReactNode;
  isModalOpen?: any;
  handleOk?: any;
  handleCancel?: any;
  okText?: any;
  footer?: any;
  orderFor: any;
}

const OrderPopover = ({
  children,
  isModalOpen,
  handleOk,
  handleCancel,
  okText,
  footer,
  orderFor,
}: IModalProps) => {
  const [form] = Form.useForm();

  const handleContactSubmit = async (values: any) => {
    try {
      if (values) {
        console.log(values);
        notification.success({
          message: "Thankyou for contacting.We will reach you soon",
        });
        form.resetFields();
      }
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div>
      <Modal
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        closeIcon={true}
        okButtonProps={{
          style: {
            background: "var(--accent-color)",
          },
        }}
        okText={okText}
        footer={false}
        destroyOnClose={true}
      >
        <Form
          form={form}
          layout="vertical"
          className="flex flex-col items-center justify-center"
          onFinish={handleContactSubmit}
        >
          <div className="flex flex-col gap-4">
            <div className="">
              <div className="text-[16px] font-medium text-black">
                Your Name
              </div>
            </div>
            <Form.Item
              hasFeedback
              name="name"
              rules={[
                {
                  required: true,
                  message: "Please provide your full name",
                },
              ]}
              className="form-label"
            >
              <Input
                className="lg:w-[380px] w-[300px]"
                size="large"
                placeholder="Enter your full name here"
              />
            </Form.Item>
          </div>
          <div className="flex flex-col gap-4">
            <div className="">
              <div className="text-[16px] font-medium text-black">
                Your Order
              </div>
            </div>
            <Form.Item hasFeedback name="order" className="form-label">
              <Input
                className="lg:w-[380px] w-[300px]"
                size="large"
                placeholder="Enter your full name here"
                defaultValue={orderFor}
                readOnly
              />
            </Form.Item>
          </div>

          <div className="flex flex-col gap-4">
            <div className="">
              <div className="text-[16px] font-medium text-black">
                Email Address
              </div>
            </div>

            <Form.Item
              hasFeedback
              name="email"
              rules={[
                {
                  required: true,
                  message: "Please provide your email address",
                },
                {
                  pattern: /^[a-z][a-z0-9._]*@[a-z][a-z0-9]*.[a-z]+/,
                  message:
                    "Please provide your email address in correct format",
                },
              ]}
              className=""
            >
              <Input
                className="lg:w-[380px] w-[300px]"
                size="large"
                placeholder="Enter your email address here"
              />
            </Form.Item>
          </div>

          <div className="flex flex-col gap-4">
            <div className="">
              <div className="text-[16px] font-medium text-black ">Message</div>
            </div>
            <Form.Item
              hasFeedback
              name="message"
              rules={[
                { required: true, message: "Please provide your message" },
              ]}
              className="color-changer"
            >
              <TextArea
                rows={4}
                cols={10}
                className="lg:w-[380px] w-[300px]"
                placeholder="Enter your message please"
                autoSize={false}
              />
            </Form.Item>
          </div>

          <Form.Item className="">
            <Button
              htmlType="submit"
              size="large"
              style={{
                backgroundColor: "#f80710",
                color: "white",
              }}
              className="lg:w-[380px] w-[300px]"
            >
              Submit
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
};

export default OrderPopover;

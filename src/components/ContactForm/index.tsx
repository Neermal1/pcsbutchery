import { Button, Form, Input, notification } from "antd";
const { TextArea } = Input;

const Index = () => {
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
    <div id="contact-us" className="max-w-6xl px-4 mx-auto my-[180px]">
      <div className="grid lg:grid-cols-12 ">
        <div className="lg:text-[40px] text-[30px] lg:col-span-5 font-medium mb-4">
          <div className="sticky top-[110px] lg:text-start text-center flex flex-col gap-6">
            <div>
              Get in <span className="text-[#f80710] ">Touch With Us</span>
            </div>
            <div>
              <div
                style={{
                  fontSize: "16px",
                }}
                className="flex flex-col gap-4"
              >
                <a href="tel:+61 416 307 288">+61 416 307 288</a>
                <div>Shop 4/14 Oxford Rd, Ingleburn NSW 2565, Australia</div>
              </div>
            </div>
            <div>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d26460.149962668344!2d150.8375402881791!3d-34.00489315634431!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b12eb6398af0615%3A0x5017d681632bb90!2sIngleburn%20NSW%202565%2C%20Australia!5e0!3m2!1sen!2snp!4v1713503899620!5m2!1sen!2snp"
                loading="lazy"
                className="rounded-[8px] lg:px-0 px-4 w-full lg:h-[400px] h-[500px]"
              ></iframe>
            </div>
          </div>
        </div>

        <div className="lg:col-span-7 flex items-center justify-end">
          <div className="bg-[#1f1f1f] rounded-[8px] p-6 drop-shadow-lg">
            <Form
              form={form}
              layout="vertical"
              className="flex flex-col gap-4 "
              onFinish={handleContactSubmit}
            >
              <div className="flex flex-col gap-4">
                <div className="">
                  <div className="text-[16px] font-medium text-[white]">
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
                  <div className="text-[16px] font-medium text-[white]">
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
                  <div className="text-[16px] font-medium text-[white] ">
                    Phone Number
                  </div>
                </div>

                <Form.Item
                  hasFeedback
                  name="phone_number"
                  rules={[
                    {
                      required: true,
                      message: "Please provide your valid phone number",
                    },
                    {
                      pattern: /^[0-9]{10}$/,
                      message: "Mobile number must be 10 digits",
                    },
                  ]}
                  className=""
                >
                  <Input
                    className="lg:w-[380px] w-[300px]"
                    size="large"
                    placeholder="Enter your phone number here"
                  />
                </Form.Item>
              </div>

              <div className="flex flex-col gap-4">
                <div className="">
                  <div className="text-[16px] font-medium text-[white] ">
                    Message
                  </div>
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;

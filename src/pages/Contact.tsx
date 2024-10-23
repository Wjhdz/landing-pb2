import React from 'react';
import { Form, Input, Button } from '../utils/design';
import { globalStyles, colors, companyInfo } from '../variables';

const Contact: React.FC = () => {
  const onFinish = (values: any) => {
    console.log('Form values:', values);
    // Here you would typically send the form data to a server
  };

  return (
    <div style={globalStyles.container}>
      <h1 style={globalStyles.sectionTitle}>Contact Us</h1>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <div style={{ width: '45%' }}>
          <h2 style={globalStyles.sectionSubtitle}>Get in Touch</h2>
          <p>Email: {companyInfo.email}</p>
          <p>Phone: {companyInfo.phone}</p>
          <p>Address: {companyInfo.address}</p>
        </div>
        <div style={{ width: '45%' }}>
          <Form onFinish={onFinish} layout="vertical">
            <Form.Item name="name" label="Name" rules={[{ required: true }]}>
              <Input />
            </Form.Item>
            <Form.Item name="email" label="Email" rules={[{ required: true, type: 'email' }]}>
              <Input />
            </Form.Item>
            <Form.Item name="message" label="Message" rules={[{ required: true }]}>
              <Input.TextArea rows={4} />
            </Form.Item>
            <Form.Item>
              <Button type="primary" htmlType="submit" style={{ backgroundColor: colors.secondary }}>
                Send Message
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
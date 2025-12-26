import type { Meta, StoryObj } from '@storybook/react';
import { Input, Label, Form, FormField, FormLabel, FormControl, FormMessage, FormSubmit } from '@yd/ui';

const meta = {
  title: 'UI/Input',
  component: Input,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    type: { control: 'text' },
    placeholder: { control: 'text' },
    disabled: { control: 'boolean' },
  },
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    placeholder: 'Type something...',
  },
  render: (args) => (
    <div className="w-[300px]">
      <Input {...args} />
    </div>
  ),
};

export const WithForm: Story = {
  args: {
    type: "",
    placeholder: ""
  },

  render: () => (
    <Form className="w-[300px] space-y-4">
      <FormField name="username">
        <div className="space-y-2">
          <FormLabel>Username</FormLabel>
          <FormControl asChild>
            <Input placeholder="Enter username" required className="border-gray-300 focus:border-blue-500" />
          </FormControl>
          <FormMessage match="valueMissing">
            Please enter your username
          </FormMessage>
        </div>
      </FormField>
      <FormField name="email">
        <div className="space-y-2">
          <FormLabel>Email</FormLabel>
          <FormControl asChild>
            <Input type="email" placeholder="Enter email" required className="border-gray-300 focus:border-blue-500" />
          </FormControl>
          <FormMessage match="typeMismatch">
            Please enter a valid email
          </FormMessage>
          <FormMessage match="valueMissing">
            Please enter your email
          </FormMessage>
        </div>
      </FormField>
      <FormSubmit asChild>
        <button className="bg-slate-900 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2">
          Submit
        </button>
      </FormSubmit>
    </Form>
  )
};

export const WithLabel: Story = {
  args: {
    id: 'email',
    type: 'email',
    placeholder: 'Email',
  },
  render: (args) => (
    <div className="grid w-[300px] max-w-sm items-center gap-1.5">
      <Label htmlFor={args.id}>Email</Label>
      <Input {...args} />
    </div>
  ),
};

export const Disabled: Story = {
  args: {
    disabled: true,
    placeholder: 'Disabled input',
  },
  render: (args) => (
    <div className="w-[300px]">
      <Input {...args} />
    </div>
  ),
};

export const WithValue: Story = {
  args: {
    value: 'Read only value',
    readOnly: true,
  },
  render: (args) => (
    <div className="w-[300px]">
      <Input {...args} />
    </div>
  ),
};

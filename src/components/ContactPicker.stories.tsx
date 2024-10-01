// src/stories/ContactPicker.stories.tsx

import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import ContactPicker from '../components/ContactPicker';

export default {
  title: 'Example/ContactPicker',
  component: ContactPicker,
} as ComponentMeta<typeof ContactPicker>;

const Template: ComponentStory<typeof ContactPicker> = (args) => <ContactPicker {...args} />;

export const Default = Template.bind({});

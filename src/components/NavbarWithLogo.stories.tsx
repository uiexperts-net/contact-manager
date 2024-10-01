import React from 'react';
import { ThemeProvider } from '@mui/material/styles'; 
import NavbarWithLogo from './NavbarWithLogo';
import { Meta, StoryFn } from '@storybook/react';
import { light } from '@mui/material/styles/createPalette';

export default {
  title: 'Components/NavbarWithLogo',
  component: NavbarWithLogo,
  decorators: [
    (Story) => (
      <ThemeProvider theme={light}>
        <Story />
      </ThemeProvider>
    ),
  ],
} as Meta;

const Template: StoryFn<{ contactCount: number; groupCount: number }> = (args) => <NavbarWithLogo {...args} />;

export const Default = Template.bind({});
Default.args = {
  contactCount: 150,
  groupCount: 12,
};

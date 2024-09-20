// src/components/SplashScreen.stories.tsx
import React from 'react';
import { Meta, StoryObj } from '@storybook/react'; // New imports
import SplashScreen from './SplashScreen';

// Define metadata for Storybook
const meta: Meta<typeof SplashScreen> = {
  title: 'Components/SplashScreen',
  component: SplashScreen,
};

export default meta;

// Create a template for the SplashScreen component
type Story = StoryObj<typeof SplashScreen>;

export const Default: Story = {
  args: {
    // Add your props here, e.g.
    loading: true,
    message: 'Loading...',
  },
};

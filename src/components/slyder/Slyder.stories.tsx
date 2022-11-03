import React from 'react'

import { ComponentStory, ComponentMeta } from '@storybook/react'

import Slyder from './Slyder'
import './styles.css'
import './stories.css'

// eslint-disable-next-line
export default {
  title: 'Slyder',
  component: Slyder,
} as ComponentMeta<typeof Slyder>

const Template: ComponentStory<typeof Slyder> = (args) => <Slyder {...args} />

export const FirstStory = Template.bind({})

FirstStory.args = {
  /* 👇 The args you need here will depend on your component */
}

import React from 'react';

import { ComponentMeta, ComponentStory } from '@storybook/react';
import ArticleDetailsPage from './ArticleDetailsPage';

export default {
    title: 'features/ArticleDetailsPage',
    component: ArticleDetailsPage,
    argTypes: {},
} as ComponentMeta<typeof ArticleDetailsPage>;

const Template: ComponentStory<typeof ArticleDetailsPage> = () => <ArticleDetailsPage />;

export const Primary = Template.bind({});
Primary.args = {};

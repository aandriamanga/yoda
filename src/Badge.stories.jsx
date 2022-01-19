import React from "react";
import { Badge } from "./Badge";
import { Icon } from "./Icon";

export default {
  title: "Foundation/Badge",
  component: Badge,
  argTypes: {
    status: {
      control: {
        type: "select",
      },
      options: ["positive", "negative", "neutral", "error"],
    },
    icon: {
      control: {
        type: "select",
      },
      options: ["facehappy", "check"],
    },
  },
};

export const AllBadges = (args) => (
  <div>
    <Badge status="positive">Positive</Badge>
    <Badge status="negative">Negative</Badge>
    <Badge status="neutral">Neutral</Badge>
    <Badge status="error">Error</Badge>
    <Badge status="warning">Warning</Badge>
    <Badge status="positive">
      <Icon {...args} />
      with icon
    </Badge>
  </div>
);
AllBadges.args = {
  icon: "facehappy",
  inline: true,
};

AllBadges.storyName = "all badges";

export const Positive = (args) => <Badge {...args}>Positive</Badge>;
export const Negative = (args) => <Badge {...args}>Negative</Badge>;
export const Warning = (args) => <Badge {...args}>Warning</Badge>;
export const Neutral = (args) => <Badge {...args}>Neutral</Badge>;
export const Error = (args) => <Badge {...args}>Error</Badge>;
Positive.args = {
  status: "positive",
};
Negative.args = {
  status: "negative",
};
Warning.args = {
  status: "warning",
};
Neutral.args = {
  status: "neutral",
};
Error.args = {
  status: "error",
};

export const WithIcon = (args) => (
  <Badge {...args}>
    <Icon {...args} />
    with icon
  </Badge>
);
WithIcon.args = {
  status: "warning",
  icon: "check",
  inline: true,
};

WithIcon.storyName = "with icon";

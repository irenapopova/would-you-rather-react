import React, { Component } from 'react';
import {
  Accordion,
  Grid,
  Header,
  Icon,
  Image,
  Label,
  Message,
  Segment
} from 'semantic-ui-react';

const AccountSettingsHeader = props => (
  <Header as="h2" {...props}>
    <Icon name="settings" />
    <Header.Content>
      Account Settings
      <Header.Subheader>Manage your preferences</Header.Subheader>
    </Header.Content>
  </Header>
);

const FetchingMessage = () => (
  <Message icon>
    <Icon name="circle notched" loading />
    <Message.Content>
      <Message.Header>Just one second</Message.Header>
      We're fetching that content for you.
    </Message.Content>
  </Message>
);

const panels = [
  {
    key: 'what-is-buddy',
    title: 'What is a buddy?',
    content: [
      'A buddy is a friend. Known for its loyalty,',
      'friend in my city and across the world.'
    ].join(' ')
  },
  {
    key: 'kinds-of-buddies',
    title: 'What kinds of buddies are there?',
    content: [
      'There are many kinds. Each . We need diiferent budiies. ',
      'so we feel more comfortable in life.'
    ].join(' ')
  },
  {
    key: 'acquire-buddy',
    title: 'How do you acquire a buddy?',
    content: {
      content: (
        <div>
          <p>
            More socializing  - meet other friends , go parties .
          </p>
          <p>
            It helps .us to make more friends.
          </p>
        </div>
      )
    }
  }
];

const LabelRibbons = () => (
  <Segment>
    <Grid columns={2}>
      <Grid.Column>
        <Segment raised>
          <Label as="a" color="red" ribbon>
            Overview
          </Label>
          <span>Account Details</span>

          <Image src="/images/wireframe/paragraph.png" />

          <Label as="a" color="blue" ribbon>
            Community
          </Label>
          <span>User Reviews</span>

          <Image src="/images/wireframe/paragraph.png" />
        </Segment>
      </Grid.Column>

      <Grid.Column>
        <Segment>
          <Label as="a" color="orange" ribbon="right">
            Specs
          </Label>
          <Image src="/images/wireframe/paragraph.png" />

          <Label as="a" color="teal" ribbon="right">
            Reviews
          </Label>
          <Image src="/images/wireframe/paragraph.png" />
        </Segment>
      </Grid.Column>
    </Grid>
  </Segment>
);

export default class UITest1 extends Component {
  render() {
    return (
      <div>
        <AccountSettingsHeader dividing />
        <FetchingMessage />
        <Message
          success
          icon="thumbs up"
          header="Nice job!"
          content="Your profile is complete."
        />
        <Accordion defaultActiveIndex={0} panels={panels} styled />
        <LabelRibbons />
      </div>
    );
  }
}

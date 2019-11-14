import React, { Component, Fragment } from 'react';
import faker from 'faker';
import {
  Menu,
  Segment,
  Responsive,
  Image,
  Grid,
  Icon,
  Button
} from 'semantic-ui-react';

export class UITest2 extends Component {
  state = { activeItem: 'home' };

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  render() {
    const { activeItem } = this.state;
    return (
      <div>
        <Responsive as={Menu} minWidth={651} pointing secondary>
          <Menu.Item
            name="home"
            active={activeItem === 'home'}
            onClick={this.handleItemClick}
          />
          <Menu.Item
            name="new poll"
            active={activeItem === 'new poll'}
            onClick={this.handleItemClick}
          />
          <Menu.Item
            name="leader board"
            active={activeItem === 'leader board'}
            onClick={this.handleItemClick}
          />
          <Menu.Menu position="right">
            <Menu.Item>
              <span>
                <Image
                  src="images/avatars/avatar2.png"
                  avatar
                  spaced="right"
                  verticalAlign="bottom"
                />
                Irena Popova
              </span>
            </Menu.Item>
            <Menu.Item>
              <Button
                content="Logout"
                icon="arrow alternate circle right"
                labelPosition="right"
                basic
                compact
              />
            </Menu.Item>
          </Menu.Menu>
        </Responsive>
        <Responsive as={Fragment} minWidth={375} maxWidth={650}>
          <Grid columns={2}>
            <Grid.Row>
              <Grid.Column>
                <Image
                  src="images/avatars/avatar2.png"
                  avatar
                  spaced="right"
                  verticalAlign="bottom"
                />
                Irena Popova
              </Grid.Column>
              <Grid.Column verticalAlign="bottom" textAlign="right">
                <Button
                  content="Logout"
                  icon="arrow alternate circle right"
                  labelPosition="right"
                  basic
                  compact
                />
              </Grid.Column>
            </Grid.Row>
            <Grid.Row>
              <Grid.Column width={16}>
                <Menu pointing secondary widths={3}>
                  <Menu.Item
                    name="home"
                    active={activeItem === 'home'}
                    onClick={this.handleItemClick}
                  />
                  <Menu.Item
                    name="new poll"
                    active={activeItem === 'new poll'}
                    onClick={this.handleItemClick}
                  />
                  <Menu.Item
                    name="leader board"
                    active={activeItem === 'leader board'}
                    onClick={this.handleItemClick}
                  />
                </Menu>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Responsive>
        <Responsive as={Fragment} maxWidth={374}>
          <Grid>
            <Grid.Row>
              <Grid.Column>
                <Image
                  src="images/avatars/avatar1.png"
                  avatar
                  spaced="right"
                  verticalAlign="bottom"
                />
                Irena Popova
                <Button
                  content="Logout"
                  icon="arrow alternate circle right"
                  labelPosition="right"
                  basic
                  compact
                  floated="right"
                />
              </Grid.Column>
            </Grid.Row>
            <Grid.Row>
              {/* <Grid.Column> */}
              <Menu pointing secondary widths={3}>
                <Menu.Item
                  name="home"
                  active={activeItem === 'home'}
                  onClick={this.handleItemClick}
                />
                <Menu.Item
                  name="new poll"
                  active={activeItem === 'new poll'}
                  onClick={this.handleItemClick}
                />
                <Menu.Item
                  name="leader board"
                  active={activeItem === 'leader board'}
                  onClick={this.handleItemClick}
                />
              </Menu>
              {/* </Grid.Column> */}
            </Grid.Row>
          </Grid>
        </Responsive>

        <Segment>
          <img
            src="/images/wireframe/media-paragraph.png"
            style={{ width: '100%' }}
            alt="media"
          />
        </Segment>
        <p>{faker.lorem.paragraphs(1)}</p>
        <Image src="images/avatars/avatar6.png" size="mini" />
        <Image src="images/avatars/avatar4.png" size="tiny" />
        <Image src="images/avatars/avatar7.png" size="small" />
        <Image src="images/avatars/avatar5.png" size="medium" />
      </div>
    );
  }
}

export default UITest2;

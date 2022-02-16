import React from "react";
import { Card, List } from "semantic-ui-react";
import moment from "moment";
import "./styles.css";

const Weather = ({ weatherData }) => (
  <Card>
    <Card.Content className="header-sec">
      <Card.Header>{weatherData.name}</Card.Header>
    </Card.Content>
    <Card.Content>
      <List>
        <List.Item>
          <List.Header as="a">Sunrise:</List.Header>
          <List.Description>
            {new Date(weatherData.sys.sunrise * 1000).toLocaleTimeString(
              "en-IN"
            )}
          </List.Description>
        </List.Item>
        <List.Item>
          <List.Header as="a">Sunset:</List.Header>
          <List.Description>
            {new Date(weatherData.sys.sunset * 1000).toLocaleTimeString(
              "en-IN"
            )}
          </List.Description>
        </List.Item>
        <List.Item>
          <List.Header as="a">Description:</List.Header>
          <List.Description>
          {weatherData.weather[0].main}
          </List.Description>
        </List.Item>
        <List.Item>
          <List.Header as="a">Sunset:</List.Header>
          <List.Description>
            {new Date(weatherData.sys.sunset * 1000).toLocaleTimeString(
              "en-IN"
            )}
          </List.Description>
        </List.Item>
        <List.Item>
          <List.Header as="a">Sunset:</List.Header>
          <List.Description>
            {new Date(weatherData.sys.sunset * 1000).toLocaleTimeString(
              "en-IN"
            )}
          </List.Description>
        </List.Item>
        <List.Item>
          <List.Header as="a">Humidity:</List.Header>
          <List.Description>
          {weatherData.main.humidity} 
          </List.Description>
        </List.Item>
        <List.Item>
          <List.Header as="a">Day:</List.Header>
          <List.Description>
          {moment().format("dddd")}
          </List.Description>
        </List.Item>
        <List.Item>
          <List.Header as="a">Date:</List.Header>
          <List.Description>
          {moment().format("LL")}
          </List.Description>
        </List.Item>
        <List.Item>
          <List.Header as="a">Min Temp:</List.Header>
          <List.Description>
          {weatherData.main.temp_min}
          </List.Description>
        </List.Item>
        <List.Item>
          <List.Header as="a">Max Temp:</List.Header>
          <List.Description>
          {weatherData.main.temp_max}
          </List.Description>
        </List.Item>
      </List>
      
    </Card.Content>
  </Card>
);

export default Weather;

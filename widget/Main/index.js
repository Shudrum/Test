import axios from 'axios';
import React from 'react';
import HotelList from 'widget/HotelList';

class Main extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      page: 1,
      weekends: [],
    };
    this.openPage(this.state.page);
  }

  openPage(page) {
    axios({
      method: 'get',
      // eslint-disable-next-line max-len
      url: `http://api.weekendesk.com/api/weekends.json?orderBy=priceQuality&locale=fr_FR&limit=10&page=${page}`,
    })
      .then((result) => {
        this.setState({
          weekends: result.data.exactMatch,
        });
      });
  }

  render() {
    return (
      <div className="container">
        <HotelList list={this.state.weekends} />
      </div>
    );
  }
}

export default Main;

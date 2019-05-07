import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import MainContent from './MainContent';
import Views from './Views';


class Components extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [
        {
          id: 1,
          fulName: 'Shaqe',
          birthData: '11/10/2019',
          location: 'Yerevan',
          skype: 'Shaqe',
          email: 'tshaqe@gmail.com',
          skills:[
            {name:'BEM', value:false},
            {name:'BEM', value:false},
          ]
        },
        {
          id: 2,
          fulName: 'Shaqe1',
          birthData: '11/10/20179',
          location: 'YSisian',
          skype: 'Shaqeee',
          email: 'tshaqe@gmail.ru'
        }
      ],

    }
  }
  addUser = e => {

  };
  render() {
    return (

      <>
        {
          this.state.users.map((user) => {
            return (
              <form onSubmit={this.addUser}>
                <MainContent
                  key={user.id}
                  id={user.id}
                  fullName={user.fullName}
                  birthData={user.birthData}
                  location={user.location}
                  skype={user.skype}
                  email={user.email}
                />
                <button type="submit">Submit</button>
              </form>
            )
          })
        }
        <Views />
      </>
    );
  }
}
class App extends React.Component {
  render() {
    return (
      <Router>
        <Route path="/views" component={Views} />
        <Route path="/" exact component={Components} />
      </Router>
    );
  }

}


export default App;

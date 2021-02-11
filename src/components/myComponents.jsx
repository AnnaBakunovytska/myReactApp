import ButtonCounter from './Counter';
import User from './User'

export const MyCompanent = {
  Header: (props) => {
    return (
      <header className="App-header">
        <img src={props.logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <ButtonCounter />
      </header>)
  },
  Body: () => <h1>Home Work</h1>,
  Users: () => {
    const users = [
      { id: 1, firstName: "John", lastName: "Doe", age: 24, job: "Developer" },
      { id: 2, firstName: "Kate", lastName: "Reton", age: 22, job: "Chef" },
      { id: 3, firstName: "Melissa", lastName: "Lout", age: 41, job: "Developer" },
      { id: 4, firstName: "Ann", lastName: "Willington", age: 23, job: "Driver" },
      { id: 5, firstName: "Michel", lastName: "Plank", age: 55, job: "Developer" },
      { id: 6, firstName: "Bob", lastName: "Palanski", age: 32, job: "Waiter" },
      { id: 7, firstName: "Jack", lastName: "Daniels", age: 23, job: "Developer" },
      { id: 8, firstName: "Poul", lastName: "Torn", age: 65, job: "Cashier" },
    ];

    return (
      <>
        <h3>Info about users</h3>
        <ol class='user-list'>
          {
            users.map((item) =>
              <User key={item.id} user={item} />
            )
          }
        </ol>
      </>
    )
  }


}


import {Component} from 'react'
import './index.css'

const countryAndCapitalsList = [
  {
    id: 'NEW_DELHI',
    capitalDisplayText: 'New Delhi',
    country: 'India',
  },
  {
    id: 'LONDON',
    capitalDisplayText: 'London',
    country: 'United Kingdom',
  },
  {
    id: 'PARIS',
    capitalDisplayText: 'Paris',
    country: 'France',
  },
  {
    id: 'KATHMANDU',
    capitalDisplayText: 'Kathmandu',
    country: 'Nepal',
  },
  {
    id: 'HELSINKI',
    capitalDisplayText: 'Helsinki',
    country: 'Finland',
  },
]

class Capitals extends Component {
  state = {capitalId: countryAndCapitalsList[0].id}

  onChangeCapital = event => {
    this.setState({capitalId: event.target.value})
  }

  getCountry = capitalId => {
    const filteredCountry = countryAndCapitalsList.find(
      eachCapital => eachCapital.id === capitalId,
    )
    return filteredCountry.country
  }

  render() {
    const {capitalId} = this.state
    const capital = this.getCountry(capitalId)

    return (
      <div className="Container">
        <div className="card-container">
          <h1 className="heading">Countries and Capitals</h1>
          <con1>
            <select
              className="select-container"
              onChange={this.onChangeCapital}
              value={capitalId}
            >
              {countryAndCapitalsList.map(eachItem => (
                <option value={eachItem.id} key={eachItem.id}>
                  {eachItem.capitalDisplayText}
                </option>
              ))}
            </select>
            <p className="span-element">is capital of which country</p>
          </con1>
          <h1 className="capital">{capital}</h1>
        </div>
      </div>
    )
  }
}

export default Capitals

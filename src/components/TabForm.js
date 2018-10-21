import React, { Component } from 'react';
import Checkbox from '@material-ui/core/Checkbox';
import Switch from '@material-ui/core/Switch';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Tabs from './Tabs';

class TabForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      unlimitedBrands: false,
      unlimitedCollected: false,
      unlimitedAnalytics: false,
      unlimitedCRM: false,
      addExtraQuota: false,
      showMoreInformation: false,
      brands: [{ name: 'Loreal', postsComsumed: 1200, pauseCollect: false }, { name: 'Garnier', postsComsumed: 900, pauseCollect: false }, { name: 'Colorama', postsComsumed: 900, pauseCollect: false }]
    }
  }

  setBrandState = (index) => {
    let brands = this.state.brands;
    brands[index].pauseCollect = !brands[index].pauseCollect;

    this.setState({ brands: brands });
  }

  render() {
    return (
      <form>
        <div className="container-tab">
          <Tabs>
            <div label="USER">
              <div className="form-row">
                <div className="col-sm-3 text-right">
                  <label className="form-label">User</label>
                </div>
                <div className="col-sm-4 text-left">
                  <label className="form-label">12000212142002120@buzzmonitor.com.br</label>
                </div>
              </div>
              <div className="form-row">
                <div className="col-sm-3 text-right">
                  <label className="form-label">Activation state</label>
                </div>
                <div className="col-sm-4 text-left">
                  <select className="custom-select">
                    <option defaultValue>Active</option>
                  </select>
                </div>
              </div>
              <div className="form-row">
                <div className="col-sm-3 text-right">
                  <label className="form-label">Account type *</label>
                </div>
                <div className="col-sm-4 text-left">
                  <select className="custom-select">
                    <option defaultValue>Unassigned</option>
                  </select>
                </div>
              </div>
              <div className="form-row">
                <div className="col-sm-3 text-right">
                  <label className="form-label">Password</label>
                </div>
                <div className="col-sm-4 text-left">
                  <input type="password" className="form-control"></input>
                </div>
              </div>
              <div className="form-row">
                <div className="col-sm-3 text-right">
                  <label className="form-label">Password confirmation</label>
                </div>
                <div className="col-sm-4 text-left">
                  <input type="password" className="form-control"></input>
                </div>
              </div>
              <hr></hr>
              <div className="form-row">
                <div className="col-sm-3 text-right">
                  <label className="form-label">Brands limit*</label>
                </div>
                <div className="col-sm-2 text-left">
                  <input type="number" className="form-control" disabled={this.state.unlimitedBrands} ></input>
                </div>
                <div className="col-sm-2 text-right">
                  <label className="form-label">Unlimited</label>
                </div>
                <div className="col-sm-3 text-left">
                  <Switch color="primary" checked={this.state.unlimitedBrands} onChange={(event, checked) => this.setState({ unlimitedBrands: checked })} />
                </div>
              </div>
              <div className="form-row">
                <div className="col-sm-3 text-right">
                  <label className="form-label">Collected posts per month limit*</label>
                </div>
                <div className="col-sm-2 text-left">
                  <input type="number" className="form-control" disabled={this.state.unlimitedCollected}></input>
                </div>
                <div className="col-sm-2 text-right">
                  <label className="form-label">Unlimited</label>
                </div>
                <div className="col-sm-3 text-left">
                  <Switch color="primary" checked={this.state.unlimitedCollected} onChange={(event, checked) => this.setState({ unlimitedCollected: checked })} />
                </div>
              </div>
              <div className="form-row">
                <div className="col-sm-3 text-right">
                  <label className="form-label">Analytics profiles limit*</label>
                </div>
                <div className="col-sm-2 text-left">
                  <input type="number" className="form-control" disabled={this.state.unlimitedAnalytics}></input>
                </div>
                <div className="col-sm-2 text-right">
                  <label className="form-label">Unlimited</label>
                </div>
                <div className="col-sm-3 text-left">
                  <Switch color="primary" checked={this.state.unlimitedAnalytics} onChange={(event, checked) => this.setState({ unlimitedAnalytics: checked })} />
                </div>
              </div>
              <div className="form-row">
                <div className="col-sm-3 text-right">
                  <label className="form-label">CRM profiles limit*</label>
                </div>
                <div className="col-sm-2 text-left">
                  <input type="number" className="form-control" disabled={this.state.unlimitedCRM}></input>
                </div>
                <div className="col-sm-2 text-right">
                  <label className="form-label">Unlimited</label>
                </div>
                <div className="col-sm-3 text-left">
                  <Switch color="primary" checked={this.state.unlimitedCRM} onChange={(event, checked) => this.setState({ unlimitedCRM: checked })} />
                </div>
              </div>
            </div>
            <div label="PROJECTS & COLLECT">
              <div className="form-row">
                <div className="col-sm-3 text-right">
                  <label className="form-label">Pause collect</label>
                </div>
                <div className="col-sm-3 text-left">
                  <Checkbox color="primary" />
                </div>
              </div>
              <div className="form-row">
                <div className="col-sm-3 text-right">
                  <label className="form-label">Unlimited crawling</label>
                </div>
                <div className="col-sm-3 text-left">
                  <Checkbox color="primary" />
                </div>
              </div>
              <div className="form-row">
                <div className="col-sm-3 text-right">
                  <label className="form-label">Crawling quota</label>
                </div>
                <div className="col-sm-3 text-left">
                  <input type="number" className="form-control"></input>
                </div>
              </div>
            </div>
            <div label="MODULES">
              <div className="form-row">
                <div className="col-sm-3 text-right">
                  <label className="form-label">Active Analytics Pro</label>
                </div>
                <div className="col-sm-3 text-left">
                  <Checkbox color="primary" />
                </div>
              </div>
              <div className="form-row">
                <div className="col-sm-3 text-right">
                  <label className="form-label">Active Dashboards</label>
                </div>
                <div className="col-sm-3 text-left">
                  <Checkbox color="primary" />
                </div>
              </div>
              <div className="form-row">
                <div className="col-sm-3 text-right">
                  <label className="form-label">Active Historical Search</label>
                </div>
                <div className="col-sm-3 text-left">
                  <Checkbox color="primary" />
                </div>
              </div>
            </div>
            <div label="COMSUME">
              <div className="form-row">
                <div className="col-sm-3 text-right">
                  <label className="form-label">Posts consumed / quota (%)</label>
                </div>
                <div className="col-sm-5 text-left">
                  <div className="progress">
                    <div className="progress-bar" style={{ width: '50%' }}>50%</div>
                  </div>
                </div>
                <div className="col-sm-2 text-center button-form">
                  <button className="btn btn-primary btn-sm" type="button" onClick={() => this.setState({ showMoreInformation: !this.state.showMoreInformation })}>More information <FontAwesomeIcon icon={this.state.showMoreInformation ? "minus-square" : "plus-square"} size="lg" /></button>
                </div>
                <div className="col-sm-2 text-center button-form">
                  <button className="btn btn-primary btn-sm" type="button" onClick={() => this.setState({ addExtraQuota: !this.state.addExtraQuota })}>Add quota <FontAwesomeIcon icon={this.state.addExtraQuota ? "minus-square" : "plus-square"} size="lg" /></button>
                </div>
              </div>
              <div style={{ display: this.state.showMoreInformation ? '' : 'none' }}>
                <div className="form-row">
                  <div className="col-sm-3 text-right">
                    <label className="form-label">Posts collecteds in month</label>
                  </div>
                  <div className="col-sm-2 text-left">
                    <label className="form-label"><i>3000</i></label>
                  </div>
                </div>
                <div className="form-row">
                  <div className="col-sm-3 text-right">
                    <label className="form-label">Current quota limit</label>
                  </div>
                  <div className="col-sm-2 text-left">
                    <label className="form-label"><i>6000</i></label>
                  </div>
                </div>
              </div>
              <div className="form-row" style={{ display: this.state.addExtraQuota ? '' : 'none' }}>
                <div className="col-sm-3 text-right">
                  <label className="form-label">Add extra quota</label>
                </div>
                <div className="col-sm-2 text-left">
                  <input type="number" className="form-control"></input>
                </div>
              </div>
              <hr></hr>
              <div className="form-row">
                <div className="col-sm-3 text-center">
                  <h4>Brands</h4>
                </div>
              </div>
              {this.state.brands.map((elem, index) =>
                <div className="form-row" key={elem.name}>
                  <div className="col-sm-2 text-right">
                    <label className="form-label">{elem.name}</label>
                  </div>
                  <div className="col-sm-3 text-right">
                    <label className="form-label">Posts consumed / quota</label>
                  </div>
                  <div className="col-sm-4 text-left">
                    <div className="progress">
                      <div className="progress-bar" style={{ width: ((elem.postsComsumed / 6000) * 100) + '%' }}>{elem.postsComsumed}/6000</div>
                    </div>
                  </div>
                  <div className="col-sm-2 text-right">
                    <label className="form-label">Pause collect</label>
                  </div>
                  <div className="col-sm-1 text-left">
                    <Checkbox color="primary" checked={elem.pauseCollect} onChange={() => this.setBrandState(index)} />
                  </div>
                </div>)}
            </div>
            <div label="OTHER">
              <div className="form-row">
                <div className="col-sm-3 text-right">
                  <label className="form-label">Sponsored Facebook posts</label>
                </div>
                <div className="col-sm-3 text-left">
                  <Checkbox color="primary" />
                </div>
              </div>
              <div className="form-row">
                <div className="col-sm-3 text-right">
                  <label className="form-label">Social News Sources</label>
                </div>
                <div className="col-sm-3 text-left">
                  <input type="text" className="form-control"></input>
                </div>
              </div>
            </div>
          </Tabs>
          <div className="container-button text-right">
            <button className="btn btn-primary" type="submit">Save</button>
          </div>
        </div>
      </form>
    );
  }
}

export default TabForm;
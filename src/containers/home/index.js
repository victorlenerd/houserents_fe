import React from 'react';

import Filter from '../../components/filter';
import Map from '../../components/map';
import List from '../../components/list';

class Home extends React.PureComponent {
    constructor(props) {
        super(props);
        
        this.state = {
            no_bed: 1,
            no_bath: 1,
            no_toilets: 1,
    
            tno_bed: 1,
            tno_bath: 1,
            tno_toilets: 1,
    
            currentArea: {
                lat: 6.5005,
                lng: 3.3666
            },
            prices: [],
            areaPrice: 0,
            mode: true,
            sort: 'high',
        }
    }

    componentDidMount () {    
        this.sort = this.sort.bind(this);
        this.centerChange = this.centerChange.bind(this);
        this.updateOption = this.updateOption.bind(this);
    }
    
    updateOption(e)  {
        let name =  e.target.name;
        let value = e.target.value; 
    
        this.setState({
            [name]: value
        });
    }

    centerChange(center) {
        this.setState({ 
            currentArea: {
                lat: center.lat(),
                lng: center.lng()
            }
        });
    }

    sort(e) {
        let type = e.target.value;
        let pairAreaPrice = this.state.areas.map((A, i)=> ({ a: A, p: this.state.prices[i]}))
        
        let sortedPairs = (type !== 'high') ? 
            pairAreaPrice.sort((a, b) => a.p - b.p) : 
            pairAreaPrice.sort((a, b) => b.p - a.p);

        this.setState({
            prices: sortedPairs.map((sp) => sp.p),
            areas: sortedPairs.map((sp) => sp.a)
        });
    }

    render () {
        return (
            <>
                <section>
                    <div className="container">
                        <Map
                            onCenterChange={this.centerChange}
                        />
                        <Filter
                            showSort={true}
                            sort={this.sort}
                            updateOption={this.updateOptions}
                        />
                        <List />
                    </div>
                </section>
            </>
        );
    }   
}

export default Home;
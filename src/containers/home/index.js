import React from 'react';
import Filter from '../../components/filter';
import Map from '../../components/map';
import List from '../../components/list';

class Home extends React.PureComponent {
    constructor(props) {
        super(props);
        
        this.state = {
            apartments: [],
    
            currentArea: {
                lat: 6.5005,
                lng: 3.3666
            },
            
            searchText: "Yaba, Lagos, Nigeria",
        };

        this.centerChange = this.centerChange.bind(this);
    }

    componentDidMount() {
        this.setState({
            apartments: window.__DATA__.apartments
        });
    }
    

    centerChange(center, searchText) {
        this.setState({ 
            currentArea: {
                lat: center.lat(),
                lng: center.lng()
            },
            searchText
        });
    }

    sort(type) {
        let pairAreaPrice = this.state.apartments.map((A, i)=> ({ a: A, p: this.state.apartments[i]}))
        
        let sortedPairs = (type !== 'high') ? 
            pairAreaPrice.sort((a, b) => a.p - b.p) : 
            pairAreaPrice.sort((a, b) => b.p - a.p);

        this.setState({
            prices: sortedPairs.map((sp) => sp.p),
            apartments: sortedPairs.map((sp) => sp.a)
        });
    }

    onPageScroll() {
        
    }

    render () {
        const { apartments } = this.state;

        console.log({ apartments });

        return (
            <section>
                <div className="container">
                    <Map onCenterChange={this.centerChange} />
                    <Filter>
                        {(data, FilterFields) => (
                            <>
                                <FilterFields />
                                <div className="input-container col-lg-8 col-lg-offset-2 col-md-12 col-sm-12 col-xs-12">
                                    <ul className="lists">
                                        {apartments.map((data, index) => (<List data={data} key={`list-${index}`} />))}
                                    </ul>
                                </div>
                            </>
                        )}
                    </Filter>
                </div>
            </section>
        );
    }   
}

export default Home;
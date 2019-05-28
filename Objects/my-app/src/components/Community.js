import City from './City.js';
// import myData from './CityList.json';

class Community {
	constructor(){
		this.cityArrList = [];
		this.counter = 0;
		// this.cityData();
	}

// cityData() {
//         const cityArray = myData;
//         cityArray.forEach(item => {
//             this.addCity(item.name,item.lat,item.long,item.pop)
//         })
// }

addCity(name,lat,long,pop) {
		const obj = new City(this.counter,name,lat,long,pop);
		this.cityArrList.push(obj);
		this.counter++; 
}

getPop() {
		this.totalPop = this.cityArrList.reduce((p,pt) => {             
		return parseInt(p) + parseInt(pt.pop);
        }, 0);
        console.log("Hi from",this.totalPop);
        return this.totalPop;
}

mostNorthern() {
        const northern = this.cityArrList.reduce((x, y) => {
            if (x.lat > y.lat) {
                return x
            }
                return y
        },0);
        return `${northern.name} ${northern.lat}`;
}

mostSouthern() {
        const southern = this.cityArrList.reduce((x, y) => {
            if (x.lat < y.lat) {
                return x
            }
            return y
        },0);
        return `${southern.name} ${southern.lat}`;
}

movedInCommunity(id, people) {
        this.cityArrList.forEach(item => {
            if(item.id === id) {
                item.movedIn(people);                
            }
           
        })
}

movedOutCommunity(id,people) {
    	this.cityArrList.forEach(item => {
    		if(item.id === id) {
    			item.movedOut(people);    			 
    		}
    	})
}


showCity(id) {
        let answer;
        this.cityArrList.forEach(item => {
            if(item.id === id) {
                answer = item.show();
                
            }
        })
        return `${answer}`;
    }


deleteCity(id) {
        let index = 0;
        this.cityArrList.forEach(item => {
            if(item.id === id) {
                this.cityArrList.splice(index, 1)
                return
            }
            index++;
        })
    }







}
export default Community;
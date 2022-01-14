import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers: {
        Authorization: 'Bearer c0GgrUBdbhPX9GNyzYqTnuqcxyEN7bBRLSIeqPiaqNCXryLT289KF-PtVCpGQkzjMNMSK1tmEmiFq_IquVbP0sfwhq6iHz80DgXprBzZngzv_HPKojrPzZMTDgPdYXYx'
    }
});
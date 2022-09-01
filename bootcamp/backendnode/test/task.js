let chai = require('chai');
let chaiHttp = require('chai-http');
let Server = require('../app');
const server = new Server();

//Assertion Style
chai.should();

chai.use(chaiHttp);

describe('User API', () => {
    /**
     * Test the GET Route
     */
    describe('GET /api/user', () => {
        it('It should GET all the users', (done)=>{
            chai.request(server)
                .get('/api/user')
                .end((err,response) => {
                    response.should.have.status(200);
                done();
                })
        })
        // it('It should NOT GET all the tasks', (done) => {
        //     chai.request(server)
        //         .get("api/user")
        //         .end((err,response) => {
        //             response.should.have.status(404);
        //         done();
        //         })
        // })
    })

    /**
     * Test the POST Route
     */

    /**
     * Test the PUT Route
     */

    /**
     * Test the PATCH Route
     */
    
    
    /**
     * Test the DELETE Route
     */


})

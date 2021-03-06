import request from 'supertest';
import {
    expect
} from 'chai';

import app from './index';

describe('GET /', () => {
    it('should respond with text message "Hello World"', (done) => {
        request(app)
            .get('/')
            .expect(200)
            .end((err, res) => {
                if (err) {
                    done(err);
                    return;
                }

                expect(res.text).to.equal('Hello World');
                done();
            });
    });
});

describe('POST /login', () => {
    it('should respond with profile', (done) => {
        request(app)
            .post('/login')
            .send({
                email: 'rdd9223@gmail.com',
                password: 'qwerty'
            })
            .expect(200)
            .end((err, res) => {
                if (err) {
                    done(err);
                    return;
                }

                expect(res.body).has.all.keys([
                    'id', 'email', 'name', 'age'
                ]);
                expect(res.body.id).to.equal('haaa-am');
                expect(res.body.name).to.equal('김개똥');
                expect(res.body.age).to.equal(20);
                done();
            });
    })
})
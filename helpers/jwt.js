const jwt = require('jsonwebtoken');

const generarJWT = ( uid, name) => {
    
    

    return new Promise ( (resolve, reject) => {
        
        const payload = {
            uid,
            name
        };

        jwt.sign(payload, process.env.SEED, {
            expiresIn: '2h',
        }, (err, token) => {

            if ( err ) {
                console.log(err);
                reject ('no se pudo generar el roken');
            }

            resolve ( token );
        });
    })
}


module.exports = {
    generarJWT
}
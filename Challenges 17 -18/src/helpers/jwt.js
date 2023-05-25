const jtw = requiere('jsonwebtoken');

const generarJWT = (uid,name) => {
    return new Promise ((resolve, reject) => {
        const  payload = {uid: uid, name: name}
        jtw.sing(payload, process.env.SECRET_JWT_SEED,{
            expiresIn: '2h',
        }, (error, token) => {
            if (error) {
                console.log(error);
                reject('No se pudo generar el token');
            }
            resilve (token)
        })
    })
}

module.exports = {generarJWT}